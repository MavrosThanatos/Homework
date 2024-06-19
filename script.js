// console.log("1");
function changeState(element) {
    if (element.style.display == "block")
    {
        element.style.display = "none";
    } 
    else 
    {
        element.style.display = "block";
    }
    
}
function sendMail(adress,subject,mail) {
    let m=mail.value;
    let s=subject.value;
    let a=adress.value;
    console.log(m);
    console.log(a);
    console.log(s);
    adress.value="";
    subject.value="";
    mail.value="";
}

