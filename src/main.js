function weather() {
  let weather = "sunny";

  if (weather === "sunny") {
    document.getElementById("demo").innerHTML = "Wear sunglasses!";
  } else if (weather === "rainy") {
    console.log("Bring an umbrella!");
  } else {
    console.log("Dress normally.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", weather);
});
