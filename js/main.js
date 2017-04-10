/**
 * Created by luzhaolin on 2017/3/13.
 */
window.onload= run;
function run(){
    var c = document.getElementById("game1");
    c.onclick = function(){
        window.location.href="2-allocation.html";
    };
    var game2 = document.getElementById("game2");
    game2.onclick =function(){
        alert("敬请期待");
    };
    var game3 = document.getElementById("game3");
    game3.onclick = function(){
        alert("说了敬请期待了, 还点,点你妹");
    }
}
/*
var kikk = "The Window";
var object = {
    name:"My Object",
    getNameFunc:function(){
        return function(){
            return this.kikk;
        }
    }
};

alert(object.getNameFunc()());
*/




