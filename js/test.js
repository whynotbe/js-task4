/**
 * Created by luzhaolin on 2017/3/31.
 */

if(localStorage.aa){
    localStorage.aa ++;

}
else{
    localStorage.aa = 1;
}

document.write("这是第"+localStorage.aa+"次访问");
