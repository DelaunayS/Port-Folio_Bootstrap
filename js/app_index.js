
// ouvre le mail dans une fenêtre alert
let mail= document.getElementById("contact_mail")

mail.onclick =function () {alert ("sebastien.delaunay44@gmail.com")};

// ouvre la page WebMaternelle
let page1= document.getElementById("page1")
page1.onclick = function (){
    window.open("https://delaunays.github.io/WebMaternelle/", "_blank");
};

// ouvre la page Visualiser partie echecs
let page2= document.getElementById("page2")
page2.onclick = function (){
    window.open("https://delaunays.github.io/WebVisualiserPartie/", "_blank");
};

// ouvre la page de l'accordeon de TP
let page3= document.getElementById("page3")
page3.onclick = function (){
    window.open("https://delaunays.github.io/TPReact/", "_blank");
};