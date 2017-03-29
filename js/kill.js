/**
 * Created by luzhaolin on 2017/3/29.
 */
window.onload =  function(){
    showid();
    chooseVictim();
    confirm();
}

function showid(){
    var url = window.location.href.split("=")[1];
    var array = url.split(",");
    array.shift();
    var killerNum = array.shift();
    var civilNum = array.shift();
    var killers = array.splice(0,killerNum);
    var civil = array.splice(0,civilNum);
    var wholeNum = parseInt(killerNum) + parseInt(civilNum);

    for(var i = 1;i <= wholeNum;i++){      //根据玩家数量,创建角色头像板元素
        var list = document.getElementById("list");
        var id = document.createElement("div");
        id.setAttribute("class","id");
        var order = document.createElement("div");
        if(killers.indexOf(i.toString())>=0){
            order.innerHTML = "杀手";      //判断角色身份
        }
        else if (civil.indexOf(i.toString()) >=0){
            order.innerHTML = "平民";
        }
        else{
            order.innerHTML = "未知"
        }

        var num2 = document.createElement("div");
        num2.innerHTML = i + "号";    //判断角色序号
        order.setAttribute("class","order");
        num2.setAttribute("class","num2");
        id.setAttribute("class","id");
        id.appendChild(order);   //添加角色身份
        id.appendChild(num2);    //添加角色序号
        list.appendChild(id);  //添加角色头像板元素

    }
}

function chooseVictim(){
    var players = document.getElementsByClassName("id");
    final = 0;
    finalId = 0;
    for(var i = 0; i<players.length;i++){

            players[i].onclick =function(){
                final=this.childNodes[1].innerHTML.charAt(0);
                finalId=this.childNodes[0].innerHTML;
                var oldTag = document.getElementsByClassName("tag");
                for(var i = 0;i<oldTag.length;i++){
                    oldTag[i].setAttribute("style","display:none");
                }
                var tag = document.createElement("div");
                tag.setAttribute("class","tag");
                this.appendChild(tag);  //这个怎么破,不能用players[i],只能用this.;               //另外感觉应该有更好的方式,可以点一下显示,再点一下取消.现在的无法取消,只能转换
        
            }
        

    }
}

function confirm(){
    var confirm = document.getElementById("confirm");
    confirm.onclick = function(){
        if(final != 0){

        var url = window.location.href.split("=")[1];
        var array = url.split(",");
        array.unshift(finalId);
        array.unshift(final);
        array.join();
        var url2 ="6-gameStart.html"+"?index="+array;
        window.location.href = url2;
    }
    else{
        alert("请选择一个目标");
    }
    }
}