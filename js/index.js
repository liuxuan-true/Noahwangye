var bannerLeft =document.querySelector(".banner_left");
var bannerImg1 =document.querySelector(".banner_img1");
var bannerLine =document.querySelector(".banner_line");
var bannerImg2 =document.querySelector(".banner_img2");
var bannerImg3 =document.querySelector(".banner_img3");
var bannerImg4 =document.querySelector(".banner_img4");
var banner=document.querySelector(".banner");
var wuptop=document.querySelector(".wup_top");
var wupbottom=document.querySelector(".wup_bottom");
var erpLeftimg=document.querySelector(".erp_left_img");
// bannerLeft.style.transform="rotateY(30deg)"
// 每滚动一像素bannerleft要旋转的角度
var speed=45/window.innerHeight;
var speed1=300/window.innerHeight;
var speed2=360/window.innerHeight;
var speed3=1200/window.innerHeight;
var speed4=1200/window.innerHeight;
var speed5=1600/window.innerHeight;
window.onscroll=function(){
    var top=document.documentElement.scrollTop;
    // Y轴旋转的动画
    var angle=top*speed;
    if(angle<=45){
        bannerLeft.style.transform="rotateY("+(45-angle)+"deg)";
        bannerImg1.style.transform="rotateY("+(45-angle)+"deg)";
    }else{
        bannerLeft.style.transform="rotateY(0)"
        this.bannerImg1.style.transform="rotateY(0)"
    }
    // 内容平移的动画
    var x=top*speed1;
    if(x<=300){
        bannerLine.style.transform="translatex("+(x-300)+"px)";
        bannerImg2.style.transform="translatex("+(x-300)+"px)";
        bannerImg3.style.transform="translatex("+(x-300)+"px)";
    }else{
        bannerLine.style.transform="translatex(0)";
        bannerImg2.style.transform="translatex(0)";
        bannerImg3.style.transform="translatex(0)";
    }
    // 旋转的动画
    var angle2=speed2*top;
    if(angle2<=360){
        bannerImg4.style.transform="rotate("+angle2+"deg)";
    }else{
        bannerImg4.style.transform="rotate(0)";
    }
    // 处理首屏定位方式
    if(top>window.innerHeight){
        banner.style.position="absolute"
        banner.style.top=window.innerHeight+"px";
    }
    else{
        banner.style.position="fixed"
        banner.style.top=0;
    }
    // 第五屏的动画
    if(top>1.5*window.innerHeight&&top<2*window.innerHeight){
        var dis=600-(top-1.5*window.innerHeight)*speed3
        var dis2=-600+(top-1.5*window.innerHeight)*speed4
        wuptop.style.transform="translateX("+dis+"px)"
        wupbottom.style.transform="translateX("+dis2+"px)"
    }else if(top>2*window.innerHeight){
        wuptopImg1.style.transform="translateX(0px)"
        wupbottom.style.transform="translateX(0px)"
    }
    // // 第二屏动画
    // if(top>1.5*window.innerHeight&&top<2*window.innerHeight){
    //     var dis=800-(top-1.5*window.innerHeight)*speed5
    //     erpLeftimg.style.transform="translateY("+dis+"px)";
    // }
}
// 网页内容加载完成
window.onload=function(){
    document.documentElement.scrollTop=0;
    setTimeout(function()  {
        window.scrollTo(0,0);
    }, 20);
}
