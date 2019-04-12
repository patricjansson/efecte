// ==UserScript==
// @name        Efecte Edge
// @namespace   http://github.com/patricjansson 
// @include https://edge.sys.kths.e/*
// @version     0.1
// ==/UserScript==
 
var input=document.createElement("input");
input.type="button";
input.value="GreaseMonkey Button";
input.onclick = showAlert;
input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:40px;");
document.body.appendChild(input); 
 
function showAlert()
{
    alert("Hello World");
}
