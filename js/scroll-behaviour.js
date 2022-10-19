document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    function mouseOver() {
        console.log("mouse is over container");
        
        
        
    }

    function mouseOut() {
        console.log("mouse is off");
    }

    function scrollMF() {
        var y = this.deltaY;

        if (y > 0) {
            this.scrollRight = 500;
        } else {
            this.scrollLeft = -500;
        }
    }

    let container = document.getElementById("ct");
    container.addEventListener("mouseover", mouseOver);
    container.addEventListener("mouseout", mouseOut);
    container.addEventListener("scroll", scrollMF);


   /* function transformScroll() {
        container.scrollLeft += container.deltaY + container.scrollTop;
        container.preventDefault();
    }
    
    let container = document.getElementsByClassName("container-top");
    container.onmouseover = transformScroll();  */
})