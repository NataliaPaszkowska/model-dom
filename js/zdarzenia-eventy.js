"use strict";

/*var secondLink = document.getElementsByTagName('a')[1];
 tworzymy zmienna z drugim linkiem 

console.log(secondLink);
function alarm(e) {
 	event.preventDefault(); 
	console.log('kliknieto kolejny link');
	console.log(event); 
	
}
secondLink.onclick = alarm;
 wywolujemy funkcje alarm() na drugim linku po kliknieciu 

var thirdLink = document.getElementsByTagName('a')[2];
 tworzymy zmienna s trzecim linkiem 

thirdLink.addEventListener('click', alarm);
 wywolujemy funkcje alarm() na trzecim linku po kliknieciu za pomoca event Listenera 

thirdLink.removeEventListener('click', alarm);*/

/* efekt najechania napisu po najechaniu */

/*var mainHeader = document.getElementById('main-header');  - przypisujemy naglowek str do zmiennej */

/*function resize(e) { przkeazujemy zdarzenie jako parametr funkcji 
	console.log(e.type);
	
	if (e.type == 'mouseover') {
		mainHeader.style.fontSize = "70px";
	} else {
		mainHeader.style.fontSize = "inherit";
	}
	
}*/

/*mainHeader.onmouseover = resize; // - wywolanie funkcji resize po najechaniu myszka na naglowek 

mainHeader.onmouseout = resize;  //- wywolanie funkcji resize po zjecaniu myszka z naglowka*/
 

function klikHeader() {
	console.log("kliknales w header");
	
}

document.getElementsByTagName("header")[0].onclick = klikHeader; //wywolaj funkcje na elemencie header


function klikH1(e) {
	e.stopPropagation(); //zatrzymanie propaginacji - funkcja zatrzymuje sie na tym elemencie i dalej nie idzie do rodzicow 
	console.log("kliknales w h1");
	
}

document.getElementsByTagName("h1")[0].onclick = klikH1;
//wywolaj funkcje na elemencie h1























