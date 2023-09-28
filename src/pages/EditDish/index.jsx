import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

import { AiOutlineUpload } from "react-icons/ai";
import { Button } from "../../components/Button";

export function EditDish() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText id="backButton">
            <span>&lt;</span> back
          </ButtonText>

          <h1>Edit dish</h1>
          <div id="addDishContainer">
            <div className="rows">
              <div id="imgPictureBox">
                <p>Picture</p>
                <label for="selectImg">
                  <AiOutlineUpload /> <p>select picture</p>
                </label>
                <input id="selectImg" type="file" accept="image/*" />
              </div>

              <div id="dishNameBox">
                <p>Name</p>
                <input type="text" placeholder="Ex: Caesar salad" />
              </div>

              <div id="dishCategory">
                <p>Category</p>
                <select>
                  <option>Meals</option>
                  <option>Desserts</option>
                  <option>Drinks</option>
                </select>
              </div>
            </div>

            <div className="rows">
              <div id="ingredientsTagBox">
                <p>Ingredients</p>
                <div id="TagsContainer">
                  <span>Naan bread</span>
                </div>
              </div>

              <div id="priceBox">
                <p>Price</p>
                <input type="text" placeholder="$00,00" />
              </div>
            </div>

            <p>Description</p>
            <textarea placeholder="Information about the dish with ingredients and composition" />
            <Button title="Save" />
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
