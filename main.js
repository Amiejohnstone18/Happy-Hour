var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.statuts === 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://api-cocktails.herokuapp.com/api/v1/cocktails");
xhr.setRequestHeader('Authorization', 'Token token=QtxcH4qt0pxEdy3loSTzVQtt');
xhr.send();
