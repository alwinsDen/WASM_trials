const videoDomEle = document.querySelector(".videoInputClass");
videoDomEle.addEventListener("change", function (){
    let mediaFile = URL.createObjectURL(videoDomEle.files[0]);
    //select the video display element
    let video = document.querySelector(".videoPainter");
    video.src = mediaFile;
})