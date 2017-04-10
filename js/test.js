/**
 * Created by luzhaolin on 2017/3/31.
 */
window.onload =function () {
    previous();
};

function previous(){
    var div3 =document.getElementById("div3");
    var sub = div3.previousElementSibling;
    console.log(sub.getAttribute("id"));
}


function insert(){
    var div1 =document.getElementById("div1");
    var div2 =document.getElementById("div2");
    var div3 =document.getElementById("div3");
    var div4 =document.createElement("div");
    div4.innerHTML = 4;
    insertAfter(div4,div3);  //在div3后面插入,打印仍然是0,1,2,说明div3不是div的最后节点

}

/*
if(localStorage.aa){
    localStorage.aa ++;

}
else{
    localStorage.aa = 1;
}

document.write("这是第"+localStorage.aa+"次访问");
 */

function insertAfter(newNode,oldNode){//在元素后面添加新的平级元素
    console.log(oldNode.parentNode.lastChild);
    console.log(0);
    if(oldNode.nextSibling != null){
        console.log(1);
        oldNode.parentNode.insertBefore(newNode,oldNode.nextSibling);
        console.log(2);
    }
    else{
        console.log(3);
        oldNode.parentNode.appendChild(newNode);
        console.log(4);
    }
}
