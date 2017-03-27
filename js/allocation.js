/**
 * Created by luzhaolin on 2017/3/13.
 */
window.onload = function(){
    submit(); //获取数字,分配身份,为"去发牌"按钮添加点击事件. 点击转到查看身份-1界面.
}


function getNumber(){  //获取数字,分配身份,返还身份字符串
    var number = document.getElementById("input");
    
    allocate(number.value);
    number.focus();
    var tri=document.getElementsByClassName("tri");
    tri[0].onclick=function(){
        window.location.href = "1-main.html";
    }


    var inputTimes = 1;
    number.onblur = function(){
        if(parseInt(number.value) == number.value){
            if(number.value>3&&number.value<19)
            {
             allocate(number.value);
                var civil = []; //建立玩家数组
                var killers = []; //建立杀手数组,这个数组存放杀手玩家的序号. 另一种方式是建立一个数组,把"杀手""平民"设置为
                                  // 数组元素的值,然后打乱序号. 在使用上更简洁一些.
                var num = number.value;
                var killerNum = Math.floor(num/4);
                for(var i = 1;i <= num; i++){
                    civil.push(i);
                }
                killers = shuffle(killerNum,civil);
                console.log("这是第"+inputTimes+"次输入,一共"+num+"名玩家,其中"+killerNum+"名杀手,"+civil.length+"名平民");
                console.log("杀手的序号是");
                for( i = 0;i<killers.length;i++)
                {
                    var a = Number(killers[i]);
                    console.log(a);
                }
                console.log("平民的序号是");
                for( i = 0;i<civil.length;i++)
                {
                    console.log(civil[i]);
                }

                var id = killers.concat(civil);
                id.unshift(civil.length);
                id.unshift(killers.length);
                idString = id.join();
                inputTimes ++;

            }
            else{
                alert("请输入4~18的整数!");
                number.value = 8;
            }
        }
        else {
            alert("请输入4~18的整数");
            number.value = 8;
        }


    }
}

function allocate(a){
    var killerNumber = document.getElementById("killerNumber");
    var civilNumber = document.getElementById("civilNumber");
    var killerNum = Math.floor(a/4);
    var civilNum = a - killerNum;
    var killer = "杀手"+killerNum+"人";
    var civil = "平民" +civilNum + "人";
    killerNumber.innerHTML = killer;
    civilNumber.innerHTML = civil;
}

function    shuffle(x,array){
    
    var c = [];
    for(i = 0 ;i < x ; i++){
        var order = Math.floor(Math.random()*(array.length));
        var a = array.splice(order,1);
        c.splice(0,0,a);
    }
    return c;
    
}

function submit(){     //点击"去发牌按钮",根据杀手和水民人数分配角色,跳转到查看身份页面,且传递角色参数字符串到身份页面
    var button = document.getElementsByClassName("submit");
    getNumber();
    
    button[0].onclick = function(){
        
        window.location.href = "3-checkId-1.html"+"?index="+"1,"+idString;  //传递参数过去,不知道为啥非得加index=，可能是一种格式吧,不加不行，会出现奇怪的东西
    }                                                              // url里的参数数组,参数组依次是玩家序号,杀手人数,平民人数,杀手序号,平民序号
}