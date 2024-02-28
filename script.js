// HACKER EFFECT

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 52)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
}

//var myWindow = window.open("", "MsgWindow", "width=200,height=100");
//myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");