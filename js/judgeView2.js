/**
 * Created by luzhaolin on 2017/3/24.
 */

window.onload = function()
{
    showid();
    back();
};

function showid(){
    
    var killers = localStorage.allKillers.split(",");
    var liveKillers = localStorage.killers.split(",");
    var civil = localStorage.allCivil.split(",");
    var liveCivil = localStorage.civil.split(",");
    var wholeNum = parseInt(killers.length) + parseInt(civil.length);

    for(var i = 1;i <= wholeNum;i++){      //根据玩家数量,创建角色头像板元素
        var list = document.getElementsByClassName("list")[0];
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
        if(liveCivil.indexOf(i.toString()) == -1){
            if(liveKillers.indexOf(i.toString())== -1){
                id.setAttribute("style","background-image:url(sources/task3/目标头像-死亡.png)");
            }
            
        }
        
    }

}





function back(){
    var back =document.getElementById("back");
    console.log(0);
    back.onclick = function(){
        window.history.back(-1);
        console.log(1);
    }
}/**
 * Created by luzhaolin on 2017/4/10.
 */
