(function(){
    "use strict"

     //This program lets the user pick two numbers between 0-10 that outputs to them an animal and age. 

     

     const divTag = document.querySelector('div');
     const btn1 = document.querySelector('button');
     const btn2 = document.querySelector('button');


 
     btn1.addEventListener('click', function(){   
        const inputNum1 = prompt ("Pick a random number between 0-10", "");
        const animals = ["Donkey","Camel","Giraffe","Big ass turtle","Parrot","Gecko","Zebra","Koala","Hippo","Wolf", "Bear"]
   
        const inputNum2 = prompt ("Pick another random number between 0-10", "");
        const age = ["40 year old","82 year old","64 year old","2 year old","56 year old","102 year old","76 year old","3 year old","93 year old", "9 year old", "103 year old"];


        for(let i=0; i<age.length; i++){
            if(inputNum1 == i){
                const newPara = document.createElement('p');
                const reveal = document.createTextNode(`You are a ${age[i]} ${animals[i]}`);
                newPara.appendChild(reveal);
                divTag.appendChild(newPara);
            }else if(inputNum1 >10 || inputNum2>10){
               console.log(`Oh no the number you picked was too high!`);
            }
        }
    });

    btn2.addEventListener('click', function(){   
        const inputNum1 = prompt ("Pick a random number between 0-10", "");
        const color = ["blue","purple","red","green","orange","yellow","violet","turqoise","brown","black", "white"]
   
        const inputNum2 = prompt ("Pick another random number between 0-10", "");
        const food = ["waffle","sausage","apple","pear","chip","egg","tortilla","pineapple","grape", "pumpkin", "orange"];


        for(let i=0; i<color.length; i++){
            if(inputNum1 == i){
                const newPara = document.createElement('p');
                const reveal = document.createTextNode(`You are a ${color[i]} ${food[i]}`);
                newPara.appendChild(reveal);
                divTag.appendChild(newPara);
            }else if(inputNum1 >10 || inputNum2>10){
               console.log(`Oh no the number you picked was too high!`);
            }
        }
    });
}())