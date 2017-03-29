/**
 * Created by luzhaolin on 2017/3/29.
 */
window.onload = kill;

function kill(){
    var kill = document.getElementById("kill");
    var url = window.location.href.split("=")[1];
    var newUrl = "7-kill.html"+"?index="+url;
    kill.onclick = function(){
        window.location.href = newUrl;
    }
}