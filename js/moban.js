var intro2=document.querySelector()
var speed4=600/window.innerHeight
window.onscroll=function(){
    // 企业介绍的图片动画1
    // 判断当前是不是已经滚动到1.5屏到第二屏的范围内
    var dis2=-300+(top*window.innerHeight)*speed4
    console.log(top);
    if(top>1.5*window.innerHeight&&top<2*window.innerHeight){
        intro2.style.transform="translateX("+dis+"px)";
    }else if(top>2*window.innerHeight){
        intro2.style.transform="translateX(0px)";
    }
    
}
