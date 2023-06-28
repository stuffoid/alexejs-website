// Getting all the buttons on the page
const buttons = document.querySelectorAll("[data-carousel-button]");

//looping through every button
buttons.forEach(button =>{

    //Adding Eventlistener to look for the click on the button
    button.addEventListener("click", () => {

        //checking if it is the "next" or "prev" button. if its the "next" add offset = 1, otherwise offset = -1, so its the "prev".
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        
        //Getting all the slides
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        
        // getting the active slide
        const activeSlide = slides.querySelector("[data-active]");
        //put the slides in a new Array
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        //if its the first slide -> go to the last slide
        if (newIndex < 0) newIndex = slides.children.length - 1;
        //if its the last slide -> go to the fist slide
        if (newIndex >= slides.children.length) newIndex = 0;

        //adds the "active"-status to the new active slide and removes the status from the old
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        

    })
})