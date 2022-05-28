var slides = document.querySelectorAll('.slide'); // get all elements that has slide class name
var btns = document.querySelectorAll('.btn'); // get all elements that has btn class name
let currentSlide = 0; // set currentSlide to 0
      


// function for navigating the slider manually
function manualNav(index){

    resetInterval(); // call the resetInterval function

    slides.forEach((slide) => { // a for each loop that iterates all the slides value

        slide.classList.remove('active'); // remove the active class from the slide

        btns.forEach((btn) => { // a for each loop that iterates all the buttons value

            btn.classList.remove('active'); // remove the active class from the slide
        });
    });

    slides[index].classList.add('active'); // assign active class to the index parameter of slide
    btns[index].classList.add('active'); // assign active class to the index parameter of buttons
}


// a for each loop that iterates all the buttons value that also gets the index value
btns.forEach((btn, i) => {

    // event listener for button when being clicked
    btn.addEventListener("click", () => {

        // call the manualNav function and pass on the i value
        manualNav(i);

        // set the currentSlide to i value
        currentSlide = i;
    });
});
      

// function for auto playing the slider
function autoPlay(){

    if (currentSlide == slides.length - 1) {  // if currentSlide is equal to the last slide of sliders
        currentSlide = 0; // initialise currentSlide to 0 (first page)
    }

    else {
        currentSlide++; // increment page index by 1
    }

    // call the manualNav function and pass on the currentSlide value
    manualNav(currentSlide); 
}


// function for resetting the auto play interval
function resetInterval(){

    // clear the autoplay interval
    clearInterval(autoPlayInterval);

    // set autoplay interval and call the autoPlay function and set the interval to 5 seconds
    autoPlayInterval = setInterval(autoPlay, 5000);
}

// set autoplay interval and call the autoPlay function and set the interval to 5 seconds
let autoPlayInterval = setInterval(autoPlay, 5000);