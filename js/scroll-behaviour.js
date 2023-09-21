document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //Adding the EventListener to detect scrolling or clicking
    window.addEventListener('scroll', fadeout);
    window.addEventListener('click', fadeout);
    
    // Function to be executed if page is scrolled
    function fadeout() {
        let body = document.body;

    //Checking if we are on the main page   
        if (body.classList.contains('home') == true){

            //i dont really know why the timeout functions are there. but others did it as well.
            setTimeout( function() {
                setTimeout( function() {

                    //looking for the title-container-Element and adding the animated class "remove-title". This will trigger the fadeout of the element.
                    let titleContainer = document.getElementById("fadeout");
                    titleContainer.classList.add("remove-title");

                    //looking for the individual title-elements and adding the animated class "translateUp" & "translateDown". This will trigger the movment of the title-element
                    let birbaum = document.getElementById("birbaum");
                    let architektur = document.getElementById("architektur");
                    birbaum.classList.add("translateDown");
                    architektur.classList.add("translateUp");
                    //after the animation adding the class "nonedisplay" to all the elements with the class "title".
                    setTimeout(function() {
                        let title = document.querySelectorAll(".title");
                        title.forEach(title => {
                            title.classList.add("nonedisplay")
                        });
                    }, 1000);
                    

                }, 10);
            }, 10);



        } 
        
        





        //let fadeouts = document.querySelectorAll ('.fadeout');


    }








/////////////////////////////////////////////////////////////////////////////////////////////////


    

    function mouseOver() {
        console.log("mouse is over container"); 
    }

    function mouseOut() {
        console.log("mouse is off");
    }

    let container = document.getElementById("ct");
    container.addEventListener("mouseover", mouseOver);
    container.addEventListener("mouseout", mouseOut);
    
})