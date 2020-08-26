//querySelector()
var bodyTag = document.querySelector("body");
bodyTag.style.textAlign = "center";
bodyTag.style.fontFamily = "cursive";
bodyTag.style.margin = "50px";

var firstHTag = document.querySelector("body > h1");
firstHTag.style.color = "blue";
firstHTag.style.fontSize = "50px";

var firstPTag = document.querySelector("body > p");
firstPTag.style.fontSize = "20px";

//querySelectorAll()
var allPTags = document.querySelectorAll("div p");
for (var i = 0; i < allPTags.length; i++) {
    allPTags[i].style.fontFamily = "cursive";
    allPTags[i].style.border = "2px solid darkgrey";
    allPTags[i].style.padding = "1em";
}

//getElementById()
var subHeader = document.getElementById("main-title");
subHeader.style.color = "darkblue";
subHeader.style.textShadow = "1px 1px 2px grey";

var list = document.getElementById("animal-list");
list.style.display = "grid";
list.style.justifyItems = "center";
list.style.alignItems = "center";

//getElementsByClassName()
var infoTags = document.getElementsByClassName("info-text");
for (var i = 0; i < infoTags.length; i++) {
    infoTags[i].style.backgroundColor = "lightgrey";
}

//getElementsByTagName()
var LiTags = document.getElementsByTagName("li");
for(i = 0; i < LiTags.length; i++) {
    LiTags[i].style.color = "red";
    LiTags[i].style.textAlign = "left";
}

//createElement()
var newElement = document.createElement("p");
var parent = document.getElementById("main-content");
parent.append(newElement);
newElement.innerHTML = "Be sure to also check out the Daily Dose and Weekly Dose series, bringing you virtually behind the scenes for incredible experiences.";
newElement.style.color = "darkblue";

//createTextNode()
var newH = document.createElement("h2");
var text = document.createTextNode("SHARING THE ZOO WITH YOU");
var parent = document.getElementById("animal-list");
newH.appendChild(text);
parent.appendChild(newH);

//RemoveChild()
var item = document.getElementById("myLi");
item.parentNode.removeChild(item);

//classList add(), remove(), toggle()
var calgaryImg = document.getElementById("image");
calgaryImg.setAttribute("src", "https://www.calgaryzoo.com/sites/default/files/styles/landscape_large/public/2020-06/Zooventure%20Map%20-%20Summer%20Season%202020.jpg?itok=dCUPCqvp");

calgaryImg.classList.add("small-image");
calgaryImg.classList.remove("small-image");
calgaryImg.classList.toggle("small-image");





