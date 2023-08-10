document.addEventListener("DOMContentLoaded", function() {
  let next = document.getElementById("endbutton");
  let intro = document.getElementById("intro");
  let q1 = document.getElementById("question1");
  let q2 = document.getElementById("question2");
  let q3 = document.getElementById("question3");
  let q4 = document.getElementById("question4");
  let q5 = document.getElementById("question5");
  let q6 = document.getElementById("question6");
  let q7 = document.getElementById("question7");
  let q8 = document.getElementById("question8");
  let last = document.getElementById("last");
  let restart = document.getElementById("resetbutton");
  let arrowleft = document.getElementById("<")
  let pagenum = document.getElementById("pagenum")


  let pagenumber = 1;

  let nextbutton = () => {
    if (pagenumber ===0) {
      intro.style.display = "block";
      q1.style.display = 'none';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 1) {
      $("#intro").fadeOut("fast");
      q1.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 2) {
      q1.style.display = "none";
      q2.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 3) {
      q2.style.display = "none";
      q3.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 4) {
      q3.style.display = "none";
      q4.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 5) {
      q4.style.display = "none";
      q5.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 6) {
      q5.style.display = "none";
      q6.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 7) {
      q6.style.display = "none";
      q7.style.display = 'block';
      pagenum.innerHTML = pagenumber
    } else if (pagenumber === 8) {
      q7.style.display = "none";
      q8.style.display = 'block';
      pagenum.innerHTML = pagenumber
    }else if (pagenumber === 9) {
      q8.style.display = "none";
      last.style.display = 'block';
      restart.style.display = 'block'
      next.style.display = "none"
      
    }
    pagenumber++;
    console.log(`page number : ${pagenumber}`);
  };

  next.addEventListener("click", nextbutton);

  let reset = ()=> {
    location.reload()
  }

  restart.addEventListener("click", reset)

  let handlePageVisibility = ()=> {
    if (pagenumber === 2) {
      $("div:not(#question1, #end)").hide()

    }
  }

  let arrowleftkey = ()=> {
    pagenumber--
    pagenumber--
    
    nextbutton()
    handlePageVisibility()
  }
  
  
  arrowleft.addEventListener("click", arrowleftkey, );

});
