const btn = document.getElementById('btn');
const output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]


  btn.addEventListener('click', function() {  
    const input = document.getElementById('userinput').value;
   
    if (input == number) {  
      output.innerHTML = `Congratulations!! You guessed it right. , nummber:${number}`
       output.style.color = "green";  
    } else if (input < number) {  
         output.innerHTML = "Enter a bigger number"
    };
    if(input > number){  
         output.innerHTML = "Enter a smaller number."
    }
});