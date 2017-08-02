/**
 * Created by luzhaolin on 2017/4/9.
 */

window.onload =function(){
    result();
    setting();
    moreinf();
    oncemore();
    share();
};

function result(){
    var result = document.getElementById("resultDiscription");
    var cheer = document.getElementById("discription2");
    console.log(localStorage.result);
    if(localStorage.result == 0){
        result.innerHTML = "平民胜利";
        cheer.innerHTML = "太棒了,恭喜平民们获得了胜利!";
    }
    else if (localStorage.result == 1){
        result.innerHTML = "杀手胜利";
        cheer.innerHTML = "太棒了,恭喜杀手们获得了胜利!";
    }
    console.log(0);
    var simRecord = document.getElementById("discription3");
    simRecord.innerHTML ="本次游戏共计用时"+(localStorage.currentDate-1)+"分钟" +"<br/>"+"<br/>"+
            "杀手 "+localStorage.killerNum+" 人  "+"平民 "+localStorage.civilNum+" 人";
    console.log(localStorage.killed);
    console.log(localStorage.voted);
    console.log(localStorage.killedId);
    console.log(localStorage.votedId);
     killed = localStorage.killed.split(",");
     voted = localStorage.voted.split(",");
    console.log(voted);
     killedId =localStorage.killedId.split(",");
        votedId =localStorage.votedId.split(",");
    var currentDate =localStorage.currentDate;
    var record =document.getElementById("record");
    for(var i = 1;i<=localStorage.currentDate;i++){
        var rec = document.createElement("div");
        var dayNumber = document.createElement("div");
        var day1 = document.createElement("day1");
        day1.setAttribute("class","day1");
        var time =document.createElement("div");
        var p1 = document.createElement("div");
        var p2 = document.createElement("div");
        dayNumber.setAttribute("class","dayNumber");
        dayNumber.innerHTML = "第"+i+"天";
        time.setAttribute("class","time");
        time.innerHTML="0时"+i+"分";
        var j = i -1;
        if(killed !=""&&killed.length >= i){
            p1.innerHTML = "晚上:"+killed[j]+"号被杀手杀死,"+killed[j]+"号是"+killedId[j];
        }
        if(voted != ""&&voted.length >= i){
            p2.innerHTML = "白天:"+voted[j]+"号被全民投票投死,"+voted[j]+"号是"+votedId[j];
        }
        else{
            p2.innerHTML = "游戏已结束";
        }
        day1.appendChild(dayNumber);
        day1.appendChild(time);
        day1.appendChild(p1);
        day1.appendChild(p2);
        record.appendChild(day1);

    }
}

function setting(){
    var setting = document.getElementById("setting");
    setting.onclick = function(){
        localStorage.clear();
        window.location.href = "1-main.html";
    }
}

function moreinf(){
    var moreinf = document.getElementById("moreinf");
    moreinf.onclick = function(){
        alert("暂未开放,敬请期待");
    }
}

function oncemore(){
    var oncemore = document.getElementById("oncemore");
    oncemore.onclick = function(){
        localStorage.clear();
        window.location.href = "1-main.html";
    }
}
function share(){
    var share = document.getElementById("share");
    share.onclick = function(){
        alert("暂未开放,敬请期待");
    }
}