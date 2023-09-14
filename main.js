var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    if((content=="take my selfie")||(content=="Take my selfie.")){
        speak()
    }
}
camera=document.getElementById("camera")
Webcam.set({
width: 360,
height: 250,
image_format: 'jpeg',
jpeg_quality: 90
})

function speak(){
    var synth=window.speechSynthesis
var utterThis=new SpeechSynthesisUtterance("taking your selfie in 5 seconds")
synth.speak(utterThis)
Webcam.attach(camera)
setTimeout(function()
{
    take_snapshot()
    save()
},5000
)
}

function take_snapshot(){
Webcam.snap(function(data_uri)
{
    document.getElementById('result').innerHTML='<img id="selfie_image" src="'+data_uri+'">'
})
}

function save(){
link=document.getElementById("link")
image=document.getElementById("selfie_image").src 
link.href=image
link.click()
}