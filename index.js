let count = 0;
let str = '';
let countEl = document.getElementById('count-el');
let savel = document.getElementById('save-el');
function increment() {
	count += 1;
	countEl.innerText = count;
}
function save() {
	str = count + '-';
	savel.textContent += str;
	console.log(count);
	count = 0;
	countEl.innerText = count;
}

let greetingEl = document.getElementById('welcome-el');
let name = 'Mehmet';
let greeting = `Hoşgeldin ${name}`;

greetingEl.innerText = greeting;
