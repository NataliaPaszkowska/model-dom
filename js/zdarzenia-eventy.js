"use strict";

var secondLink = document.getElementsByTagName('a')[1];
/* tworzymy zmienna z drugim linkiem */

console.log(secondLink);
function alarm(e) {
 	event.preventDefault(); 
	console.log('kliknieto kolejny link');
	console.log(event); 
	
}
secondLink.onclick = alarm;
/* wywolujemy funkcje alarm() na drugim linku po kliknieciu */

