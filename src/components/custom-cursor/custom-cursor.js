//NOTE: THIS HAS BEEN POSTPONED UNTIL FURTHER IN THE DEVELOPMENT OF THIS PROJECT. 

//I WILL BE USING THIS TUTORIAL AS A START: https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3
//AS COMPLEMENTARY OPTIONS I HAVE THESE: 
// https://medium.com/@benzbraunstein/how-to-make-custom-css-cursors-using-react-fd1a5cca9400
// https://codepen.io/StephenScaff/pen/Jjdveyw
// AND https://www.npmjs.com/package/react-animated-cursor

//ALL THE CONTENTS IN THE custom-cursor folder are the originals I used in Postcards


//custom cursor here: 

//the empty div 
let customCursor = document.querySelector(".cursor");

//nav-links 
let navLinks = document.querySelectorAll('.option');

//eventListener
window.addEventListener('mousemove', myCursor); 
//mousemove is a registered word


function myCursor(e){

    //console.log(e);
    //of all the properties on console.log, we need pageX and pageY. They tell the location of the mouse on the screen. 

    top: customCursor.style.top = e.clientY + "px";
    left: customCursor.style.left = e.clientX + 'px'; 
    //at this point, we have the circle moving with the cursor, but it is uncentered/on top;  transform: translate(-50%, -50%) will fix it. 
    //also, we cannot select anything because the div remains on top of everything else on the page, pointer-events: none; will fix it. 

    //to fix unwanted scrolling, I just changed e.pageX and e.pageY to e.clientX and e.clientY. 
}


