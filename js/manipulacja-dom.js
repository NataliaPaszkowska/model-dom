"use strict";

var mainHeader = document.getElementById('main-header');
/* przypisujemy naglowek strony do zmiennej */
/*console.log(mainHeader);*/

mainHeader.innerHTML = "Treść nagłówka";
/* dodajemy tresc do naglowka */

var link = document.getElementsByClassName('link')[0];
/* przypisujemy pierwszy link do zmiennej */

console.log(link);

link.href = "http://akademia108.pl"; 
/* nadpisujemy atrybut href w linki */

link.className = "nowa-klasa";
/* nadpisujemy nazwe klasy w linku */

mainHeader.style.color = "#11aa22"; 
/* dodajemystyle do naglowksa */