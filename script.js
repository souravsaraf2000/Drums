var divSelection = document.querySelectorAll(".boxes");
var audioFiles = document.querySelectorAll("audio");
var keys = ['a','s','d','f','g','h','j','k','l'];
document.body.addEventListener('keydown',function(e){
    var i = keys.indexOf(e.key)
    if(i!==-1)
    {
        divSelection[i].classList.add("onevent");
        audioFiles[i].play();
        var interval = setInterval(function(){
            if(divSelection[i].classList.contains("onevent"))
                divSelection[i].classList.remove("onevent");
            else
                clearInterval(interval);
        },500);
    }
})