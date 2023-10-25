import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NoteItems } from "../../components/NoteItems";

import { AiOutlineUpload } from "react-icons/ai";
import { Button } from "../../components/Button";

import { useParams, useNavigate, Link } from "react-router-dom";

export function EditDish() {
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  function handleAddTag() {
    setNewTag("");
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleUpdateDish(e) {
    e.preventDefault();

    if (newTag) {
      return alert("You have to press the '+' to add a tag");
    }

    if (!title || !category || !description || !price || tags.length === 0) {
      return alert("Please, fill in all fields and try again!");
    }

    try {
      await api.put(
        `/dishes/${id}`,
        {
          avatar,
          title,
          category,
          description,
          price,
          tags,
        },
        { withCredentials: true }
      );
      alert("Item was updated succesfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(
        "It's not possible to update the item. Try to sign out and login again"
      );
    }
  }

  async function handleDeleteDish(e) {
    e.preventDefault();
    try {
      if (confirm("Are you sure you want to remove this item?")) {
        await api.delete(`/dishes/${id}`, { withCredentials: true });
        alert("Item was removed succesfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      return alert(
        "It's not possible to remove this item. Try to sign out and login again"
      );
    }
  }

  useEffect(() => {
    api
      .get(`/dishes/${id}`)
      .then((dish) => {
        setTitle(dish.data.title);
        setCategory(dish.data.category);
        setTags(dish.data.tags);
        setPrice(dish.data.price);
        setDescription(dish.data.description);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/" id="backButton">
            <span>&lt;</span> back
          </Link>

          <h1>Edit dish</h1>
          <div id="addDishContainer">
            <div className="rows">
              <div id="imgPictureBox">
                <p>Picture</p>
                <label htmlFor="selectImg">
                  <AiOutlineUpload /> <p>select picture</p>
                </label>
                <input
                  id="selectImg"
                  type="file"
                  accept="image/*"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>

              <div id="dishNameBox">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Ex: Caesar salad"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div id="dishCategory">
                <p>Category</p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="meal">meal</option>
                  <option value="dessert">dessert</option>
                  <option value="drink">drink</option>
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
                      value={tag.name ? tag.name : tag}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <p>Description</p>
            <textarea
              placeholder="Information about the dish with ingredients and composition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="editButtons">
              <Button
                className="Btn remove"
                title="Delete dish"
                onClick={handleDeleteDish}
              />
              <Button className="Btn" title="Save" onClick={handleUpdateDish} />
            </div>
          </div>
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
