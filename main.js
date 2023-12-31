var mainEl=document.getElementById('mainDiv')


//general
function getTextInTag(strTag, strText=""){
    return `<${strTag}>${strText}</${strTag}>`
}
function getTextInTagWithAtt(strTag, strAtt ,strText=""){
    return `<${strTag} ${strAtt}>${strText}</${strTag}>`
}

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
function changeElNoonTime(){
    if(hourNow<12){   
        mainEl.style.backgroundColor='yellow'
        timeGreet.innerText="Good Morning"
    
    }
    else{   
        mainEl.style.backgroundColor='blue'
        timeGreet.innerText="Good Evening"
    }
}


// changeElNoonTime();


//8
function printUserMinor(){
    var onHFun= `onmouseover='changeColGreen(this)'`;
    if(+prompt("enter your age")>18)
    {
        mainEl.innerHTML+=`<h3 style='color: red;' ${onHFun}> Welcome In</h3>`
    }
    else{
        mainEl.innerHTML+=`<h3 style='color: blue;' ${onHFun}> Welcome In Minor</h3>`
    }

}

function changeColGreen(changedEl){
    changedEl.style.color='green';
}

// printUserMinor();


//9
var guessedNumsArr=[];
function addGuessNumber(inpDest){
    var inpEl=document.getElementById(inpDest)

    printToScreenVal(inpDest)

    guessedNumsArr.push(inpEl.value)
    inpEl.value=""

    if(guessedNumsArr.length==5){
        printNumberGuessed()
        guessedNumsArr=[]
    }
}
function printNumberGuessed(){
    var randNum= Math.floor(Math.random()*57)
    for (let i = 0; i < guessedNumsArr.length; i++) {
        if(guessedNumsArr[i]==randNum){
            mainEl.innerHTML+= `<br> you guessed correct, its ${randNum}`;
            return;
        }
    }
    mainEl.innerHTML+= `<br> you guessed wrong, its ${randNum}`;
}

//10

var lotto2Arr=[]
function getArrStr(arr1){
    arrStr=""
    for(let k = 0; k < arr1.length; k++){
        arrStr+= `${arr1[k]}, `
    }
    return arrStr;
}


function printNumberGuessedV2(){
    var randNumArr=[]
    for (let i = 0; i < 5; i++) {
        randNumArr.push(Math.floor(Math.random()*57))
    }
     
    for (let i = 0; i < lotto2Arr.length; i++) {
        for (let j = 0; j < randNumArr.length; j++) {
            if(lotto2Arr[i]==randNumArr[j]){
                mainEl.innerHTML+= `<br> you guessed correct, its ${randNumArr[j]}`;
                return;
            }
        }
    }
    mainEl.innerHTML+= `<br> you guessed wrong, its ${getArrStr(randNumArr)}`;
}

function addGuessNumberV2(inpDest){
    var inpEl=document.getElementById(inpDest)

    printToScreenVal(inpDest)

    lotto2Arr.push(inpEl.value)
    inpEl.value=""

    if(lotto2Arr.length==5){
        printNumberGuessedV2()
        lotto2Arr=[]
    }
}

function changeColGeneral(changeEl,newColor){
    changeEl.style.color= newColor;
}

//11
function restrictMinorAccess(){
    var welcomeEl= document.getElementById('welcomeInDiv');
    if(+prompt("enter your age")>18)
    {
        welcomeEl.style.color='blue'
        welcomeEl.innerHTML='Welcome In'
        welcomeEl.onmouseover= function(){changeColGreen(this);};
        welcomeEl.onmouseleave= function(){changeColGeneral(this,'blue');};
        familyForm.style.display='flex';
    }
    else{
        welcomeEl.style.color='red'
        welcomeEl.innerHTML='no Access'
        welcomeEl.style.backgroundColor='black'
        welcomeEl.innerHTML+= "<br>"+ getTextInTagWithAtt('img',"src='resources/200w.gif' alt='noentry_gif'")
        setTimeout(function(){
            location.reload();
        },6000)
    
    }

}
var fullNamesArr=[]

function sendFamilyForm(){
    console.log('hello');
    
    var lNameElem= document.getElementById('familyLName');
    var fNameElemCol =document.getElementsByClassName('familyFName');
    familyForm.style.display='none';
    var printNames= document.getElementById('namesOutPut')
    printNames.innerHTML+=getTextInTag('h2','Your Family:')
    console.log(fNameElemCol)
    for (let i = 0; i < fNameElemCol.length; i++) {
        var curNameValue= fNameElemCol[i].value;
        var fullName= `${curNameValue} ${lNameElem.value}`;
        if(lNameElem.value[0]==curNameValue[0]){
            printNames.innerHTML+= getTextInTagWithAtt('p',`style='color:blue;'`,fullName)
        }else{
            printNames.innerHTML+= getTextInTag('p',fullName)
        }

        fullNamesArr.push(fullName)
    }
}

restrictMinorAccess()
