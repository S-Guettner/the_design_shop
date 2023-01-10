let hamburgeMenu = document.getElementById("hamburgerMenu");
let hamburgerNav = document.getElementById("hamburgerNav");

let clickCounter = 0;

let counter = () => {
    clickCounter ++;
    console.log(clickCounter);
    if(clickCounter % 2 !== 0){
        hamburgerNav.style.display="block";
    }
    else{
        hamburgerNav.style.display="none";
    }
}
