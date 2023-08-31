function printLog(str1){
    console.log(str1)
}
function printStrToCont(str1,containerDest){
    document.getElementById(containerDest).innerText=str1
}

function printInputToCont(inputDest,containerDest){
    document.getElementById(containerDest).innerText= document.getElementById(inputDest).value
}