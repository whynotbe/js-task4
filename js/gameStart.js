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
    var a =document.getElementById("kill");
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
            var step1 = document.getElementById("kill");
            var b = document.createElement("div");
            b.setAttribute("class","bonus");
            var url = decodeURI(window.location.href);
            var array = url.split("=")[1];
            var victimIndex = array.split(",")[0];
            var victimId = array.split(",")[1]; //为什么这里获得的是16进制
            b.innerHTML = "天亮了,受害者是"+victimIndex+"号玩家,他的身份是"+victimId ;
            step1.appendChild(b);
            var sun = document.getElementById("sun");
            sun.setAttribute("style","top:238px");
            step1.style.backgroundImage ="url(sources/task4/状态栏结束.png)";//为什么不是../sources/task4/...
            step1.onclick = function(){
                alert("不在此时间段");
            };
            var step2 = document.getElementById("lasetword");
            step2.onclick = function(){
                alert("亡灵发表遗言");
                localStorage.currentStatus = 2;
                bonus();
            };

        case "2":
        
    }
}







