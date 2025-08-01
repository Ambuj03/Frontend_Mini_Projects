const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg' ];

/* Declaring the alternative text for each image file */

const altTexts = {'pic1.jpg' : 'Closeup of a human eye',
                  'pic2.jpg' : 'Cloud painting', 'pic3.jpg': 'Indigo Flowers',
                  'pic4.jpg' : 'Kutta', 'pic5.jpg' : 'Titli'};

/* Looping through images */

for(const image of images){
    thumbBar.innerHTML += `<img src="images/${image}" alt="${altTexts[image]}">`;
}

const thumbImages = thumbBar.querySelectorAll('img');

thumbImages.forEach(element => {
    element.addEventListener('click', (e) => {
        displayedImage.src = element.src;
        displayedImage.alt = element.alt;
    });
});

btn.addEventListener('click' , () => {
  
    if(btn.getAttribute('class') === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "transparent";
    }

});


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
