var number1 = Number(prompt("1-sonni kiriting! "))

while (isNaN(number1)) {
    number1 = Number(prompt("Iltimos number turiga mansub qiymat kiriting!"))
}

var number2 = Number(prompt("2-sonni kiriting! "))

while (isNaN(number2)) {
    number2 = Number(prompt("Iltimos number turiga mansub qiymat kiriting!"))
}

var number3 = Number(prompt("3-sonni kiriting! "))

while (isNaN(number3)) {
    number3 = Number(prompt("Iltimos number turiga mansub qiymat kiriting!"))
}

alert("Bu uchta sonni o`rta arfmitigini hisoblab console ga joylab qo`ydik :)")

console.log("result: ", (number1 + number2 + number2)/3)
