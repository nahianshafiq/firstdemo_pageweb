let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/photo-1.jpeg') {
        myImg.setAttribute('src', 'images/firefox2.jpeg');
    } else {
        myImg.setAttribute('src', 'images/photo-1.jpeg')
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please enter your name");
    if (!myName) {
        setUserName() ;
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'This website is created by,  ' + myName ;
    }
    
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This website is created by ' + storedName; 
}

myButton.onclick = function() {
    setUserName() ;
}