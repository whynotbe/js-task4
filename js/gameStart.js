/**
 * Created by luzhaolin on 2017/3/29.
 */
window.onload = function(){
    kill();
    bonus();
    close();
    endGame();
    judgeView();
    gameOver();

};

function kill(){
    var kill = document.getElementById("kill");
    var url = window.location.href.split("=")[1];
    var newUrl = "7-kill.html"+"?index="+url;
    var a =document.getElementById("kill");
    kill.onclick = function(){
        window.location.href = newUrl;
    };

}

if(localStorage.currentDate){

}           //创建本地变量,保存当前日期和当前状态
else{
     localStorage.currentDate = 1;
}

if(localStorage.currentStatus){

}
else{
    localStorage.currentStatus = 0;
}

function bonus(){
    switch(localStorage.currentStatus){
        case "0":
            if(localStorage.currentDate == 1)
            {
                arr1= window.location.href.split("=")[1].split(",");
                arr1.shift();
                var killNum = arr1.shift();
                localStorage.killerNum =parseInt(killNum);
                var civilNum = arr1.shift();
                localStorage.civilNum =parseInt(civilNum);
                var killers = arr1.splice(0,killNum);
                var civil = arr1.splice(0,civilNum);
                localStorage.killers = killers.join(",");  //因为localStorage不能存储数组,所以只能先这样"解码"
                localStorage.civil = civil.join(",");
                localStorage.allKillers = killers.join(",");  //因为localStorage不能存储数组,所以只能先这样"解码"
                localStorage.allCivil = civil.join(",");
                localStorage.wholeNum = parseInt(killNum) + parseInt(civilNum);
                console.log(localStorage.killerNum);
                console.log(localStorage.civilNum);
                console.log(localStorage.killed);
                console.log(localStorage.voted);

            }
            break;
        case "1":
           
            var step1 = document.getElementById("kill");
            var setp1Bonus = document.createElement("div");
            setp1Bonus.setAttribute("class","bonus");
            var url = decodeURI(window.location.href);
            var array = url.split("=")[1];
            var victimIndex = array.split(",")[0];
            var victimId = array.split(",")[1]; //为什么这里获得的是16进制
            setp1Bonus.innerHTML = "天亮了,受害者是"+victimIndex+"号玩家,他的身份是"+victimId ;
            step1.appendChild(setp1Bonus);
            var sun = document.getElementById("sun");
            sun.setAttribute("style","top:238px");
            step1.style.backgroundImage ="url(sources/task4/状态栏结束.png)";//为什么不是../sources/task4/...
            step1.onclick = function(){
                alert("不在此时间段");
            };
            var step2 = document.getElementById("lastword");
            step2.onclick = function(){
                alert("亡灵发表遗言");
                localStorage.currentStatus = 2;
                step2.onclick =function(){
                    alert("不在此时间段");
                };
                bonus();
            };
            break;

        case "2":

            var b =document.getElementById("lastword");
            b.style.backgroundImage="url(sources/task4/状态栏结束.png)";
            var step2Bonus = document.createElement("div");
            step2Bonus.setAttribute("class","bonus");
            step2Bonus.innerHTML ="我挂了,我什么也不知道";
            b.appendChild(step2Bonus);
            var step3 = document.getElementById("talk");
            step3.onclick=function(){
                alert("现在开始讨论");
                localStorage.currentStatus = 3;
                step3.onclick =function(){
                    alert("不在此时间段");
                };
                bonus();
            };
            break;
        case "3":
            var c = document.getElementById("talk");
            c.style.backgroundImage="url(sources/task4/状态栏结束.png)";
            var step3Bonus=document.createElement("div");
            step3Bonus.setAttribute("class","bonus");
            step3Bonus.innerHTML ="发言讨论完毕";
            c.appendChild(step3Bonus);
            var step4 = document.getElementById("vote");
            step4.onclick = function(){
                window.location.href= "8-vote.html";
            };


    }
}

function gameOver(){
    var killers = localStorage.killers.split(",");
    var civil = localStorage.civil.split(",");

    changeDate();

    if(localStorage.killers ==""){            //killers.length,哪怕killers为空数组,也不会为0,所以不能用这个判断
        alert("游戏结束,平民获得了胜利,");
        localStorage.result = 0;
        var endGame = document.getElementsByClassName("left-button")[0];
        endGame.onclick = function(){
            window.location.href="9-result.html";
        };
        var judgeView = document.getElementsByClassName("right-button")[0];
        judgeView.onclick = function(){
            alert("游戏已经结束,请点击结束游戏");
        };
        var actions = document.getElementsByClassName("action");
        for(var j = 0; j <actions.length;i++)
        {
            actions[j].onclick = function(){
                alert("不在此时间段");
            }
        }
    }
    else if (killers.length >=civil.length){
        alert("游戏结束,杀手获得了胜利");
        localStorage.result =1;
        var endGame1 = document.getElementsByClassName("left-button")[0];
        endGame1.onclick = function(){
            window.location.href="9-result.html";
        };
        var judgeView1 = document.getElementsByClassName("right-button")[0];
        judgeView1.onclick = function(){
            alert("游戏已经结束,请点击结束游戏");
        }
    }


}


function changeDate(){           //根据当前日期,对页面添加已经完成的日期栏
    if(localStorage.changeDate == 1) {       //判断日期是否发生了改变,如果改变,则当前日期+1
        localStorage.currentDate++;
    }
    if(localStorage.currentDate >1) //如果当前日期>1,则根据当前日期的数字,生成对应数量的日期条
    {
            var num = parseInt(localStorage.currentDate);
            for(var i = 2;i<=num;i++)
            {
                var dateBar = document.createElement("div");
                dateBar.setAttribute("class","date");
                dateBar.innerHTML = "第"+i+"天";
                var tri = document.getElementById("tri");

                var main = document.getElementById("main");
                main.insertBefore(dateBar,tri);
            }

            localStorage.changeDate = 0;
        }
}

/*
function insertAfter(newNode,oldNode){     //在元素后面添加新的平级元素
    if(oldNode.nextSibling != null){
        oldNode.parentNode.insertBefore(newNode,oldNode.nextSibling);
    }
    else{
        oldNode.parentNode.appendChild(newNode);
    }
}
*/

function close(){
    var close = document.getElementsByClassName("close")[0];
    close.onclick = function(){
        localStorage.clear();
        window.location.href = "1-main.html";
    }
}
function endGame(){
    var endGame = document.getElementsByClassName("left-button")[0];
    endGame.onclick = function(){
        alert("游戏还未结束,请在游戏结束后点击");
    }
}
function judgeView(){
    var judgeView = document.getElementsByClassName("right-button")[0];
    judgeView.onclick = function(){
        window.location.href ="10-judgeView2.html";
    }
}