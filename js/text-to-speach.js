 
function readText(text) {
  var utterance = new SpeechSynthesisUtterance(text);
  var voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[0];
  utterance.lang = 'ru-Ru';
  utterance.pitch = 2;
  utterance.rate = 1.5;
  speechSynthesis.speak(utterance);   
}




