const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
   
    const icon = item.querySelector('.faq-icon');
    const answer = item.querySelector('.faq-answer');

    icon.addEventListener('click', () => {
        
        console.log(icon);
        

        if(icon.getAttribute('data-state') === 'closed'){
            icon.setAttribute('data-state', 'open');
            icon.src = "../assets/images/icon-minus.svg";
            answer.classList.add('open');
        }else{
            icon.setAttribute('data-state', 'closed');
            icon.src = "../assets/images/icon-plus.svg";
            answer.classList.remove('open');
        }
        
    });

});

 