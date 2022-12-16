var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecongnition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    documents.getElementById("textbox").innerHTML = Content;

}

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").ariaValueMax;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcripts;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        speak();
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getelementBy("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterTHis);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quility:90

});
camera = document.getElementById("camera");



