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
                    console.log($('.dropClick.active'));
                    console.log($('.dropClick.active').children('.dropdown__list'));
                }, 700);
            }
            $('.dropdown__list--item').removeClass('active');
            if($('.dropdown__list').hasClass('open')){
                $('.dropdown__list').slideUp('slow');
                $('.dropdown__list').removeClass('open');
            }
        }
    });

    $('.dropdown__list--item').click(function(e){
        e.stopPropagation();
        if($(this).hasClass("active")){
           
        } else {
            $('.dropdown__list--item').removeClass('active');
            $(this).addClass('active');  
        }
    });
    
    // about navbar
    let activeLiId = document.querySelector('.navbarListHolder__item.active').id;
    let activeIdName = './aboutInnerContent/' + activeLiId + '.php';
    getText(activeIdName);    
    
    let ul = document.getElementById('aboutNavbar');  // Parent

    ul.addEventListener('click', function(e) {
        console.log('cl');
        if (e.target.tagName === 'LI'){
            let activeLi = document.querySelector('.navbarListHolder__item.active');
            let idName = './aboutInnerContent/' + e.target.id + '.php';
            getText(idName);
            activeLi.classList.remove('active');
            e.target.classList.add('active');
        }
    });
    // get local file
    function getText(name){
        fetch(name)
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err){
            console.log(err);
        });
    }

});