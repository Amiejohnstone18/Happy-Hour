var gData = [];

function setData(data) {
  console.log(data);
  gData = data;
}
function myFunction(id) {
  let drink = gData.filter((cocktail) => {
    return cocktail.id === id;
  });
  console.log(drink);
  document.getElementById("long-island-iced-tea").innerHTML =
    "<h1>" + drink[0].name + "</h1>" + "<p>" + drink[0].description + "</p>";
  document.getElementById(
    "image_thumb_url"
  ).innerHTML = `<img src="${drink[0].image_thumb_url}" />`; //separated to allow the image to display next to the description
}

let headers = {
  Authorization: "Token token=QtxcH4qt0pxEdy3loSTzVQtt",
};
let response = fetch("https://api-cocktails.herokuapp.com/api/v1/cocktails", {
  headers: headers,
})
  .then((data) => data.json())
  .then((data) => {
    setData(data);
    console.log(data);
    let element = document.querySelector("#data");
    let buttonArray = [];
    data.forEach((item) => {
      buttonArray.push(
        `<button onClick=myFunction(${item.id})>${item.name}</button>`
      );
      element.innerHTML = buttonArray.join("");
    });
  });
