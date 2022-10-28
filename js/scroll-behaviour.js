document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //Adding the EventListener to detect scrolling
    window.addEventListener('scroll', fadeout);
    
    // Function to be executed if page is scrolled
    function fadeout() {
        let body = document.body;
        
        if (body.classList.contains('home') == true){
            setTimeout( function() {
                setTimeout( function() {

                    let title = document.getElementById("fadeout");
                    title.classList.add("remove-title");

                    let birbaum = document.getElementById("birbaum");
                    let architektur = document.getElementById("architektur");
                    birbaum.classList.add("translateDown");
                    architektur.classList.add("translateUp");
                    

                }, 200);
            }, 200 );



           // console.log("body contains the class 'home'");
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