function startReaction(){
	const s = $("[name=content]").html();
	if (s.indexOf('время')!=-1 || s.indexOf('времени')!=-1 || s.indexOf('который час')!=-1) {
		readText(getTime());
	} else
	if (s.indexOf('дата')!=-1 || s.indexOf('сегодня число')!=-1 || s.indexOf('дату')!=-1) {
		readText(getDate());
	}
	if (s.indexOf('какой день сегодня')!=-1 || s.indexOf('какой сегодня день')!=-1 || s.indexOf('день недели')!=-1) {
		readText(getDayOfTheWeek());
	}
	if (s.indexOf('как настроение')!=-1 || s.indexOf('как дела')!=-1 || s.indexOf('как себя чувствуешь')!=-1) {
		readText(getAnswerToBusiness());
	}

}


function startRecording() {

	//Префиксы для поддержки браузеров
	const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

	// Создаем распознаватель
	var recognizer = new SpeechRecognition();

	// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
	recognizer.interimResults = true;

	// Какой язык будем распознавать?
	recognizer.lang = 'ru-Ru';

	// Используем колбек для обработки результатов
	recognizer.onresult = function (event) {
	var result = event.results[event.resultIndex];
	if (result.isFinal) {
		$("[name=content]").html(result[0].transcript.toLowerCase().replace('дайте денег', 'Айтигеник').replace('этих денег', 'Айтигеник').replace('евгений', 'Айтигеник').replace('эти денег', 'Айтигеник').replace('о тебе денег', 'Айтигеник').replace('идти денег', 'Айтигеник'));
		startReaction();
	} else {
		console.log('Промежуточный результат: ', result[0].transcript);
	}
	};

	// Начинаем слушать микрофон и распознавать голос
	recognizer.start();
};
