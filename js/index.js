button = document.querySelector('.btn');
social = document.querySelector('.social-links');
sm = document.querySelector('.socialMedia')

button.addEventListener('click',()=>{
    if(social.style.display === 'none'){
        social.style.display = 'block';
        sm.style.margin = 10;
    } else{
       social.style.display = 'none';
    }



});

