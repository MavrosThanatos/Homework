const container=document.getElementById("container");
const canvas=document.querySelector("canvas");
const ctx=canvas.getContext('2d');
canvas.height=325;
canvas.width=220;
let x=canvas.width/2;
let y=canvas.height;
// variables : X F
// constants : + − [ ]
// start  : X
// rules  : (X → F+[[X]-X]-F[-FX]+X), (F → FF)
// angle  : 25°

let axiom="F"
let rules=[];
// rules[0]=
// {  
//     a: "X",
//     b: "F+[[X]-X]-F[-FX]+X"
// }
// rules[1]=
// {
//     a:"F",
//     b:"FF"
// }
rules[0]=
{
    a: "F",
    b: "FF-[-F+F+F]+[+F-F-F]"
}
let sentence = axiom
let angle=(25*Math.PI)/180;
let len=30;

function generate()
{
    let nextSentence='';
    for (let i = 0; i < sentence.length; i++) 
    {
        let char=sentence.charAt(i);
        let found=false;
        for (let j = 0; j < rules.length; j++) 
        {
            if (char==rules[j].a) 
            {
                nextSentence+=rules[j].b;
                found=true;
                break;
            }
        }
        if (!found) 
        {
            nextSentence+=char;
        }
    }   
    sentence=nextSentence;
    turtle();
    console.log(sentence);
}


function turtle() 
{
    let savedX,savedY;
    for (let i = 0; i < sentence.length; i++) 
    {
        let char=sentence.charAt(i);
        switch (char) {
            case "F":
                //draw line
                console.log(x,y);
                ctx.beginPath();
                ctx.moveTo(x,y);
                x=x;
                y=y-len;
                ctx.lineTo(x,y);
                ctx.stroke();
                ctx.closePath();
                console.log(x,y);
                break;
            case "+":
                //rotate left
                ctx.translate(x,y);
                ctx.rotate(angle);
                break;
            case "-":
                //rotate right
                ctx.translate(x,y);
                ctx.rotate(-angle);
                break;
            case "[":
                //save
                savedX=x;
                savedY=y;
                break;
            case "]":
                //go back
                x=savedX;
                y=saved
                break;
        }
        
    } 
}

