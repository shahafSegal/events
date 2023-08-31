var mainEl=document.getElementById('mainDiv')
function alertWelcome(){
    alert("welcome in")
}

function printHour(idDest){
    document.getElementById(idDest).innerText= new Date().getHours();
}
function changeBgPurple(idDest){
    document.getElementById(idDest).style.backgroundColor='purple';

}
//4
function changeWidth(idDest){
    document.getElementById(idDest).style.width='100vw';

}
//5
function changeTextAnother(idDest){
    document.getElementById(idDest).innerText= "another text"
}
//6
function printToScreenVal(idDest){
    mainEl.innerHTML += `<br> ${document.getElementById(idDest).value}`;
}
//7
var hourNow= new Date().getHours();
function changeMainBgTime(){
    if(hourNow<12)
    {   mainEl.style.backgroundColor='yellow'}
    else{   mainEl.style.backgroundColor='blue'}
}

changeMainBgTime();
