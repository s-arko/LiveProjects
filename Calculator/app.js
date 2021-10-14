const buttons = document.querySelectorAll('button');
const screen2 = document.getElementById('screen');

for(let button of buttons){
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        if(buttonText === 'c'){
            screen2.value = " "
        }
        else if(buttonText === 'x'){
            screen2.value += '*';
        }
        else if(buttonText === '='){

            try{
                screen2.value = eval(screen2.value);
            }
            catch{
                screen2.value = 'invalid';
            }
            
        }
        else{
            screen2.value += buttonText;
        }
    })
}