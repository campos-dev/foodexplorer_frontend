import { useState } from "react";
import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NoteItems } from "../../components/NoteItems";

import { AiOutlineUpload } from "react-icons/ai";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { useAvatar } from "../../hooks/useAvatar";

export function AddDish() {
  const { avatarFile, avatarFileName, handleChangeAvatar, handleUpdateAvatar } =
    useAvatar();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("meal");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleAddDish(e) {
    e.preventDefault();

    if (newTag) {
      return alert("You have to press the '+' to add a tag");
    }

    if (!title || !category || !description || !price || tags.length === 0) {
      return alert("Please, fill in all fields and try again!");
    }

    try {
      const response = await api.post(
        "/dishes",
        {
          title,
          category,
          description,
          price,
          tags,
        },
        { withCredentials: true }
      );

      const dishes_id = response.data.dishes_id;

      await handleUpdateAvatar(dishes_id);

      alert("Item was registered succesfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(
        "It's not possible to register the item. Try to sign out and login again"
      );
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/" id="backButton">
            <span>&lt;</span> back
          </Link>

          <h1>Add dish</h1>
          <div id="addDishContainer">
            <div className="rows">
              <div id="imgPictureBox">
                <p>Picture</p>
                <label htmlFor="selectImg">
                  {avatarFile ? (
                    avatarFileName
                  ) : (
                    <>
                      <AiOutlineUpload /> <p>select picture</p>
                    </>
                  )}
                </label>
                <input
                  id="selectImg"
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleChangeAvatar(event)}
                />
              </div>

              <div id="dishNameBox">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Ex: Caesar salad"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div id="dishCategory">
                <p>Category</p>
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option>meal</option>
                  <option>dessert</option>
                  <option>drink</option>
                </select>
              </div>
            </div>

            <div className="rows">
              <div id="ingredientsTagBox">
                <p>Ingredients</p>
                <div id="TagsContainer">
                  {tags.map((tag, index) => (
                    <NoteItems
                      key={String(index)}
                      value={tag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))}
                  <NoteItems
                    value={newTag}
                    isNew
                    placeholder="new tag"
                    onChange={(e) => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                  />
                </div>
              </div>

              <div id="priceBox">
                <p>Price</p>
                <input
                  type="text"
                  placeholder="$00,00"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
            </div>

            <p>Description</p>
            <textarea
              placeholder="Information about the dish with ingredients and composition. Maximum of 250 characters"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              maxLength={250}
            />
            <Button id="saveBtn" title="Save" onClick={handleAddDish} />
          </div>
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
