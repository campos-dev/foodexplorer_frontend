import React, { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";

import { SearchContext } from "../../hooks/useSearch";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { CarouselSection } from "../../components/CarouselSection";
import { FoodThumbCaroussel } from "../../components/FoodThumbCaroussel";
import { Footer } from "../../components/Footer";

import macarons from "../../assets/macarons.png";

export function Home() {
  const [mealItems, setMealItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

  const { search } = useContext(SearchContext);

  useEffect(() => {
    api.get(`dishes?search=${search}&category=meal`).then((response) => {
      const meals = response.data;
      const mealComponents = meals.map((meal) => (
        <FoodThumbCaroussel
          key={meal.id}
          id={meal.id}
          avatar={meal.avatar}
          picName={meal.title}
          description={meal.description}
          price={meal.price}
          amount={meal.amount}
        />
      ));
      setMealItems(mealComponents);
    });

    api.get(`dishes?search=${search}&category=dessert`).then((response) => {
      const desserts = response.data;
      const dessertComponents = desserts.map((dessert) => (
        <FoodThumbCaroussel
          key={dessert.id}
          id={dessert.id}
          avatar={dessert.avatar}
          picName={dessert.title}
          description={dessert.description}
          price={dessert.price}
          amount={dessert.amount}
        />
      ));
      setDessertItems(dessertComponents);
    });

    api.get(`dishes?search=${search}&category=drink`).then((response) => {
      const drinks = response.data;
      const drinkComponents = drinks.map((drink) => (
        <FoodThumbCaroussel
          key={drink.id}
          id={drink.id}
          avatar={drink.avatar}
          picName={drink.title}
          description={drink.description}
          price={drink.price}
          amount={drink.amount}
        />
      ));
      setDrinkItems(drinkComponents);
    });
  }, [search]);
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

          {mealItems.length > 0 && (
            <CarouselSection title="Meals" items={mealItems} />
          )}

          {drinkItems.length > 0 && (
            <CarouselSection title="Drinks" items={drinkItems} />
          )}

          {dessertItems.length > 0 && (
            <CarouselSection title="Desserts" items={dessertItems} />
          )}
        </Content>
        <Footer />
      </main>
    </Container>
  );
}
