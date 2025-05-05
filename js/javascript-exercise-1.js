/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById('example1').addEventListener('click', function () {
  //Henter array med alle child elementer til #contentarea
  let elements = document.querySelectorAll('#contentarea *');
  //Lopper array med elementer
  for (let i = 0; i < elements.length; i++) {
    //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
    if (!elements[i].classList.contains('tx-big')) {
      elements[i].classList.add('tx-big');
    } else {
      //Ellers fjern klassen hvis den eksisterer i elementets classList
      elements[i].classList.remove('tx-big');
    }
  }
});

/**
 * Eksempel 2
 * Toggler en css klasse med større skrifttype til alle elementer
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById('example2').onclick = function () {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll('#contentarea *').forEach(function (element) {
    //Toggler class tx-big til elementernes classList
    element.classList.toggle('tx-big');
  });
};

document.getElementById('ex1').onclick = function () {
  const header = document.getElementsByTagName('h1')[1];
  header.innerText = 'TESTING';
};

document.getElementById('ex2').onclick = function () {
  const paragraphs = Array.from(document.getElementsByTagName('p'));

  paragraphs.forEach((el) => {
    el.classList.add('tx-color-red');
  });
};

document.getElementById('ex3').onclick = function () {
  const list = document.getElementsByTagName('li');

  for (let item of list) {
    item.classList.add('transform');
  }

  setTimeout(() => {
    for (let item of list) {
      item.classList.remove('transform');
    }
  }, 2000);
};

document.getElementById('ex4').onclick = function () {
  const headers = document.querySelectorAll('#contentarea h1, h2, h3, h4, h5, h6');

  headers.forEach((el) => {
    el.style.display = 'none';
  });
};

document.getElementById('ex5').onclick = function () {
  const links = Array.from(document.getElementsByTagName('a'));

  links.forEach((el) => {
    el.style.textDecoration = 'none';
  });
};

document.getElementById('ex6').onclick = function () {
  const listItems = document.getElementsByTagName('li');
  let myItem = document.createElement('li');
  myItem.innerText = prompt('Hvad skal stå i listen?');

  listItems[4].parentNode.insertBefore(myItem, listItems[5]);
};

document.getElementById('ex7').onclick = function () {
  const listItems = document.getElementsByTagName('li');

  for (let i = 0; i <= listItems.length; i++) {
    if (i % 2 != 0) {
      listItems[i].style.color = 'blue';
    }
  }
};

document.getElementById('ex8').onclick = function () {
  const ol = document.querySelector('ol');
  const ul = document.querySelector('ul');

  const olParent = ol.parentNode;
  const ulParent = ul.parentNode;

  const olClone = ol.cloneNode(true);
  const ulClone = ul.cloneNode(true);

  olParent.replaceChild(ulClone, ol);
  ulParent.replaceChild(olClone, ul);
};

document.getElementById('ex9').onclick = function () {
  const listItems = Array.from(document.getElementsByTagName('li'));

  listItems.forEach((el) => {
    el.classList.add('flyIn');
  });
};

document.getElementById('ex10').onclick = function () {
  const buttons = Array.from(document.getElementsByTagName('button'));

  buttons.forEach((el) => {
    if (el.id != 'ex10') {
      el.classList.toggle('visible');
    }
  });
};

let rotation = 0;
document.getElementById('ex11').onclick = function () {
  rotation += 15;
  document.querySelector('body').style.transform = `rotate(${rotation}deg)`;
};
