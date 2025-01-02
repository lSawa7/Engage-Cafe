let loader = document.querySelector('.pre-loader');
addEventListener('DOMContentLoaded',()=>{
  loader.classList.add('hide');
})
// Header icon
let menu = document.querySelector(".toggle");
menu.onclick = () => {
  document.querySelectorAll(".toggle span").forEach((e) => {
    e.classList.toggle("tog");
  });
  document.querySelector(".links").classList.toggle("height");
  document.querySelector(".links ul").style.opacity = "1";
};
// End of Header

//Right Bar
let settingBox = document.querySelector(".setting-box i");
settingBox.onclick = () => {
  document.querySelector(".setting-box").classList.toggle("open");
};
//custsome color
let colors = document.querySelectorAll(".setting-box .lists ul li");
colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});
//Counter
let idS = document.querySelector(".section-count");
let counter = document.querySelectorAll(".section-count p");
let started = false;
function counterF(el) {
  var goal = el.dataset.goal;
  let countF = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(countF);
    }
  }, 10000 / goal);
}

window.onscroll = () => {
  if (this.scrollY >= idS.offsetTop - 200) {
    if (!started) {
      counter.forEach((e) => counterF(e));
    }
    started = true;
  }
  // Header_
  if (window.pageYOffset >= 20) {
    document.querySelector(".content").style.cssText =
      ";transition:.3s;";
    document.querySelector("header").style.cssText = document.querySelector(
      "header"
    ).style.cssText = "background-color:black;position:sticky; top:0;";
  } else {
    document.querySelector(".content").style.cssText =
      "padding-top:200px;transition:.3s;";
    document.querySelector("header").style.cssText =
      "background-color:transparent;transition:.3s; position:static";
  }
  if (this.pageYOffset >= 470) {
    document.querySelector("header").style.cssText =
      "background-color:rgba(0,0,0,.8);width:100%; transition:1.9s; position:fixed; top:0;";
  } else {
    document.querySelector(".continar").style.cssText = "padding-top:0px";
  }
};
