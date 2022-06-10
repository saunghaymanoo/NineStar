
    $(`#portfolio-link-all`).click(function(){
        $(".portfolios").fadeIn(700);
        $(".portfolio-link").removeClass("portfolio-link-active");
        $(this).addClass("portfolio-link-active");
    });
    $(`#portfolio-link-app`).click(function(){
        console.log("I am app")
        $(".portfolios").fadeOut(700);
        $(".column-app").fadeIn(700);
        $(".portfolio-link").removeClass("portfolio-link-active");
        $(this).addClass("portfolio-link-active");
    });
    $(`#portfolio-link-card`).click(function(){
        console.log("I am card")
        $(".portfolios").fadeOut(700);
        $(".column-card").fadeIn(700);
        $(".portfolio-link").removeClass("portfolio-link-active");
        $(this).addClass("portfolio-link-active");
    });
    $(`#portfolio-link-web`).click(function(){
        console.log("I am web")
        $(".portfolios").fadeOut(700);
        $(".portfolios.column-web").fadeIn(700);
        $(".portfolio-link").removeClass("portfolio-link-active");
        $(this).addClass("portfolio-link-active");
    });

    $(".navbar-toggler").click(function(){
        let ans=$(".navbar-collapse").hasClass("show");
        console.log(ans);
        if(ans){
            setTimeout(function(){
                $(".menu-icon").removeClass("fa-close");
                $(".menu-icon").addClass("fa-bars");
            },500);
            
        }else{
            setTimeout(function(){
                $(".menu-icon").removeClass("fa-bars");
                $(".menu-icon").addClass("fa-close");
            },500);
        }
    });
    function setActive(current){
        $(".nav-link").removeClass("current-section");
        $(`.nav-link[href='#${current}']`).addClass("current-section");
    }
    function navScroll(){
        let currentSection=$("section[id]");
        currentSection.waypoint(function(direction){
            if(direction=='down'){
                console.log($(this.element).attr('id'));
                setActive($(this.element).attr('id'));
            }
        },{
            offset:"150px"
        });
        currentSection.waypoint(function(direction){
            if(direction=='up'){
                console.log($(this.element).attr('id'));
                setActive($(this.element).attr('id'));
            }
        },{
            offset:"50px"
        });
    }
    navScroll();

    let screenHeight=$(window).height();
    console.log(screenHeight);
    $(window).scroll(function(){
        let currentPosition=$(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition<screenHeight-100){
            setActive("home");
        }else{
            navScroll();
        }
    });

$(".faq-item").click(function(){
    let displayCondition=$(this).children(".faq-item-body").css("display");
    console.log(displayCondition);
    if(displayCondition=="none"){
        $(".faq-item-body").slideUp(500);
        $(".faq-icon").removeClass("rotate");
        $(".faq-item-question").removeClass("question-color");
        $(this).find(".faq-item-body").slideDown(500);
        console.log(displayCondition);
    }else{
        $(this).find(".faq-item-body").slideUp(500);
        console.log(displayCondition);

    }
    
    
    $(this).find(".faq-icon").toggleClass("rotate");
    $(this).find(".faq-item-question").toggleClass("question-color");
});
$('.client-slide').slick({
    dots:true,
      centerMode: true,
centerPadding: '60px',
slidesToShow: 7,
responsive: [
{
breakpoint: 768,
settings: {
  arrows: false,
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 7
}
},
{
breakpoint: 480,
settings: {
  arrows: false,
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 1
}
}
]
  });

  $(window).on("load",function(){
    $(".loader-container").fadeOut(500);
  });