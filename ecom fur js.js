document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    document.getElementById('successMessage').style.display = 'block'; // Show success message
    this.reset(); // Reset the form fields
});


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})
const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})
let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++){
            if(i <= index){
                ratingStarInput[i].src = `img/fill star.png`;
            } else{
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})

// image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})
let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++){
            if(i <= index){
                ratingStarInput[i].src = `img/fill star.png`;
            } else{
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})
const addReviewButton = document.getElementById('addReviewBtn');

// Add a click event listener to the button
addReviewButton.addEventListener('click', () => {
    // Show a popup message
    alert('Thanks for giving your review!');
});