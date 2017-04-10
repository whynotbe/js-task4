/**
 * Created by luzhaolin on 2017/3/29.
 */
window.onload =  function(){
    showid();
    chooseVictim();
    confirm();
    close();
};

function showid(){
    var url = window.location.href.split("=")[1];
    var array = url.split(",");
    array.shift();
    var killers = localStorage.killers.split(",");
    var civil = localStorage.civil.split(",");
    var killerNum = killers.length;
    var civilNum = civil.length;
    console.log(killerNum);
    console.log(civilNum);
    console.log(killers);
    console.log(civil);
    console.log(localStorage.killers);
    console.log(localStorage.civil);

    for(var i = 1;i <= localStorage.wholeNum;i++){      //根据玩家数量,创建角色头像板元素
        var list = document.getElementById("list");
        var id = document.createElement("div");
        id.setAttribute("class","id");
        var order = document.createElement("div");
        if(killers.indexOf(i.toString())>=0){
            order.innerHTML = "杀手";      //判断角色身份
            var num2 = document.createElement("div");
            num2.innerHTML = i + "号";    //判断角色序号
            order.setAttribute("class","order");
            num2.setAttribute("class","num2");
            id.setAttribute("class","id");
            id.appendChild(order);   //添加角色身份
            id.appendChild(num2);    //添加角色序号
            list.appendChild(id);  //添加角色头像板元素
        }
        else if (civil.indexOf(i.toString()) >=0){
            order.innerHTML = "平民";
            var num3 = document.createElement("div");
            num3.innerHTML = i + "号";    //判断角色序号
            order.setAttribute("class","order");
            num3.setAttribute("class","num2");
            id.setAttribute("class","id");
            id.appendChild(order);   //添加角色身份
            id.appendChild(num3);    //添加角色序号
            list.appendChild(id);  //添加角色头像板元素
        }
        else{
            order.innerHTML = "未知"
        }
        
    }
}

function chooseVictim(){
    var players = document.getElementsByClassName("id");
    final = 0;
    finalId = 0;
    for(var i = 0; i < players.length;i++){

            players[i].onclick =function(){
                var oldTag = document.getElementsByClassName("tag");
                for(var j = 0; j<oldTag.length;j++)
                {
                    oldTag[j].setAttribute("style","display:none");
                } 
                final = this.childNodes[1].innerHTML.charAt(0);
                finalId = this.childNodes[0].innerHTML;
                var tag = document.createElement("div");
                tag.setAttribute("class","tag");
                this.appendChild(tag);  //这个怎么破,不能用players[i],只能用this.;               //另外感觉应该有更好的方式,可以点一下显示,再点一下取消.现在的无法取消,只能转换
                //原来是闭包的问题,闭包只能访问全局变量和函数内部变量,不能向上访问局部变量.
            }

    }
}

function confirm(){
    var confirm = document.getElementById("confirm");
    confirm.onclick = function(){
        if(final != 0){
            if(finalId =="平民"){
                var civil =localStorage.civil.split(",");
                civil.splice(civil.indexOf(final),1);
                localStorage.civil=civil.join(",");
            }
            else if(finalId =="杀手"){
                var killers = localStorage.killers.split(",");
                killers.splice(killers.indexOf(final),1);
                localStorage.killers = killers.join(",");
            }
     
        localStorage.currentStatus = 1;
        if(localStorage.currentDate ==1){
            var killed =[];
            killed.push(final);
            localStorage.killed = killed.join();
            var killedId = [];
            killedId.push(finalId);
            localStorage.killedId = killedId.join();
        }
            else{
            var killed1 = localStorage.killed.split(",");
            console.log("ok");
            killed1.push(final);
            localStorage.killed = killed1.join();
            var killedId1 =localStorage.killedId.split(",");
            killedId1.push(finalId);
            localStorage.killedId = killedId1.join();
        }
        var url = window.location.href.split("=")[1];
        var array = url.split(",");
        array.unshift(finalId);
        array.unshift(final);
        array.join();
        window.location.href = "6-gameStart.html"+"?index="+array;
    }
    else{
        alert("请选择一个目标");
    }
    }
}

function close(){
    var close = document.getElementById("close");
    close.onclick = function(){
        localStorage.clear();
        window.location.href = "1-main.html";
    }
}