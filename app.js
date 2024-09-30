const formCity = document.getElementById("formCity");
const submit = document.getElementById("submit");
const address = document.getElementById("address");
const description = document.getElementById("description");
const tempmax = document.getElementById("tempmax");
const tempmin = document.getElementById("tempmin");
const temp = document.getElementById("temp");
const preciptype = document.getElementById("preciptype");
let cityObject = {
  address: "",
  description: "",
  tempmax: "",
  tempmin: "",
  temp: "",
  preciptype: "",
};
submit.addEventListener("click", (event) => {
  event.preventDefault();
  city = formCity.value;
  async function getWeather() {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=ASVEER7BWGTSTDSMJU8VW3TY9`,
      { mode: "cors" }
    );
    const cityData = await response.json();
    cityObject.address = cityData.address;
    cityObject.description = cityData.description;
    cityObject.tempmax = Math.floor((cityData.days[0].tempmax - 32) / 1.8);
    cityObject.tempmin = Math.floor((cityData.days[0].tempmin - 32) / 1.8);
    cityObject.temp = Math.floor((cityData.days[0].temp - 32) / 1.8);
    cityObject.preciptype = cityData.days[0].preciptype[0];
    address.innerText = "Address : " + cityObject.address;
    description.innerText = "Description : " + cityObject.description;
    tempmax.innerText = "Max Temp : " + cityObject.tempmax;
    tempmin.innerText = "Min Temp : " + cityObject.tempmin;
    temp.innerText = "Current Temp : " + cityObject.temp;
    preciptype.innerText = "Preciptype : " + cityObject.preciptype;
  }
  getWeather();
});
