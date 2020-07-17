
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
         document.getElementById("data").innerHTML = this.responseText;
	}
});

xhr.open("GET", "https://api-cocktails.herokuapp.com/api/v1/cocktails");
xhr.setRequestHeader('Authorization', 'Token token=QtxcH4qt0pxEdy3loSTzVQtt');

xhr.send(data);
