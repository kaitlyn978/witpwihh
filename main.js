//https://teachablemachine.withgoogle.com/models/zbhUG3u9Y/
prediction2="";
prediction1="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='result2' src='"+data_uri+"'>";
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zbhUG3u9Y/",modelLoaded);
function speak(){
     var synth=window.speechSynthesis;
     speak_1="first prediction is"+prediction1;
     speak_2="second prediction is"+prediction2;
     utter_this=new SpeechSynthesisUtterance(speak_1+speak_2);
     synth.speak(utter_this);
}
function check(){
    img=document.getElementById('results2');
    classifier.classify(img,gotResult);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if(results[0].label=="happy"){
        document.getElementById("update_emoji").innerHTML="&#128522;";
    }
    if(results[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML="&#128546;";
    }
    if(results[0].label=="mad"){
        document.getElementById("update_emoji").innerHTML="&#128545;";
    }
    if(results[1].label=="happy"){
        document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if(results[1].label=="sad"){
        document.getElementById("update_emoji2").innerHTML="&#128546;";
    }
    if(results[1].label=="mad"){
        document.getElementById("update_emoji2").innerHTML="&#128545;";
    }
    }
}