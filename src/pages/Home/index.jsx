import React from "react";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { CarouselSection } from "../../components/CarouselSection";
import { FoodThumbCaroussel } from "../../components/FoodThumbCaroussel";
import { Footer } from "../../components/Footer";

import macarons from "../../assets/macarons.png";

import Ravanello from "../../assets/foodThumbs/name=ravanello, size=400.png";

let mealItems = [
  <FoodThumbCaroussel
    pic={Ravanello}
    picName="Ravanello Salad1"
    description="Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds"
    price="$9.97"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic={Ravanello}
    picName="Ravanello Salad2"
    description="Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds"
    price="$9.97"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic={Ravanello}
    picName="Ravanello Salad3"
    description="Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds"
    price="$9.97"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic={Ravanello}
    picName="Ravanello Salad4"
    description="Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds"
    price="$9.97"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic=""
    picName="Another dish"
    description="Example of another dish"
    price="$19.97"
    amount="01"
  />,
];

let dessertItems = [
  <FoodThumbCaroussel
    pic=""
    picName="Flan1"
    description="Sweet caramel puding"
    price="$5.99"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic=""
    picName="Flan2"
    description="Sweet caramel puding"
    price="$5.99"
    amount="01"
  />,
];

let drinkItems = [
  <FoodThumbCaroussel
    pic=""
    picName="AppleJuice1"
    description="Sweet caramel puding"
    price="$4.99"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic=""
    picName="AppleJuice2"
    description="Sweet caramel puding"
    price="$4.99"
    amount="01"
  />,
  <FoodThumbCaroussel
    pic=""
    picName="AppleJuice3"
    description="Sweet caramel puding"
    price="$4.99"
    amount="01"
  />,
];

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div id="banner">
            <img src={macarons} alt="macarons and berries" />

            <div id="textContainer">
              <h1>Unbeatable flavors</h1>
              <p>Feel the care of the preparation with selected ingredients</p>
            </div>
          </div>

          <CarouselSection title="Meals" items={mealItems} />

          <CarouselSection title="Desserts" items={dessertItems} />

          <CarouselSection title="Drinks" items={drinkItems} />
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
