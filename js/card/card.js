export function CardElement(data) {
    const iconCity = data.list[0].weather[0].icon;
    const { temp_max, temp_min, humidity, pressure } = data.list[0].main;
    console.log(data.list[0].sys.pod);
    const cardContainer = `
      <div class="card-header">
      <img src="${
        data.list[0].sys.pod === "n"
          ? "./img/background/dark.jpg"
          : "./img/background/light.jpg"
      }" alt="rover" />
  </div>
  <div class="card-clime">
      <img id="mainIcon" src="./img/animated/${iconCity}.svg" alt="" srcset="">
      <h2>${Math.round(data.list[0].main.temp)}°</h2>
  </div>
  <div class="card-body">
      <span class="tag ${
        data.list[0].sys.pod === "n" ? "tag-dark" : "tag-day"
      }">${data.city.name}</span>
      <h4 id="mainTitle">¿Cómo está el clima hoy en ${data.city.name}?</h4>
      <p id="descriptionCity">
          El clima se encuentra con una temperatura de ${temp_min}° la min, y la max con ${temp_max}°. Tiene una humedad de ${humidity}% y una presión de ${pressure} hPa.
      </p>
  </div>
      
      `;
    card.innerHTML = cardContainer;
  }
  