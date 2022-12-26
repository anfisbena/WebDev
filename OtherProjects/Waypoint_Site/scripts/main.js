// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

class perro{
  constructor(pelo,color,nombre,raza){
    this.pelo=pelo;
    this.color=color;
    this.nombre=nombre;
    this.raza=raza;
  }
  explicar(){
    return `este ${this.nombre} es un ${this.raza} de color ${this.color} y tiene un pelo ${this.pelo}`;
  }
}

let perro1=new perro("largo","cafe","Dara","Labrador");
document.write(perro1.explicar());