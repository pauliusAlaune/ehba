console.log('ehba');


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
        validEmail = false;
    } else {
        email.classList.remove('is-invalid');
        block.classList.remove('err');
    }
    return validEmail;
}