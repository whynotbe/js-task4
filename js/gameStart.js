/**
 * Created by luzhaolin on 2017/3/29.
 */
window.onload = function(){
    kill();
    bonus();
}

function kill(){
    var kill = document.getElementById("kill");
    var url = window.location.href.split("=")[1];
    var newUrl = "7-kill.html"+"?index="+url;
    kill.onclick = function(){
        window.location.href = newUrl;
    }
}

if(localStorage.currentDate){

}           //创建本地变量,保存当前日期和当前状态
else{
     localStorage.currentDate = 0;
}

if(localStorage.currentStatus){

}
else{
    localStorage.currentStatus = 0;
}

function bonus(){
    switch(localStorage.currentStatus){
        case "0":
            break;
        case "1":
            var a = document.getElementById("kill");
            var b = document.createElement("div");
            b.setAttribute("class","bonus");
            var array = window.location.href.split("=")[1];
            alert(array);
            var victimIndex = array.split(",")[0];
            var victimId = array.split(",")[1]; //为什么这里获得的是16进制
  
            b.innerHTML = "天亮了,受害者是"+victimIndex+"号玩家,他的身份是"+victimId ;
            a.appendChild(b);
    }
}







