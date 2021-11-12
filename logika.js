
var i=0;
var time=3000;
var images=[];
images[0]="img/slide1.jpg";
images[1]="img/slide2.jpg";
images[2]="img/slide3.png";
images[3]="img/slide4.jpg";
images[3]="img/slide5.gif";
function ganti(){
    document.slide.src = images[i];
    if(i < images.length -1){
        i++;

    }else{
        i=0;
    }
    setTimeout("ganti()",time);
}
    window.onload= ganti;


    