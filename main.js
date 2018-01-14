var withButton = document.getElementsByClassName("button");
var textContent = "";

for (var i = 0; i < withButton.length; i++) {
   textContent = withButton[i];
   alert(textContent.innerHTML);
};
