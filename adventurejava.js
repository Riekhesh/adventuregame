document.addEventListener("DOMContentLoaded", function() {
  let next = document.getElementById("nextbutton");
  let last = document.getElementById("last");
  let restart = document.getElementById("resetbutton");
  let arrowleft = document.getElementById("leftkey")
  let pagenum = document.getElementById("pagenum")
  let startbutton = document.getElementById("startbutton")


  $('.questions').hide();
  $(".buttons").hide()
  $("#title1").hide()
  $(".card").hide()

  let start = () => {
    $("*").css("background-color", "#1f1f1f")
    $("*").not(".card").css("background-image", "none");
    $('#landing').hide()
    $('#question0').fadeIn()
    $('.buttons').fadeIn()
    $(".card").fadeIn()
    $('#title1').fadeIn();
  }
  startbutton.addEventListener("click", start)

  let pagenumber = 0;
  let factor1 = true
  let factor2 = true
  let factor3 = true
  
  // next button
  let nextbutton = () => {
    if (pagenumber == 1 && $("#q1").val() == "") {
      alert("Please do not leave it blank")
    } else if (pagenumber == 2 && !$('input[name=q2]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 3 && $("#q3").val() == "") {
      alert("Please do not leave it blank")
    } else if (pagenumber ==3 && $('#q3').val() == "echo" && factor1 == true) {
      $('.questions').hide()
      $('#altquestion1').show()
      // runs only once
      factor1 = false
    } else if (pagenumber == 3 && $('#q3').val() != "echo" && factor1 == true) {
      $('.questions').hide()
      $('#altquestion2').show()
      // runs only once
      factor1 = false
    } else if (pagenumber == 4 && !$('input[name=q4]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 5 && !$('input[name=q5]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 5 && $('input[name=q5]:checked').val() == "moon" && factor2 == true ) {
      $('.questions').hide()
      $('#altquestion3').show()
      // runs only once
      factor2 = false
    } else if (pagenumber == 5 && $('input[name=q5]:checked').val() != "moon" && factor2 == true ) {
      $('.questions').hide()
      $('#altquestion4').show()
      // runs only once
      factor2 = false
    } else if (pagenumber == 6 && !$('input[name=q6]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 6 && $('input[name=q6]:checked').val() == "accept" && factor3 == true ) {
      $('.questions').hide()
      $('#altquestion5').show()
      // runs only once
      factor3 = false
    } else if (pagenumber == 7 && !$('input[name=q7]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 8 && !$('input[name=q8]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 9) {
      $(".buttons").hide()
      next.removeEventListener("click", nextbutton);
    } else {
    pagenumber++; 
    pagenum.innerHTML = pagenumber
    $('#question0').hide();
    $('.questions').hide();
    $('#question' + pagenumber).fadeIn();
    
    }
  };

  next.addEventListener("click", nextbutton);

  //landing page




  // left arrow key button
  let arrowleftkey = ()=> {
    //preventing pagenumber from being negative
    if (pagenumber > 0) {
      pagenumber--;
    } else {
      pagenumber * 1
    }
    pagenum.innerHTML = pagenumber
    $('#question0').hide();
    $('.questions').hide();
    $('#question' + pagenumber).show();
  }
  
  arrowleft.addEventListener("click", arrowleftkey, );

  // restart button
  let reset = ()=> {
    location.reload()
  }

  restart.addEventListener("click", reset)

  $(".card").click(function(){
    $("#cardinfo").slideToggle(1000);
});
  
});
document.addEventListener("DOMContentLoaded", function() {
  let next = document.getElementById("nextbutton");
  let last = document.getElementById("last");
  let restart = document.getElementById("resetbutton");
  let arrowleft = document.getElementById("leftkey")
  let pagenum = document.getElementById("pagenum")
  let startbutton = document.getElementById("startbutton")


  $('.questions').hide();
  $(".buttons").hide()
  $("#title1").hide()
  $(".card").hide()

  let start = () => {
    $("*").css("background-color", "#1f1f1f")
    $("*").not(".card").css("background-image", "none");
    $('#landing').hide()
    $('#question0').fadeIn(1000)
    $('.buttons').show()
    $(".card").fadeIn()
    $('#title1').fadeIn();
  }
  startbutton.addEventListener("click", start)

  let pagenumber = 0;
  let factor1 = true
  let factor2 = true
  let factor3 = true
  
  // next button
  let nextbutton = () => {
    if (pagenumber == 1 && $("#q1").val() == "") {
      alert("Please do not leave it blank")
    } else if (pagenumber == 2 && !$('input[name=q2]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 3 && $("#q3").val() == "") {
      alert("Please do not leave it blank")
    } else if (pagenumber ==3 && $('#q3').val() == "echo" && factor1 == true) {
      $('.questions').hide()
      $('#altquestion1').show()
      // runs only once
      factor1 = false
    } else if (pagenumber == 3 && $('#q3').val() != "echo" && factor1 == true) {
      $('.questions').hide()
      $('#altquestion2').show()
      // runs only once
      factor1 = false
    } else if (pagenumber == 4 && !$('input[name=q4]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 5 && !$('input[name=q5]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 5 && $('input[name=q5]:checked').val() == "moon" && factor2 == true ) {
      $('.questions').hide()
      $('#altquestion3').show()
      // runs only once
      factor2 = false
    } else if (pagenumber == 5 && $('input[name=q5]:checked').val() != "moon" && factor2 == true ) {
      $('.questions').hide()
      $('#altquestion4').show()
      // runs only once
      factor2 = false
    } else if (pagenumber == 6 && !$('input[name=q6]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 6 && $('input[name=q6]:checked').val() == "accept" && factor3 == true ) {
      $('.questions').hide()
      $('#altquestion5').show()
      // runs only once
      factor3 = false
    } else if (pagenumber == 7 && !$('input[name=q7]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 8 && !$('input[name=q8]:checked').val()) {
      alert("Please do not leave it blank")
    } else if (pagenumber == 9) {
      $(".buttons").hide()
      next.removeEventListener("click", nextbutton);
    } else {
    pagenumber++; 
    pagenum.innerHTML = pagenumber
    $('#question0').hide();
    $('.questions').hide();
    $('#question' + pagenumber).fadeIn();
    
    }
  };

  next.addEventListener("click", nextbutton);

  //landing page




  // left arrow key button
  let arrowleftkey = ()=> {
    //preventing pagenumber from being negative
    if (pagenumber > 0) {
      pagenumber--;
    } else {
      pagenumber * 1
    }
    pagenum.innerHTML = pagenumber
    $('#question0').hide();
    $('.questions').hide();
    $('#question' + pagenumber).show();
  }
  
  arrowleft.addEventListener("click", arrowleftkey, );

  // restart button
  let reset = ()=> {
    location.reload()
  }

  restart.addEventListener("click", reset)

  $(".card").click(function(){
    $("#cardinfo").slideToggle(1000);
});
  
});
