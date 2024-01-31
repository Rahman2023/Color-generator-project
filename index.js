
let div =null;
window.onload = ()=>{
    main();
}

function main(){
    const copybtn1 = document.getElementById("copybtn1")
    const copybtn2 = document.getElementById("copybtn2")
    const inpout1 = document.getElementById("input1")
    const inpout2 = document.getElementById("input2")
    const cbtn = document.getElementById("clickBtn")

cbtn.addEventListener("click", function(){
     const rgbcolor = generatorRGBcolor();
     document.body.style.background = rgbcolor;
     inpout2.value = rgbcolor;
     const hexcolor = generatorHEXcolor()
     document.body.style.background = hexcolor;
     inpout1.value = hexcolor.substring(1);
})

 
copybtn1.addEventListener("click", function(){
    navigator.clipboard.writeText(inpout1.value)
    if(div !== null){
        div.remove();
        div = null;
    }
   if(isvalidhex(inpout1.value)){
    toastmessage(`#${inpout1.value} is copied`)
   }else{
    alert("it not valid code min-max num = 6 ")
   }

   inpout1.addEventListener("keyup",function(e){
    const color = e.target.value;
        if(color){
            inpout1.value = color.toUpperCase()
            if(isvalidhex(color)){
                document.body.style.background =`#${color}`;
            
            }
        }
    })
})

copybtn2.addEventListener("click", function(){
    navigator.clipboard.writeText(inpout2.value)
    if(div !== null){
        div.remove();
        div = null;
    }
    toastmessage(`${inpout2.value} is copied`)
})
}




function generatorRGBcolor(){
    // rgb(0,0,0) rgb(255,255,255)
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`
}


function generatorHEXcolor(){
    // #0000
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}



function toastmessage(msg){
    div = document.createElement("div");
    div.innerHTML = msg;
    div.className =`toast-msg toast-msg-in`
    div.addEventListener("click",function(){
    div.classList.remove("toast-msg")
    })
    document.body.appendChild(div)
}


/**
 * 
 * @param {string} color 
 */
function isvalidhex(color){
    if(color !== 6 ) false;
    // if(color[0] !== "#") false;
    //  color = color.substring(1)
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}


