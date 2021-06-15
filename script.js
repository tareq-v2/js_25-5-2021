
// javascript note //       25/5/2021




//1 javascript array declaration............

var fruits, text, fLen, i;
fruits = ["Apple", "Banana", "Orange", "Mango"];
fLen = fruits.length;

text = "<ul>";
for(i=0; i < fLen; i++){
		text += "<li>"+ fruits[i] +"</li>";
	}
text += "</ul>";
document.getElementById("demo").innerHTML = text;




//2 little example for event................

window.addEventListener('keydown', checkkey);

		function checkkey(event){
			console.log(event.key);
		}




//3 declare a function in javascript.............

function namta(num){
			for (i=1; i<=10; i++) {
			document.write(`${num} * ${i} = ${num*i}`);
			document.write("<br>");
		    }
		}

		namta(1);
		document.write("<br><br>");

		namta(2);
		document.write("<br><br>");




//4 function arguments object.................

function add(){
	if(arguments.length == 0){
		console.log("No argument passed!");
	}else{
		let sum = 0;
		for(let i = 0; i<arguments.length; i++){
			sum += arguments[i];
		}
		console.log(sum);
	}
}
add();




//5 anonymous function...................

setTimeout(function (){
	console.log("Hello!");
}, 3000);




//6 get random number...................

function getRandomNumber(min, max){
	let x = Math.floor(Math.random() * (max - min) + min);
	return x;
}

console.log(getRandomNumber(5, 10));




//7 manipulate new element on html page.........

let list1 = document.getElementById("demo");
let item = document.createElement("li");
item.textContent = "New List of this para";
list1.appendChild(item);




//8 js compare return function..........

function compare(a, b){
	if (a > b) {
		return 1;
	}else if(b > a){
		return -1
	}else{
		return 0;
	}
}

let c = compare(6, 7);
document.write(c);

