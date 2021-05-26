(function () {
    'use strict'

    /* PARALLAX animation on scroll */
    let bg1 = document.getElementById('bg1');
    let bg2 = document.getElementById('bg2');
    let bg3 = document.getElementById('bg3');
    let bg4 = document.getElementById('bg4');
    let bg5 = document.getElementById('bg5');
    let bg6 = document.getElementById('bg6');
    let scrollPrompt = document.getElementsByClassName('scroll');

    window.addEventListener('scroll', function () {
        const value = window.scrollY;
        bg1.style.top = -value * .8 + 'px';
        bg2.style.top = -value * 2 + 'px';
        bg2.style.left = -value * 1 + 'px';
        bg3.style.top = -value * .15 + 'px';
        bg4.style.top = -value * .2 + 'px';
        bg5.style.top = -value * .25 + 'px';
        bg6.style.top = -value * .3 + 'px';

        console.log(value);
    })

    /* HOVER ON AND OFF STATES for image 1*/
    document.getElementById('img01Cut').addEventListener('mouseover', hoverOn);

    function hoverOn() {
        const img01Cut = document.getElementById('img01Cut');
        img01Cut.src = "images/img01.gif";
    }

    document.getElementById('img01Cut').addEventListener('mouseout', hoverOff);

    function hoverOff() {
        const img01Cut = document.getElementById('img01Cut');
        img01Cut.src = "images/img01-cut.png";
    }



})();
