var number1 = Number(prompt("1-sonni kiriting!"));
while (isNaN(number1)) {
    // alert("siz numbir turiga teng bo`lmagan qiymat kiritdingiz iltimos tikshirib qaytadan kiriting! ")
    number1 = Number(prompt("siz numbir turiga teng bo`lmagan qiymat kiritdingiz iltimos tikshirib qaytadan kiriting! "));    
}

var number2 = Number(prompt("2-sonni kiriting!"));
while (isNaN(number2)) {
    // alert("siz numbir turiga teng bo`lmagan qiymat kiritdingiz iltimos tikshirib qaytadan kiriting! ")
    number2 = Number(prompt("siz numbir turiga teng bo`lmagan qiymat kiritdingiz iltimos tikshirib qaytadan kiriting! "));    
}

alert("Console ga bu ikki sonni kvadratlari yigindisi qiymatini e`lon qilganmiz tekshirishingiz mumkin :)");

console.log("Result: ", number1*number1 + number2*number2);