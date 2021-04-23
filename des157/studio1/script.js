(function(){
    "use strict";
/* 
    const myForm = document.querySelector('#myForm');

         myForm.addEventListener('submit', function(e){
                
            e.preventDefault();
            const noun1 = document.querySelector('#noun1').value;

            //alert(noun1);
        });
 */

    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');


    myForm.addEventListener('submit', function(e){
        //prevent the page from reloading
        e.preventDefault();
        const adj = document.querySelector('#adj').value;
        const pluralNoun = document.querySelector('#pluralNoun').value;
        const verb = document.querySelector('#verb').value;
        const color = document.querySelector('#col').value;
        const food = document.querySelector('#food').value;
        const animal = document.querySelector('#animal').value;
        const familyMember = document.querySelector('#famMember').value;
        const bodyPart = document.querySelector('#bodyPart').value;
       
        const myText = `There was once a pig who turned into a man because of a dreadful thing he did. He couldn't return into his ${adj.toLowerCase()} self until he had discovered the true power of the ${pluralNoun.toLowerCase()}. He started ${verb.toLowerCase()} until he came up with an answer. The first thing he would have to do is acquire the help of a ${color.toLowerCase()} ${food.toLowerCase()}. Once he was full, he hopped on his ${animal.toLowerCase()} and started riding for the Mystic Mountain. When he arrived he realized he had to climb the mountain using only his ${familyMember}. He knew his efforts were in vain when his ${bodyPart.toLowerCase()} got stuck.`;

        madlib.innerHTML = `${myText}`;

    })



    const formData = document.querySelectorAll('input[type-text]')
    for(let eachField of formData){
        eachField.value = "";
    }

    //Error message
/* 
    var myText;

    if (noun && adj && pluralNoun && place && bodyPart){
        myText = `Here are the words: ${noun}, ${adj}, ${pluralNoun}, ${place}, and ${bodyPart}`;
    }else{
        myText = " Please give me words so I can make your Mad Lib!";
    }
 */



}())