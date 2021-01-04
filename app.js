const navSlide = () => {

   const burger = document.querySelector('.burger');
   const nav = document.querySelector('ul');
   const navLinks = document.querySelectorAll('ul li');
   const logo = document.querySelector('.logo');


   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = '';
         } else {
            link.style.animation = `navLinkFade 0.8s ease forwards ${index/5 + 0.5}s`

         }
         
      });
      burger.classList.toggle('rotate');
      logo.classList.toggle('hidden');
})

}

navSlide();
