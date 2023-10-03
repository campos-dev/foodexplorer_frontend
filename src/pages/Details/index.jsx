import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

import Ravanello from "../../assets/foodThumbs/name=ravanello, size=400.png";
import { AmountItems } from "../../components/AmountItems";

import { Link } from "react-router-dom";

const Tags = [
  { index: 1, title: "lettuce" },
  { index: 2, title: "onion" },
];

export function Details() {
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
              <img src={Ravanello} alt="item name" />
            </div>
            <div id="aboutItemContainer">
              <h1>Ravanello Salad</h1>
              <p>
                Radishes, green leaves and sweet and sour sauce sprinkled with
                sesame. The naan bread adds a special touch.
              </p>
              <div id="tagsContainer">
                {Tags &&
                  Tags.map((tag) => <Tag key={tag.index} title={tag.title} />)}
              </div>
              <div id="addItemsContainer">
                <AmountItems amount={1} />
                <Button id="addButton" title={`add ∙ $${9.78}`} />
                <Button id="removeDishButton" title="exclude dish" />
              </div>
            </div>
          </div>
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
