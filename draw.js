const canvas=document.querySelector("canvas");
const ctx=canvas.getContext('2d');
window.addEventListener('load',()=>{
canvas.height=325;
canvas.width=220;
let drawing=false;
function startPosition() {
    drawing=true;
    // console.log(5);
}
function endPosition() {
    drawing=false;
    // console.log(6);
    ctx.beginPath();
}
function draw(e) {
    if (!drawing) 
    {
        // console.log(-1);
        return;   
    }
    let x=e.clientX;
    let y=e.clientY-40;
    ctx.lineWidth=10;
    ctx.lineCap='round';
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x,y);

}
canvas.addEventListener('mousedown',startPosition);
canvas.addEventListener('mouseup',endPosition);
canvas.addEventListener('mousemove',draw);
});

