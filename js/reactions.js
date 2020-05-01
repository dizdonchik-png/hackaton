function getDate() {
	let myDate = new Date();
	let dayNum = myDate.getDate();

	let months = ["января", "февраля", "марта", "апреля", "мая", "июня", 
            "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	let numbers = [[["ноль",  "ноль", "ноль"], ["первое",  "одна", "первый"], ["второе", "две", "второй"], ["третье", "три", "третий"], ["четвертое", "четыре", "четвертый"], ["пятое", "пять", "пятый"], ["шестое", "шесть", "шестой"], ["седьмое", "семь", "седьмой"], ["восьмое", "восемь", "восьмой"], ["девятое", "девять", "девятый"] ],
		["десятое", "одиннадцатое", "двенадцатое", "тринадцатое", "четырнадцатое", "пятнадцатое", "шестнадцатое", "семнадцатое", "восемнадцатое", "девятнадцатое", ],
		[["двадцать", "двадцатое", "двадцатый"], ["тридцать", "тридцатое", "тридцатый"]]
	];

	let thousands = ["тысяча", "тысячи"];
       
	let dateInWords;

	if (dayNum < 10) {
		dateInWords = numbers[0][dayNum][0];
	} else if (dayNum < 20) {
		dateInWords = numbers[1][dayNum - 10];
	} else if (dayNum < 30) {
		if (dayNum == 20) {
			dateInWords = numbers[2][0][1];
		} else {
			dateInWords = numbers[2][0][0] + " " + numbers[0][dayNum - 20][0];
		}
	} else {
		if (dayNum == 30) {
			dateInWords = numbers[2][1][1];
		} else {
			dateInWords = numbers[2][1][0] + " " + numbers[0][dayNum - 30][0];
		}
	}

	let fullDate = "Сегодня: " + dateInWords + " " + months[myDate.getMonth()];
	      
	return fullDate;
}

function getDayOfTheWeek() {
	let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	let myDate = new Date();
	let fullDate = "Сегодня: " + days[myDate.getDay()];

	return fullDate;
}

function getTime() {
	let myDate = new Date();
	let hours = myDate.getHours();
	let minutes = myDate.getMinutes();

	let words = [["час", "часа", "часов"], ["минута", "минуты", "минут"]];

	let hourByWord;
	if (hours > 10 || hours < 20) {
		hourByWord = words[0][2];
	} else if (hours % 10 == 1) {
		hourByWord = words[0][0];
	} else if (hours % 10 > 1 && hours % 10 < 5) {
		hourByWord = words[0][1];
	} else {
		hourByWord = words[0][2];
	}

	let minuteByWord;
	if (minutes > 10 || minutes < 20) {
		minuteByWord = words[1][2];
	} else if (minutes % 10 == 1) {
		minuteByWord = words[1][0];
	} else if (minutes % 10 > 1 && minutes % 10 < 5) {
		minuteByWord = words[1][1];
	} else {
		minuteByWord = words[1][2];
	}

	return "Сейчас: " + hours + " " + hourByWord + ", " + minutes + " " + minuteByWord;
}


function getAnswerToBusiness() {
	let answers = ["Лучше всех!", "Отлично! Чего и вам желаю", "Все хорошо, а будет еще лучше!", "Как в сказке", "Всё в шоколаде, даже клавиатура!"];
	let images = ["01.jpg", "04.jpg", "018.jpg", "07.jpg", "012.jpg" ];

	let randomNum = Math.floor(Math.random() * Math.floor(answers.length));

	let genik = document.querySelector('.genik');

	let url = 'images/' + images[randomNum];
	genik.setAttribute('src', url);

	return answers[randomNum];
}









// alert(getDate());
// alert(getDayOfTheWeek());
// alert(getTime());
//alert(getAnswerToBusiness());
