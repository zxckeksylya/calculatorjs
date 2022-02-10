const buttons = document.querySelectorAll('button')
const stringOfSymbols = document.querySelector('output')
stringOfSymbols.textContent = 0
var createToolbarButtonHandler = function(e){
    let button = e.currentTarget
    stringOfSymbols.textContent = calc(button.value)
    // alert(button.value)
}

for (let i = 0; i< buttons.length;i++){
    buttons[i].addEventListener('click',createToolbarButtonHandler)
}

var lastOperation = null
var firstNumber = 0
var secondNumber = null
var answer = null


function checkDotAtStr(str){
    return str.split('.').length === 2
    ? true
    : false
}

function isOverflowOfStr(str){
    return !(stringOfSymbols.textContent.length<10) 
}

function isOutputZero(){
    return stringOfSymbols.textContent === '0'
}

function addSymbolAtString(value,str){
    if(isOutputZero()){
        return value
    }
    if(isOverflowOfStr(str)){
        alert("привешено максимальное число символов")
        return str
    }
    str+= value 
    return str
}

function addDotAtString(str){
    if(checkDotAtStr(str)){
        alert('нельзя еще добавить точек')
    } else if(isOverflowOfStr(str)){
        alert("привешено максимальное число символов")
    }else{
        str+= '.'
    }
    return str
}

function clearCalc(){
    lastOperation = null
    firstNumber = 0
    secondNumber = null
    return 0
}

function clearOutputOfCalc(){
    return 0
}
function operate(value){
  if(lastOperation !==value){
      let bufferNumber = firstNumber
        lastOperation = value
        firstNumber = +stringOfSymbols.textContent
        return 0
    // }else{
    //     secondNumber = +stringOfSymbols.textContent
    //     answer = firstNumber + secondNumber
    //     if(isOverflowOfStr(String(answer))){
    //         alert("полученное число превышает регистр калькулятора")
    //         answer = 0
    //     }
    //     return answer
    }else{
        return 0
    }
}
function equally(){
    switch(lastOperation){
        case '+':
            return isOverflowOfStr(firstNumber + +stringOfSymbols.textContent) 
            ? 0
            : firstNumber + +stringOfSymbols.textContent
        case '-':
            return isOverflowOfStr(firstNumber - +stringOfSymbols.textContent) 
            ? 0
            : firstNumber - +stringOfSymbols.textContent
        case '*':
            return isOverflowOfStr(firstNumber * +stringOfSymbols.textContent) 
            ? `${firstNumber * +stringOfSymbols.textContent}`.slice(0,10)
            : firstNumber * +stringOfSymbols.textContent
        case '/':
            return isOverflowOfStr(firstNumber / +stringOfSymbols.textContent) 
            ? `${firstNumber / +stringOfSymbols.textContent}`.slice(0,10)
            : firstNumber / +stringOfSymbols.textContent
    }
}

function calc(value){
    switch(value){
        case '=':
            return equally()
        case '+':
            return operate(value)
        case '-':
            return operate(value)
        case '*':
            return operate(value)
        case '/':
            return operate(value)
        case 'c':
            return clearCalc()
        case 'ce':
            return clearOutputOfCalc()
        case '.':
            return addDotAtString(stringOfSymbols.textContent)
        default:
            // alert(value)
            return addSymbolAtString(value,stringOfSymbols.textContent)

    }
}