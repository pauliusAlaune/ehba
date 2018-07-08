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
    
    $('.catListHolder__item').click(function(){
        $('.catListHolder__item').removeClass('active');
        $(this).addClass('active');
    });

});