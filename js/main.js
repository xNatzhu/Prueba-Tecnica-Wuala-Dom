import { CardElement } from "./card/card.js";
const card = document.getElementById("card");

City();

card.addEventListener("click", () => {
  City();
});

function City() {
  const listCity = [
    "Buenos Aires",
    "Cordoba",
    "Cali",
    "Santiago",
    "Damasco",
    "Tokio",
    "Japon",
    "Paris",
    "Roma",
    "Nueva York",
    "Barcelona",
    "California",
    "Amsterdam",
    "Manchester",
    "Madrid",
    "Berlin",
    "Moscu",
    "Lyon",
  ];
  const randomCity = Math.floor(Math.random() * listCity.length);
  const URLAPICITY = `https://api.openweathermap.org/data/2.5/forecast?q=${listCity[randomCity]}&APPID=6752644c4b10d307e40b484055d4f5a5&units=metric`;

  fetch(URLAPICITY)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      CardElement(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
