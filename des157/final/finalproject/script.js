(function () {
    'use strict'

    /* PARALLAX animation on scroll */
    let bg1 = document.getElementById('bg1');
    let bg2 = document.getElementById('bg2');
    let bg3 = document.getElementById('bg3');
    let bg4 = document.getElementById('bg4');
    let bg5 = document.getElementById('bg5');
    let bg6 = document.getElementById('bg6');
    let scroll = document.getElementsByClassName('scroll');
    let arrow = document.getElementsByClassName('arrow');


    window.addEventListener('scroll', function () {
        const value = window.scrollY;
        bg1.style.top = -value * .8 + 'px';
        bg2.style.top = -value * 2 + 'px';
        bg2.style.left = -value * 1 + 'px';
        bg3.style.top = -value * .15 + 'px';
        bg4.style.top = -value * .2 + 'px';
        bg5.style.top = -value * .3 + 'px';
        bg6.style.top = -value * .45 + 'px';

        console.log(value);
    })


    /* PROGRESS BAR*/
    const body = document.querySelector('body');
    const progressBar = document.querySelector('.progressBar');

    function grow() {
        const heightY = window.scrollY;
        const fullHeight = body.scrollHeight;
        const vh = window.innerHeight;

        const toPercent = (heightY / (fullHeight - vh)) * 100;

        progressBar.style.width = Math.round(toPercent) + '%';
    }

    window.addEventListener('scroll', grow);

})();



