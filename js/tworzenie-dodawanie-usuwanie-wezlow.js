"use strict";

var istniejacyWezel = document.getElementById('parFirst').children[3];
/* przypisz do zmiennej istniejacy wezel */

console.log(document.getElementById('parFirst').children);
console.log(istniejacyWezel);

var newElement = document.createElement('p'); 
/* tworzymy nowy element */

var newElementContent = document.createTextNode('To jest nowy paragraf');
/* nowy tekst dla p */

newElement.appendChild(newElementContent);

istniejacyWezel.appendChild(newElement);

console.log(newElement);

istniejacyWezel.removeChild(newElement);