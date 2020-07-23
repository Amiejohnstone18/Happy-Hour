// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//          document.getElementById("data").innerHTML = this.responseText;
// 	}
// });

// xhr.open("GET", "https://api-cocktails.herokuapp.com/api/v1/cocktails");
// xhr.setRequestHeader('Authorization', 'Token token=QtxcH4qt0pxEdy3loSTzVQtt');

// xhr.send(data);



// NEW 

 var gData = [];

 function setData(data) {
     console.log(data);
    gData = data
 }
 function myFunction(id) {
    let drink = gData.filter(cocktail => {
        return cocktail.id === id
    })

   console.log(drink)
 }

 let headers = {
    'Authorization': 'Token token=QtxcH4qt0pxEdy3loSTzVQtt'
 }
 let response = fetch("https://api-cocktails.herokuapp.com/api/v1/cocktails", {headers:headers})
 .then(data => data.json()).then(data => {
    setData(data)
    let element = document.querySelector('#data')
    let buttonArray = []
    data.forEach(item => {
        buttonArray.push(`<button onClick=myFunction(${item.id})>${item.name})</button>`)
        element.innerHTML = buttonArray.join('') 
    })
 })




// NEW 

//function changeButton(element, endpoint) {
//    xHttp = new XMLHttpRequest();
//    xHttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById(element).innerHTML = this.responseText;
//            document.getElementById(element).style = "font-size;100%";
//        }
//    }
//    xHttp.open("GET", "https://api-cocktails.herokuapp.com/api/v1/cocktails" + endpoint + "&per_page=1", true);
//    xHttp.setRequestHeader('Authorization', 'Token token=QtxcH4qt0pxEdy3loSTzVQtt');
//    xHttp.send();
// }

