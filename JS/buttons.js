
//Doing some research, a lot of methods use toggleClass to do this rotation.
//However, its a bit glitchy and made me irritated so I'm editing the CSS directly
$(document).ready(function(){
    
    //Hamburger menu rotation and menu expantion
    var isRotated = false;
    $(".hamburger-menu").click( () => {
        if(isRotated == false){
            $(".hm-img").css("transition","0.4s");
            $(".hm-img").css("transform","rotate(90deg)");
            $("#floating-menu").css("height","100%");
            $("#floating-content").css("display","block");
            isRotated = true;
        }else if(isRotated == true){
            $(".hm-img").css("transition","0.4s");
            $(".hm-img").css("transform","rotate(0deg)");
            $("#floating-menu").css("height","0%");
            $("#floating-content").css("display","none");
            isRotated = false;
        }
        console.log("is rotated:"+isRotated)
    });
 

    //Carousel Buttons and Img rotation.
    const addrList = [
        "/img/carousel-img/company-banner-stock-img.jpg",
        "/img/carousel-img/current-portfolio-site-normalized.jpg",
        "/img/carousel-img/first-portfolio-size-normalized.jpg",
        "/img/carousel-img/link-page-site-normalized.jpeg",
        "/img/carousel-img/html-css-site-normalized.png"
        ]
    var curr = 0;

    $("#next-img").click(()=>{
        if(curr < addrList.length-1){
            curr++;
            $("#carousel-canvas").attr('src',addrList[curr])
        }else if(curr = addrList.length-1){
            curr = 0;
            $("#carousel-canvas").attr('src',addrList[curr])
        }
    })
    $("#previous-img").click(()=>{
        if(curr != 0){
            curr--;
            $("#carousel-canvas").attr('src',addrList[curr])
        }else if(curr == 0){
            curr = addrList.length-1;
            $("#carousel-canvas").attr('src',addrList[curr])
        }
    })
});