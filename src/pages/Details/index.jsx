import { Container, Content } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";

import { AmountItems } from "../../components/AmountItems";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/img-placeholder.png";

export function Details() {
  const { id } = useParams();
  const [dishes, setDishes] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${id}`, {
        withCredentials: true,
      });
      const dishData = response.data;
      setDishes(dishData);
      const avatarUrl = dishData.avatar
        ? `${api.defaults.baseURL}/files/${dishData.avatar}`
        : avatarPlaceholder;
      setAvatarURL(avatarUrl);
    }
    fetchDishes();
  }, []);

  if (!dishes) {
    return null;
  }

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/" id="backButton">
            <span>&lt;</span> back
          </Link>

          <div id="itemContainer">
            <div id="imgItemContainer">
              <img src={avatarURL} alt={dishes.title} />
            </div>
            <div id="aboutItemContainer">
              <h1>{dishes.title}</h1>
              <p>{dishes.description}</p>
              <div id="tagsContainer">
                {dishes.tags &&
                  dishes.tags.map((tag, index) => (
                    <Tag key={index} title={tag.name} />
                  ))}
              </div>
              <div id="addItemsContainer">
                <AmountItems id={id} />
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
