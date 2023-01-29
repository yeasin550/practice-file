
1. What is javaScript?
ans: javaScript is a Scripting language.
2.  How does javaScript work?
ans: JavaScript work with html and css to build web app or web pages.
3. What is Variable?
ans: Variables are use to stor data.
4. How to declare a variable?
ans: var product = "soap";
5. Type of variable?
ans:There are three types of variables.
For example: i) number  ii) string  iii) boolean
-- How can you find out type of a variable?
ans: var friend ='islam';
console.log(typeof(friend));
6. Primitive and non-primitive data types!
and: primitive data types: There are seven primitive data type.
For example: 1) Number  2) String   3) Boolean  4) Undefined
5) Null      6) bigint   7) Symbol
non-primitive data type: 1) object
7. Naming Convention of javaScript variable.
ans: For create a variable should knows five things.
For example: 1) var  2) name   3) =  4) data   5) ;
more example: var productPrice = 40;
8. Math Operation +, -, *, /, %
------------------------ for + -------------
var applePrice = 450;
var bananaPrice = 200;
console.log(applePrice + bananaPrice);
------------------------ for - -------------
var applePrice = 450;
var bananaPrice = 200;
console.log(applePrice - bananaPrice);
------------------------ for * -------------
var appleWhite = 450;
var applePriceKg= 10;
console.log(applePrice * bananaPrice);
------------------------ for / -------------
var banana = 10;
var person = 5;
console.log(banana / person);
------------------------ for % -------------
var banana = 11;
var person = 5;
console.log(banana % person);
9. Short hand:
ans:    += increase,     -= decrease, *= multiple,  /= divided
10. what is ++ or -- ?
ans: ++ increase one, -- decrease one
11. what is ParseInt and ParseFloat?
ans: ParseInt for number value, and ParseFloat for decimal number,
this method are work for convert data type.
12. what is toFixed ?
ans:
var banana = 14;
var person = 3;
var giveBanana = banana / person;
console.log(giveBanana.toFixed(2));
----------------------------- ARRAY --------------------------
1. What is the purpose of array?
ans: array use for store multiple data.
2. How to declare an array in js?
ans: var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
3. Number of elements in a array.
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
console.log(phoneBrand.length);
4. What is index ?
ans: Index is a value position of array.
5. Find the value of an element by index.
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
console.log(phoneBrand[1]);
6. How to change the element by index?
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
phoneBrand[1]='Vivo'
console.log(phoneBrand);
7. How to get the index of an element by the value?
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
var foundIndex = phoneBrand.indexOf('Iphone')
console.log(foundIndex);
8. What does is mean when you get undefined while getting the value of an element by index?
ans: Undefined value primitive value is used when a variable has not been assigned a value.
9. How can you add an element an array?
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
phoneBrand.push('Vivo')
console.log(phoneBrand);
10. How can you remove an element from array?
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
phoneBrand.pop()
console.log(phoneBrand);
11. Add the element at the first position of an array.
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
phoneBrand.unshift('Gone')
console.log(phoneBrand);
12. Remove the first element of an array.
ans:
var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
phoneBrand.shift()
console.log(phoneBrand);
--------------------------- Conditionals--------------------------
1. Meaning of : >, <, >=, ==, !=, ===, !==
ans:
> --- les then.
< --- grater then.
>= -- les then or equal.
== -- Two operands are equal.
!= -- Two operands are not equal.
=== - Two operands are equal.
!== - Two operands are not equal.
2. Meaning of: &&
ans: && meaning is and.
For example:
var apple = 500;
var bikeService = 400;
var water = 100;
var myTk = 500;
if(apple <= myTk && bikeService <=myTk){
console.log('Giv me one kg apple')
}
else{
console.log('Giv me a water bottle!')
}
3. Meaning of: ||.
ans: || meaning is or.
For example:
var apple = 280;
var bikeService = 400;
var water = 100;
var myTk = 290;
if(apple <= myTk || bikeService <=myTk){
console.log('Giv me one kg apple')
}
else{
console.log('Giv me a water bottle!')
}
4. Lest's say have x amount of money. if you have more then 80,000, then you will buy a mac. if your money more then 60,000 then you will buy a gaming laptop. if your money more then 40,000 then you will buy lenovo Yoga. if your money more then 20,000 then you will buy an used laptop. otherwise, you will use your mobile phone.
ans:
var mac = 80000;
var gamingLaptop = 60000;
var lenovoYouga = 40000;
var usedLaptop = 20000;
var myMoney = 20000;
if (mac <= myMoney){
console.log('I will buy the mac');
}
else if(gamingLaptop <= myMoney){
console.log('I will buy a gaming laptop');
}
else if(lenovoYouga <= myMoney){
console.log('I will buy the lenovo Youga');
}
else if(usedLaptop <=myMoney){
console.log('I will buy used laptop ');
}
else{
console.log('I will work my phone! ')
}
----------------- ---------Loop---------------------a------------
1. Display "Ajka amer moon valo nei" for 39 times.
ans:
var moonValoNei=0;
while(moonValoNei <39){
console.log('Ajka amer moon valo nei')
moonValoNei++
}
2. Display numbers between 58 to 98.
ans:
var number = 58;
while(number <= 98){
console.log(number);
number++
}
3.Show all even numbers from 412 to 456.
ans:
var numbers = 410;
while(numbers < 456){
numbers+=2
console.log(numbers)
}
4. Show all odd numbers 581 to 623
ans:
var numbers = 579;
while(numbers < 623){
numbers+=2
console.log(numbers)
}
5. Difference between while loop and for loop
ans:
for loop- Use a for loop when you know the loop should execute n times,
while loop - Use a while loop when asking for user input. Use a while loop when the increment value is nonstandard.
6. Declare an array for all the topics that you have learned last few days.
ans:
var topics = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT' ];
for(i=0; i <5; i++){
var sub = topics[i];
console.log(sub);
}
7. Create an array for all the mobile phones. Display all element of the array by using while loop.
ans:
var phoneBrand = ['SAMSUNG', 'NOKIA', 'VIVO', 'IPHONE', 'SYMPHONY'];
var i =0;
while(i<phoneBrand.length){
console.log(phoneBrand[i]);
i++;
}
8. Run a loop from 30 to 86. This loop will stop if the values get higher 44.
ans:
for(var i =30; i <= 86; i++){
console.log(i)
if(i> 43){
break
}
}
9. Write the price of the books that you have. Display the prices if the prices is lower than 200.
ans:
var bookPrice =[452, 544, 100, 654, 80, 90, 120];
for (var i = 0; i <bookPrice.length; i++){
var price = bookPrice[i];
if(price < 200){
continue
}
console.log(price);
}
*/