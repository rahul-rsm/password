const inputField = document.querySelector('#password')
const outputField = document.querySelector('#output')


inputField.addEventListener('input', () =>{
    console.log(inputField.value)
    let password = inputField.value;
    if(password.length < 8){
        outputField.innerText = 'your password is small'
        outputField.style.color = "red"
    }else {   
        // outputField.innerText = 'your password is large'
        // outputField.style.color = "green"   
        console.log("is lowercase", password.search(/[a-z]/))
        if(password.search(/[a-z]/) == -1){
          outputField.innerText = "small letter is missing";
          outputField.style.color = 'red'
        } else if(password.search(/[A-Z]/) == -1){
            outputField.innerText = "capital letter is missing";
            outputField.style.color = 'red'
        }  else if(password.search(/[0-9]/) == -1){
            outputField.innerText = "number is missing";
            outputField.style.color = 'red'
        } else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outputField.innerText = "special chatacter is missing";
            outputField.style.color = 'red'
        }
          else {
            outputField.innerText = "password is strong";
            outputField.style.color = 'green'
          }
      
    }
})