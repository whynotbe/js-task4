/**
 * Created by luzhaolin on 2017/3/29.
 */
window.onload = kill;

function kill(){
    var kill = document.getElementById("kill");
    var url = window.location.href.split("=")[1];
    var newUrl = "7-kill.html"+"?index="+url;
    kill.onclick = function(){
        window.location.href = newUrl;
    }
}

if(localStorage.currentDate){}
else{
    localStorage.currentDate = 0;
}

if(localStorage.currentDate){}
else{
    localStorage.currentStatus = 0;
}

function bonus(){
    switch(localStorage.currentStatus){
        case 0:
            break;
        case 1:
            var a = document.getElementById("kill");
            var b = document.createElement("div");
            b.setAttribute("class","bonus");
            var array = window.location.href.split("=")[1];
            var victimIndex = array.split(",")[0];
            var victimId = array.split(",")[1];
            b.innerHTML = "天亮了,受害者是"+victimIndex+"号玩家,他的身份是"+victimId ;
    }
}







