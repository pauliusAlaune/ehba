$(document).ready(function() {
    const spanHover = document.createElement("span");
    spanHover.classList.add('hoverFx');
    $('.hoverItem').hover(function(){        
        $(this).append(spanHover);
        $(this).mouseleave(function(){
            spanHover.remove();
        });
    });
    
    const navToggle = document.getElementById('navToggle');
    navToggle.addEventListener('click', function(){
        const navBlock = document.querySelector('.navBlock');
        navBlock.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // get Lastest News validation
    const getLastestNews = document.getElementById('getLastestNews');
    if (getLastestNews) {
        getLastestNews.addEventListener('submit', function(e){        
            if(!(validateEmail())){
                e.preventDefault();
            } else {
                console.log('fin');
            }        
        });
    }

    document.getElementById('getLatestNewsEmail').addEventListener('blur', validateEmail);

    function validateEmail(){
        const email = document.getElementById('getLatestNewsEmail');
        const block = document.querySelector('.getLastestNews__holder');
        let validEmail = true;
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;
        if(!re.test(email.value)){
            email.classList.add('is-invalid'); 
            block.classList.add('err');
            block.classList.add('animated', 'shake');
            setTimeout(function(){
                block.classList.remove('animated', 'shake');
            }, 1500);
            validEmail = false;
        } else {
            email.classList.remove('is-invalid');
            block.classList.remove('err');
        }
        return validEmail;
    }

    
    // category list
    $('.catListHolder__item').click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
            $('.catListHolder__item').removeClass('active');
            $('.dropdown__list').slideUp("slow");
            $('.dropdown__list--item').removeClass('active');
            if($(this).hasClass('dropClick')){
                $(this).children('.dropdown__list').slideUp("slow");
                $(this).children('.dropdown__list').removeClass('open');
            }
        } else {
            $('.catListHolder__item').removeClass('active');
            $(this).addClass('active');
            if($(this).hasClass('dropClick')){
                setTimeout(function(){
                    $('.dropClick.active').children('.dropdown__list').slideDown('slow');
                    $('.dropClick.active').children('.dropdown__list').addClass('open');
                }, 700);
            }
            $('.dropdown__list--item').removeClass('active');
            if($('.dropdown__list').hasClass('open')){
                $('.dropdown__list').slideUp('slow');
                $('.dropdown__list').removeClass('open');
            }
        }
    });

//    $('.dropdown__list--item').click(function(e){
//        e.stopPropagation();
//        if($(this).hasClass("active")){
//           
//        } else {
//            $('.dropdown__list--item').removeClass('active');
//            $(this).addClass('active');  
//        }
//    });
    
    $(document).on('click', '.drillshideBlockToggle', function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            scrollStop()
            $('.drillshideBlockToggle').removeClass('active');
            $('.drillshideBlockToggle').prev().slideUp("slow");
            $('.drillshideBlockToggle').prev().removeClass('open');
        } else {
            scrollStop();
            $('.drillshideBlockToggle').removeClass('active');
            $('.drillshideBlockToggle').prev().slideUp("slow");
            $('.drillshideBlockToggle').prev().removeClass('open');
            $(this).prev().slideToggle('slow');
            $(this).prev().toggleClass('open');
            $(this).toggleClass('active'); 
            if($(".drillshideBlockToggle").hasClass('active')) {
              $("html, body").animate({
                   scrollTop: $(".drillshideBlockToggle.active").parent().parent().offset().top - 30
              }, 500);
           }
        }

    });
    
    // about navbar
    const about = document.querySelector('.aboutSection');
    if(about){
        activeLocalFile('./aboutInnerContent/', 'aboutNavbar');
    }
    
    const support = document.querySelector('.supportSection');
    if(support){
        activeLocalFile('./supportInnerContent/', 'supportNavbar');
    }
    
    // active local file 
    function activeLocalFile(localPlace, navId){
        let activeLiId = document.querySelector('.navbarListHolder__item.active').id;
        let activeIdName = localPlace + activeLiId + '.php';
        getText(activeIdName);    

        let ul = document.getElementById(navId);

        ul.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI'){
                let activeLi = document.querySelector('.navbarListHolder__item.active');
                let idName = localPlace + e.target.id + '.php';
                getText(idName);
                activeLi.classList.remove('active');
                e.target.classList.add('active');
            }
        });
    }
    
    // get local file
    function getText(name){
        fetch(name)
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            document.getElementById('output').innerHTML = data;
            setTimeout(function(){
                document.getElementById('output').firstChild.classList.add('fadeIn');
            }, 200);
            
        })
        .catch(function(err){
            console.log(err);
        });
    }
    
    
    $(document).on('click', '.openBtn', function(e) {
        console.log(this);
        e.stopPropagation();
        if ($(this).hasClass("active")) {
            $(".openBtn").next().removeClass("open");
            $(".openBtn").next().slideUp("slow");
            $(".openBtn").removeClass("active");
            scrollStop();
        } else {
            $(".openBtn").next().removeClass("open");
            $(".openBtn").next().slideUp("slow");
            $(".openBtn").removeClass("active");
            $(this).next().slideToggle("slow");
            $(this).next().toggleClass("open");
            $(this).toggleClass("active");
            scrollStop();
            if($(".openBtn").hasClass('active')) {
              $("html, body").animate({
                   scrollTop: $(".openBtn.active").parent().parent().offset().top - 30
              }, 500);
           }
        }
    });
    
    $('.aboutSection__holder__contentBlock .title').click(function(){
       console.log(this); 
    });
    
    $('#categoryBtn').click(function(e){
        e.preventDefault();
        $('#categoryList').slideToggle('slow');
    });
    
    $('#datepicker').datepicker();
    $('#dateBtn').click(function() {
          $('#datepicker').datepicker('show');
    });

    function scrollStop(){
        var v = 0;  
        var bd = $('body').get(0);
        $('.infoBlockName').not(this).next().slideUp({easing: "linear", step: function(now, tween) {
            if(tween.prop == "height"){
                if(v == 0){
                    v = now;
                }else{
                    var k = v - now;
                    bd.scrollTop -= k;
                    v = now;
                }
            }
        }, duration: 400, complete: function() { 

        }
        });
    }
//    $( function() {
//        $( "#datepicker" ).datepicker();
//    });
//    function callDatepicker(){
//        $( "#datepicker" ).datepicker();
//    }

});