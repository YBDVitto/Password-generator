const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
    "Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<"
    ,">",".","?","/"]


// la password deve essere lunga 15 caratteri
function generatePassword() {
    const pswLength = window.document.getElementById("password-length").value
    const psw1El = window.document.getElementById("password1")
    const psw2El = window.document.getElementById("password2")
    let psw1 = ""
    let psw2 = ""

    for(let i = 0; i < pswLength; i++) {
        let num1 = Math.floor(Math.random() * characters.length)
        let num2 = Math.floor(Math.random() * characters.length)
        psw1+=characters[num1]
        psw2+=characters[num2]
    }

    psw1El.textContent = psw1
    psw2El.textContent = psw2

    return 0
}