

const buttons = document.querySelectorAll('button')
const stringOfSymbols = document.querySelector('output')

var createToolbarButtonHandler = function(e){
    let button = e.currentTarget
    calc(button.value)
    // alert(button.value)
}

for (let i = 0; i< buttons.length;i++){
    buttons[i].addEventListener('click',createToolbarButtonHandler)
}

var operation = null
var saveNumber = null

function checkDotAtStr(str){
    return str.split('.').length === 2
    ? true
    : false
}

function isOverflowOfStr(str){
    return !(stringOfSymbols.textContent.length<10) 
}

function addSymbolAtString(value,str){
    if(isOverflowOfStr(str)){
        alert("привешено максимальное число символов")
    }else{
        str+= value
    }        
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
    operation = null
    saveNumber = null
    return ''
}

function clearOuterOfCalc(){
    return ''
}
function calc(value){
    switch(value){
        case '=':
            alert(value)
        break
        case '+':

        break
        case '-':

        break
        case '*':

        break
        case '/':

        break
        case 'c':
            stringOfSymbols.textContent = clearCalc()
        break
        case 'ce':
            stringOfSymbols.textContent = clearOuterOfCalc()
        break
        case '.':
            stringOfSymbols.textContent = addDotAtString(stringOfSymbols.textContent)
        break
        default:
            // alert(value)
            stringOfSymbols.textContent = addSymbolAtString(value,stringOfSymbols.textContent)

        break
    }
}

