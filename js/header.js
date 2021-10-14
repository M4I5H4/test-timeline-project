const h1 = document.createElement("h1");
h1.innerHTML = "Mayme's Bakery";
document.body.appendChild(h1);
const subtitle =document.createElement("p");
subtitle.innerHTML = "A history of Baking";
document.body.appendChild(subtitle)

h1.setAttribute("class", "head-title");
subtitle.setAttribute("class", "sub-title");

//const header = '<header class="head"> <h1 class="head-title">Maymes Bakery</h1> <p class="sub-title">A history of Baking</p>';
//const top = document.createElement("header");
//top.innerHTML = header;
//document.body.appendChild(top);