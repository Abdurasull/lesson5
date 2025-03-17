var variable = Number(prompt("Biror-bir son kiriting!"));

// agar kiritilgan ma`lumot string bo`lsa yana qayta so`raydi
while (isNaN(variable)) {
    variable = Number(prompt("Iltimos number turiga mansub qiymat kiriting!"));
}

alert("Natijalarni ko`rish uchun console ga qarang!");

// FizzBuzz ga tikshiramiz
if (variable % 15 == 0) {
    console.log("FizzBuzz");
}else if(variable % 3 == 0) console.log("Fizz");
    else if (variable % 5 == 0) console.log("Buzz");
        else console.log("Bu son 5 ga ham 3 ga ham bo`linmaydi");

var number3 = 0;
var number5 = 0;

// Biz kiritgan songacha bo`lgan sonlarni ichida qancha 3 ga va 5 ga bo`linadiganlarini topuvchi loop
for (let i = 1; i <= variable; i++) {
       if(i % 3 == 0) number3++;
       if(i % 5 == 0) number5++;
}

console.log("3 ga bo`linadiganlari soni: ", number3, "\n5 ga bo`linadiganlari soni: ", number5)