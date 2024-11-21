document.getElementById("birth-year").selectedIndex = -1;
document.getElementById("country-select").selectedIndex = -1;

function ClosePopup() {
    const element = document.getElementById("age-verification-popup")
    element.remove()
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./images/landscape\ drink.png'"
   
    
}