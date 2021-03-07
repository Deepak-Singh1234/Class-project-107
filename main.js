prediction1="";
prediction2="";

Webcam.set({
width : 350,
height : 350,
image_format : 'jpg',
jpg_quality : 100

});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function deepak(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+data_uri+'" >';
    });
}

console.log('ml5.version' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZBOKUuuMI/model.json' , modelLoaded);

function modelLoaded(){
console.log("Deepak's internet speed is never good at any plae in the world , even honk kong !");

}

function speak(){
var synth =  window.speechSynthesis;
speakdata1 = "the first prediction is " + prediction1;
speakdata2 = "the first prediction is " + prediction2;
var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
synth.speak(utterThis);

}