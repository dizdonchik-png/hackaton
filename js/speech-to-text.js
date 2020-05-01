function startRecording() {

	// Создаем распознаватель
	var recognizer = new webkitSpeechRecognition();

	// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
	recognizer.interimResults = true;

	// Какой язык будем распознавать?
	recognizer.lang = 'ru-Ru';

	// Используем колбек для обработки результатов
	recognizer.onresult = function (event) {
	var result = event.results[event.resultIndex];
	if (result.isFinal) {
		$("[name=content]").html(result[0].transcript.toLowerCase().replace('дайте денег', 'Айтигеник').replace('этих денег', 'Айтигеник').replace('евгений', 'Айтигеник').replace('эти денег', 'Айтигеник').replace('о тебе денег', 'Айтигеник').replace('идти денег', 'Айтигеник'));
	} else {
		console.log('Промежуточный результат: ', result[0].transcript);
	}
	};

	// Начинаем слушать микрофон и распознавать голос
	recognizer.start();


};
