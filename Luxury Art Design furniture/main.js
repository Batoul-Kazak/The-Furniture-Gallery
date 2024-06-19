let tabs = document.querySelectorAll("#buttons-container button");
let buttonsContainer = document.querySelector("#buttons-container");
let slides = document.querySelectorAll("#slides-container div");

//we want to select tabs but it is more efficient to select their parent element
buttonsContainer.addEventListener("click", function(e) {
    // let clicked = e.target; //this won't work fine because when we click on span it will select span not button
    let clicked = e.target.closest("button");

    if(!clicked) return;
    
    tabs.forEach(t => t.classList.remove("operations-tab--active"))
    slides.forEach(c => c.classList.remove("operations-content--active"));
    
    clicked.classList.add("operations-tab--active");
    // slides.forEach(t => t.classList.remove("operations-tab--active"));
    // clicked.classList.add("operations-tab--active");


    document.querySelector(`.operations-content--${clicked.dataset.tab}`).classList.add("operations-content--active");
});
