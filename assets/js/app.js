document.addEventListener('DOMContentLoaded', (event) => {
    const switcher = document.querySelector('.btn');
    const body = document.body;

    switcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        
        if(body.classList.contains('dark-theme')) {
            switcher.textContent = "Light";
        } else {
            switcher.textContent = "Dark";
        }

        console.log('Current class names: ' + body.className);
    });
});

const photos = [
    {
       foto: "assets/images/carrossel/abacaxi-removebg-preview.png"
    },
    {
       foto: "assets/images/carrossel/banana-removebg-preview.png"
    },
    {
        foto: "assets/images/carrossel/morango-removebg-preview.png"
    },
    {
        foto: "assets/images/carrossel/laranja-removebg-preview.png"
    }
]

let currentSlide = 0;

function changePhotos(side){
    if(side === "right"){
        currentSlide++;
    } else if( side === "left") {
        currentSlide--;
    }
    if(currentSlide === photos.length){currentSlide=0}
    if(currentSlide === -1){currentSlide=photos.length-1}
    let photoImg = document.getElementById('photos-result');
    while(photoImg.firstChild){
        photoImg.removeChild(photoImg.firstChild)
    }
   let foto = document.createElement('img');
   foto.src = photos[currentSlide].foto;
   photoImg.appendChild(foto);
}

window.onload = function () {

    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const nav = document.querySelector('nav')

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active')
    })
})