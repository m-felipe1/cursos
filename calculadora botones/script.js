let display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')
//let uno = document.getElementById('1')
window.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'Digit1':
            display.innerHTML += '1'; 
            break
        case 'Digit2':
            display.innerHTML += '2';
            break
        case 'Digit3':
            display.innerHTML += '3';
            break
        case 'Digit4':
            display.innerHTML += '4';
            break
        case 'Digit5':
            display.innerHTML += '5';
            break
        case 'Digit6':
            display.innerHTML += '6';
            break
        case 'Digit7':
            display.innerHTML += '7';
            break
        case 'Digit8':
            display.innerHTML += '8';
            break
        case 'Digit9':
            display.innerHTML += '9';
            break
        case 'Digit0':
            display.innerHTML += '0';
            break
        case 'Minus':
            display.innerHTML += '-'
            break
        case 'Equal':
            display.innerHTML += '+'
            break
        case 'Backslash':
            display.innerHTML += '*'
            break
        case 'Slash':
            display.innerHTML += '/'
            break
        case 'Backspace':
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length-1)
            if((string.length-1) == 0) display.style.setProperty('justify-content', 'end')
            break
        case 'ShiftRight':
            display.innerText = ''
            display.style.setProperty('justify-content', 'end')    
            break
        case 'Enter':
           (display.innerText = eval(display.innerText).toString().substring(0,9))
           display.style.setProperty('justify-content', 'start')
            break

      
           
    }
})


/*window.addEventListener('keydown', function(event) {
  if (event.key = '1') {
    display.innerHTML += '1'
  }
    console.log(event); 
})*/



buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = ''
            display.style.setProperty('justify-content', 'end')
        } else if (item.id == 'borrar') {
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length-1)
            if((string.length-1) == 0) display.style.setProperty('justify-content', 'end')
        } else if (display.innerText != '' && item.id == 'igual') {
            let resultado = eval(display.innerText)
            display.innerText = resultado.toString().substring(0,9)
            display.style.setProperty('justify-content', 'start')
        } else if (display.innerText == '' && item.id == 'igual') {
            display.innerHTML = 'puto'
            setTimeout(() => (display.innerText = ''), 2000)
        } else {
            display.innerText += item.id
            
        }   
    }   
})








//document.onkeyup = keys => console.log(keys.key)


