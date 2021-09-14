
//Doing some research, a lot of methods use toggleClass to do this rotation.
//However, its a bit glitchy and made me irritated so I'm editing the CSS directly
$(document).ready(function(){
    
    //Hamburger menu rotation and menu expantion
    var isRotated = false;
    $(".hamburger-menu").click( () => {
        console.log("is rotated:"+isRotated)
        if(isRotated == false){
            console.log("In rotationg 90")
            $(".hm-img").css("transition","0.4s");
            $(".hm-img").css("transform","rotate(90deg)");
            
            isRotated = true;
        }else if(isRotated == true){
            $(".hm-img").css("transition","0.4s");
            $(".hm-img").css("transform","rotate(0deg)");
            isRotated = false;
            console.log("rotating back")
            console.log("New isRotated: "+isRotated)
        }
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