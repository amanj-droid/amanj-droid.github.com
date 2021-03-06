(function () {
    'use strict'

    /* USER TEST ALERTS */
    alert("Hi user! Since this is a gallery webpage, there isn't much to do. So, I have one task for you. Simply read what's on the landing page and then scroll down to enjoy the content. After, scroll back up when you're done.")



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

    /*
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
    */


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



