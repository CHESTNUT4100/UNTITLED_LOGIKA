let body = document.querySelector("body");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {     
      body.className = "darkmode";
    } else {
      body.className = "lightmode";
    }
  });
});



let ch_h = document.getElementById("ch_h");
let sh_t = document.getElementById("sh_t");


let ch0b = document.getElementById("ch0");
let ch1b = document.getElementById("ch1");
let ch2b = document.getElementById("ch2");
let ch3b = document.getElementById("ch3");
let ch4b = document.getElementById("ch4");
let ch5b = document.getElementById("ch5");
let ch6b = document.getElementById("ch6");


let sh0b = document.getElementById("sh0");
let sh1b = document.getElementById("sh1");
let sh2b = document.getElementById("sh2");
let sh3b = document.getElementById("sh3");
let sh4b = document.getElementById("sh4");
let sh5b = document.getElementById("sh5");
let sh6b = document.getElementById("sh6");


let icn = document.querySelector(".er404");


let mySlider = document.getElementById("mySlider");


const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");



let sVv = 1;


let myVar = setInterval(myTimer ,500);
function myTimer() {
  
if (sVv == 1) {
modal.style.backgroundColor = "#d3d3d330";
mySlider.style.backgroundColor = "#d3d3d3ff";
} else if (sVv == 2) {
modal.style.backgroundColor = "#3c3c3c30";
mySlider.style.backgroundColor = "#3c3c3cff";
} else if (sVv == 3) {
modal.style.backgroundColor = "#ffe96f30";
mySlider.style.backgroundColor = "#ffe96fff";
} else if (sVv == 4) {
modal.style.backgroundColor = "#99ff0030";
mySlider.style.backgroundColor = "#99ff00ff";  
} else if (sVv == 5) {
modal.style.backgroundColor = "#006aff30";
mySlider.style.backgroundColor = "#006affff";  
} else if (sVv == 6) {
modal.style.backgroundColor = "#ff00bb30";
mySlider.style.backgroundColor = "#ff00bbff";  
} else if (sVv == 7) {
modal.style.backgroundColor = "#ff4d0030";
mySlider.style.backgroundColor = "#ff4d00ff";
}
}



document.getElementById("mySlider").oninput = (e) => {
  sVv = e.target.value; // update the variable
  document.getElementById("sliderVal").textContent = sVv; // display it
};






ch0b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-0" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-0" + sVv;
  }
  document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

ch1b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-1" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-1" + sVv;
  }
    document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

ch2b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-2" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-2" + sVv;
  }
    document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

ch3b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-3" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-3" + sVv;
  }
    document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

ch4b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-4" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-4" + sVv;
  }
    document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

ch5b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-5" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-5" + sVv;
  }
    document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

ch6b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "2";
  icn.className = "pmi-6" + sVv;
  mySlider.onchange = function() {
  icn.className = "pmi-6" + sVv;
  }
    document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});


ch_h.addEventListener("click", () => {
  modal.style.display = "block";
let varibl = document.getElementById("mySlider").max = "1";
  icn.className = "product-hamter-";
  document.getElementById("description--").textContent=        "A coffee mug for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});




sh0b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-0" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-0" + sVv;
  }
  document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

sh1b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-1" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-1" + sVv;
  }
    document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

sh2b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-2" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-2" + sVv;
  }
    document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

sh3b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-3" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-3" + sVv;
  }
    document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

sh4b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-4" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-4" + sVv;
  }
    document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

sh5b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-5" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-5" + sVv;
  }
    document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});

sh6b.addEventListener("click", () => {
  modal.style.display = "block";
  let varibl = document.getElementById("mySlider").max = "7";
  icn.className = "psi-6" + sVv;
  mySlider.onchange = function() {
  icn.className = "psi-6" + sVv;
  }
    document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});



sh_t.addEventListener("click", () => {
  modal.style.display = "block";
varibl = document.getElementById("mySlider").max = "1";
  icn.className = "product-tungston-";
  document.getElementById("description--").textContent=        "A shirt for people that like to jump start their day with the opportunity to spread your love of Food Logika with others."          ;
});







    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });


    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


document.getElementById('slider').oninput = (slidervalue) => {
  document.getElementById('sliderVal').innerHTML = slidervalue.target.value;
};
