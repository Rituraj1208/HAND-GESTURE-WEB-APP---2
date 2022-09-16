https://teachablemachine.withgoogle.com/models/zGuQvCIzn/
prediction_1 = " ";
prediction_2 = " ";
Webcam.set({
    width: 360,
    height: 300,
    image_format: 'png', 
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    console.log("taking snaposhot");
    Webcam.snap(function(data_uri) {document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZWwGE2xjY/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
 
function speak() {
    var synth=window.SpeechSynthesis;
    speak_data_1 = "the first prediction is " + prediction_1;
    speak_data_2 = "and the second prediction is " + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}