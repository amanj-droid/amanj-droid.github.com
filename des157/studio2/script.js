(function () {
    'use strict'

    /* PARALLAX animation on scroll */
    let bg1 = document.getElementById('bg1');
    let bg2 = document.getElementById('bg2');
    let bg3 = document.getElementById('bg3');
    let bg4 = document.getElementById('bg4');
    let bg5 = document.getElementById('bg5');
    let bg6 = document.getElementById('bg6');

    window.addEventListener('scroll', function () {
        const value = window.scrollY;
        bg1.style.top = -value * .8 + 'px';
        bg2.style.top = -value * 2 + 'px';
        bg2.style.left = -value * 1 + 'px';
        bg3.style.top = -value * .15 + 'px';
        bg4.style.top = -value * .2 + 'px';
        bg5.style.top = -value * .25 + 'px';
        bg6.style.top = -value * .3 + 'px';
    })


    /* SLIDESHOW IMAGES */
    const myImages = [
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png',
        'image7.png',
        'image8.png',
        'image9.png',
        'image10.png',
        'image11.png',
        'image12.png',
        'image13.png',
        'image14.png',
        'image15.png',
        'image16.png',
        'image17.png',
        'image18.png',
        'image19.png',
        'image20.png',
        'image21.png',
        'image22.png'
    ];

    let currentImage = 1;

    const slide = document.getElementById('myimage');

    document.getElementById('next').addEventListener('click', nextPhoto);

    function nextPhoto() {
        currentImage++;
        if (currentImage > myImages.length - 1) {
            currentImage = 1;
        }
        slide.src = `images/${myImages[currentImage]}`;
    }

    document.getElementById('previous').addEventListener('click', previousPhoto);

    function previousPhoto() {
        currentImage--;
        if (currentImage < 0) {
            currentImage = myImages.length - 1;
        }
        slide.src = `images/${myImages[currentImage]}`;
    }


})();
