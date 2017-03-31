/**
 * Created by luzhaolin on 2017/3/13.
 */
window.onload= run;
function run(){
    var c = document.getElementById("game1");
    c.onclick = function(){
        window.location.href="2-allocation.html";
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




