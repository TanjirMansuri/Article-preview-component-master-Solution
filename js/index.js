button = document.querySelector('.btn');
social = document.querySelector('.social-links');
sm = document.querySelector('.socialMedia')

button.addEventListener('click',()=>{
    if(social.style.display === 'block'){
        social.style.display = 'none';
        sm.style.margin = 10;
    } else{
       social.style.display = 'block';
    }



});

