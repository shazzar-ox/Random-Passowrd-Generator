const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.querySelector('.btn-one')
let btnOne = document.querySelector('#btn-one')
let btnTwo = document.querySelector('#btn-two')
let displayEl = document.querySelector('#display-el')
let numberEl = document.querySelector('#number-el')


function clear()
{
    btnOne.textContent=''
    btnTwo.textContent=''
}


generateEl.addEventListener('click', function (val)
{
    clear()

    
    val= numberEl.value

    console.log(val)

  if (val < 10)

    {
        
        displayEl.textContent = 'Password length too short'
    }
    else{
    
    displayEl.textContent = 'Here You go '    
    
    for (i=0; i < val; i++)
    {
        let generatePasswordOne = Math.floor(Math.random()*characters.length)
        btnOne.textContent += characters[generatePasswordOne]
        

        let generatePasswordTwo = Math.floor(Math.random()*characters.length)
        btnTwo.textContent += characters[generatePasswordTwo]
       
    }
    }
    
})

btnTwo.addEventListener('click', function()
{
    // btnTwo.select()

    if (btnTwo.textContent === '')
    {

    }
    else 
    {
    navigator.clipboard.writeText(btnTwo.textContent)

    displayEl.style.color ='yellow'

    displayEl.textContent = 'Password Copied!!!!!'
    }
    
})

btnOne.addEventListener('click', function()
{
    // btnOne.select()

    if (btnOne.textContent === '')
    {

    }
    else 
    {
    navigator.clipboard.writeText(btnOne.textContent)

    displayEl.style.color ='orange'

    displayEl.textContent = 'Password Copied!!!!!'
    }
    
})
