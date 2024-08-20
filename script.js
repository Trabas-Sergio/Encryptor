const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncrypt(){
    const txtEncrypted = encrypt(textArea.value)
    message.value = txtEncrypted
    textArea.value = ""
    message.style.backgroundImage = "none"
}

function btnDecrypt(){
    const txtEncrypted = decrypt(textArea.value)
    message.value = txtEncrypted
    textArea.value = "";    
}

function encrypt(stringEncrypted){
    let arrayCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase()

    for(let i = 0; i < arrayCode.length; i++){
        if(stringEncrypted.includes(arrayCode[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(arrayCode[i][0], arrayCode[i][1])
        }
    }

    return stringEncrypted;
}

function decrypt(stringDecrypted){
    let arrayCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase()

    for(let i = 0; i < arrayCode.length; i++){
        if(stringDecrypted.includes(arrayCode[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(arrayCode[i][1], arrayCode[i][0])
        }
    }

    return stringDecrypted;
}