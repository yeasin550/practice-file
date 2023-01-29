
// 4. Lest's say have x amount of money. if you have more then 80,000, then you will buy a mac. if your money more then 60,000 then you will buy a gaming laptop. if your money more then 40,000 then you will buy lenovo Yoga. if your money more then 20,000 then you will buy an used laptop. otherwise, you will use your mobile phone.
// ans:
// var mac = 80000;
// var gamingLaptop = 60000;
// var lenovoYouga = 40000;
// var usedLaptop = 20000;
// var myMoney = 20000;
// if (mac <= myMoney){
// console.log('I will buy the mac');
// }
// else if(gamingLaptop <= myMoney){
// console.log('I will buy a gaming laptop');
// }
// else if(lenovoYouga <= myMoney){
// console.log('I will buy the lenovo Youga');
// }
// else if(usedLaptop <= myMoney){
// console.log('I will buy used laptop ');
// }
// else{
// console.log('I will work my phone! ')
// }
// 1. Display "Ajka amer moon valo nei" for 39 times.
// ans:
// var mon = 0;
// while(mon <39){
//     console.log('Ajke amar mon bhalo nai')
//     mon++;
// }
// 2. Display numbers between 58 to 98.
// ans:
// var number = 58;
// while(number <=98){
//     console.log(number);
//     number++;
// }
// 3.Show all even numbers from 412 to 456.
// ans:
// var number = 410;
// while (number <= 456){
//     console.log(number);
//     number+= 2;
// }

// 4. Show all odd numbers 581 to 623
// ans:
// var number = 581;
// while(number <= 623){
//     console.log(number);
//     number += 2;
// }

// 6. Declare an array for all the topics that you have learned last few days.
// ans
// var topics = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT' ];
// for(i=0; i <5; i++){
// var sub = topics[i];
// console.log(sub);
// }

// var phoneBrand = ['SAMSUNG', 'NOKIA', 'VIVO', 'IPHONE', 'SYMPHONY'];
// var i = 0;
// while(i<phoneBrand.length){
// console.log(phoneBrand[i]);
// i++;
// }
// 8. Run a loop from 30 to 86. This loop will stop if the values get higher 44.
// ans:
// for (var i = 30; i <= 86; i++){
//     console.log(i);
//     if(i >44){
//         break;
//     }
// }
var bookPrice =[452, 544, 100, 654, 80, 90, 120];
for (var i = 0; i <bookPrice.length; i++){
var price = bookPrice[i];
if(price < 200){
continue
}
console.log(price);
}
    

