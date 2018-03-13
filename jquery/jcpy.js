$(document).ready(function(){
    $('.sidebar-btn').click(function(){
        $('.sidebar').toggleClass('show')
        $('.sidebar-btn').toggleClass('toggle')
    });

    $('#sidebar-btn').click(function(){
        $('.sidebar').toggleClass('show')
        $('#sidebar-btn').toggleClass('toggle')
    });

    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();

      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });

    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();

      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });

});


// $(document).ready(function(){
//   $('.next').on('click', function(){
//     var currentImg = $('.active');
//     var nextImg = currentImg.next();
//
//     if(nextImg.length){
//       currentImg.removeClass('active').css('z-index', -10);
//       nextImg.addClass('active').css('z-index', 10);
//     }
//   });
//
//   $('.prev').on('click', function(){
//     var currentImg = $('.active');
//     var prevImg = currentImg.prev();
//
//     if(prevImg.length){
//       currentImg.removeClass('active').css('z-index', -10);
//       prevImg.addClass('active').css('z-index', 10);
//     }
//   });
// });

// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

function openGig(evt, gigName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(gigName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
