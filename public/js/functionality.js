document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('navbar_top').classList.remove('pt-5');
          
          // add padding top to show content behind navbar
          let navbar_height = document.querySelector('.navbar').offsetHeight;
          //document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          document.getElementById('navbar_top').classList.add('pt-5');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 



