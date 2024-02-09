// 메뉴 열기
function navopen() {
  var nav = document.querySelector(".header-menus");
  nav.classList.add("active");
}

// 메뉴 닫기
function navclose() {
  const nav = document.querySelector(".header-menus");
  nav.classList.remove("active");
}

// pc서치박스 열기
function searchopen() {
  const search = document.querySelector(".nav-search");
  search.classList.toggle("active");
}

// pc서치박스 닫기
function searchclose() {
  const search = document.querySelector(".nav-search");
  search.classList.toggle("active");
}

// pc서치박스 스크롤시 위로
window.onscroll = function () {
  const search = document.querySelector(".nav-search");
  if (window.pageYOffset < 650) search.style.top = "-70px";
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition == 0) {
    search.style.top = "0px";
  }
};

// searchevent searchevent-category popup on
function searcheventpopupon() {
  const popup = document.querySelector(".searchevent-category-popup");
  popup.style.display = "block";
  document.getElementById("bodys").style.overflow = "hidden";
}

// searchevent searchevent-category popup off
function searcheventpopupoff() {
  const popup = document.querySelector(".searchevent-category-popup");
  popup.style.display = "none";
  document.getElementById("bodys").style.overflow = "auto";
}

// recommend
var mobslides = document.getElementsByClassName("recommend-leftdiv-slide");
var mobindex = 0;
var pcslides = document.getElementsByClassName("recommend-leftdiv-slide");
var pcindex = 0;
var pcrightslides = document.getElementsByClassName("recommend-rightdiv-slide");
var pcrightindex = 0;

// 모바일 메인슬라이드 버튼
function mobrecommendLeft() {
  if (mobindex == 0) mobindex = mobslides.length - 1;
  else mobindex--;
  mobslides[0].style.marginLeft = "-" + mobindex * 100 + "vw";
}

function mobrecommendRight() {
  if (mobindex == mobslides.length - 1) mobindex = 0;
  else mobindex++;
  mobslides[0].style.marginLeft = "-" + mobindex * 100 + "vw";
}

// pc 메인슬라이드 버튼
function pcrecommendLeft() {
  if (pcindex == 0) pcindex = pcslides.length - 1;
  else pcindex--;
  pcslides[0].style.marginLeft = "-" + pcindex * 50 + "vw";

  if (pcrightindex == 0) pcrightindex = pcrightslides.length - 1;
  else pcrightindex--;
  pcrightslides[0].style.marginLeft = "-" + pcrightindex * 400 + "px";
}

function pcrecommendRight() {
  if (pcindex == pcslides.length - 1) pcindex = 0;
  else pcindex++;
  pcslides[0].style.marginLeft = "-" + pcindex * 50 + "vw";

  if (pcrightindex == pcrightslides.length - 1) pcrightindex = 0;
  else pcrightindex++;
  pcrightslides[0].style.marginLeft = "-" + pcrightindex * 400 + "px";
}

// 하트 아이콘 클릭
window.addEventListener("load", function() {
  const lovebtn = document.querySelectorAll(".hot-goods-love");

  for (let i = 0; i < lovebtn.length; i++) {
    lovebtn[i].addEventListener("click", function() {
      lovebtn[i].classList.toggle("active");
    });
  }
});

// 상담신청 등록 누르면
function applicationend() {
  alert("상담신청이 완료되었습니다.");
}

// service notice
window.addEventListener("load", function () {
  const List = document.querySelectorAll(".service-section-title");
  for (let i = 0; i < List.length; i++) {
      List[i].addEventListener("click", function () {
          var panel = this.nextElementSibling;
          if (panel.classList.contains("active")) {
              panel.classList.remove("active");
              List[i].classList.remove("active");
              panel.style.maxHeight = null;
          }
          else {
              clearlist();
              panel.classList.add("active");
              List[i].classList.add("active");
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }

  function clearlist() {
      for (let i = 0; i < List.length; i++) {
          var panel = List[i].nextElementSibling;
          panel.classList.remove("active");
          List[i].classList.remove("active");
          panel.style.maxHeight = null;
      }
  }
});




// FAQ & Notice page - faq-main
window.addEventListener("load", function () {
  const List = document.querySelectorAll(".faq-main li");
  for (let i = 0; i < List.length; i++) {
    List[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;
      List[i].classList.toggle("active");
      if (panel.style.maxHeight) {                         
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});


// FAQ & Notice page - notice-main
window.addEventListener("load", function () {
  const List = document.querySelectorAll(".notice-main li");
  for (let i = 0; i < List.length; i++) {
      List[i].addEventListener("click", function () {
          var panel = this.nextElementSibling;
          //클래스가 있을때와 없을때를 구분
          if (panel.classList.contains("active")) {
              panel.classList.remove("active");
              List[i].classList.remove("active");
              panel.style.maxHeight = null;
          }
          else {
              clearlist();
              panel.classList.add("active");
              List[i].classList.add("active");
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }

  function clearlist() {
      for (let i = 0; i < List.length; i++) {
          var panel = List[i].nextElementSibling;
          panel.classList.remove("active");
          List[i].classList.remove("active");
          panel.style.maxHeight = null;
      }
  }
});



// login page - checkbox
window.addEventListener("load", function() {
  const agreeAll = document.querySelector('input[name="agreeAll"]');
  const agree = document.querySelectorAll('input[name="agree"]');

  agreeAll.addEventListener("click", function() {
    if(agreeAll.checked == true){
      for (let i = 0; i < agree.length; i++) {
        agree[i].checked = true;
      }
    } if(agreeAll.checked == false) {
      for (let i = 0; i < agree.length; i++) {
        agree[i].checked = false;
      }
    }
  });
  for (let i = 0; i < agree.length; i++) {
    agree[i].addEventListener("click", function () {
      const agreecheck = document.querySelectorAll('input[name="agree"]:checked');
      if (agree.length === agreecheck.length) {
        agreeAll.checked = true;
      } else {
        agreeAll.checked = false;
      }
    });
  }
});


// event page - page number
window.addEventListener("load", function() {
    const tagList = document.querySelectorAll(".page > p");
    for (let i = 0; i < tagList.length; i++) {
      tagList[i].addEventListener("click", function() {
        clearPage();
        this.classList.add("checkpage");
      });
    }
  
    function clearPage() {
      for (let i = 0; i < tagList.length; i++) {
        tagList[i].classList.remove("checkpage");
      }
    }
  });
  



// purchase page - list
window.addEventListener("load", function () {
  const List = document.querySelectorAll(".purchase-list > li");
  for (let i = 0; i < List.length; i++) {
      List[i].addEventListener("click", function () {
          var panel = this.nextElementSibling;
          //클래스가 있을때와 없을때를 구분
          if (panel.classList.contains("list-see")) {
              panel.classList.remove("list-see");
              this.classList.remove("befores");
              panel.style.maxHeight = null;

          }
          else {
              clearlist();
              panel.classList.add("list-see");
              this.classList.add("befores");
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }

  function clearlist() {
      for (let i = 0; i < List.length; i++) {
          var panel = List[i].nextElementSibling;
          panel.classList.remove("list-see");
          List[i].classList.remove("befores");
          panel.style.maxHeight = null;
      }
  }
});

// purchase page - img change white
function mainimgswhiteon() {
  const whitebtn = document.querySelector(".purchase-page-color-white");
  const whiteimg = document.querySelector(".purchase-imgs-white");
  const blackbtn = document.querySelector(".purchase-page-color-black");
  const blackimg = document.querySelector(".purchase-imgs-black");

  whitebtn.classList.add("active");
  blackbtn.classList.remove("active");
  whiteimg.style.display = "grid";
  blackimg.style.display = "none";
}

// purchase page - img change black
function mainimgblackon() {
  const whitebtn = document.querySelector(".purchase-page-color-white");
  const whiteimg = document.querySelector(".purchase-imgs-white");
  const blackbtn = document.querySelector(".purchase-page-color-black");
  const blackimg = document.querySelector(".purchase-imgs-black");

  whitebtn.classList.remove("active");
  blackbtn.classList.add("active");
  whiteimg.style.display = "none";
  blackimg.style.display = "grid";
}

// purchase page - purchase select
function purchaseselect() {
  const selectdiv = document.querySelector(".purchase-page-buy-select ul");
  selectdiv.classList.toggle("active");
}

// purchase page - particulars-tab
window.addEventListener("load", function() {
  const tagList = document.querySelectorAll(".particulars-tab li");
  for (let i = 0; i < tagList.length; i++) {
    tagList[i].addEventListener("click", function() {
      clearPage();
      this.classList.add("active");
    });
  }

  function clearPage() {
    for (let i = 0; i < tagList.length; i++) {
      tagList[i].classList.remove("active");
    }
  }
});


// footer 패밀리사이트
function showfootersite() {
  document.getElementById('sitelist').classList.toggle('footer-site-show1');
  document.getElementById('siteclicker').classList.toggle('footer-site-show2');
}

document.addEventListener('mouseup', function(e) {
  const container = document.querySelector(".footer-site");
  if (!container.contains(e.target)) {
    document.getElementById('sitelist').classList.remove('footer-site-show1');
    document.getElementById('siteclicker').classList.remove('footer-site-show2');
  }
});

// aside 줄이기 스크립트
window.addEventListener("load", function() {
  var asideclose = document.querySelector('.aside-close');
  var asideul = document.querySelector('aside ul');
  var asideopen = document.querySelector('.aside-open');
  var asiderecent = document.querySelector('.aside-recent');

  asideclose.addEventListener('click', () => {
    asideul.classList.toggle('aside-close1');
    asideclose.classList.toggle('aside-close2');
    asiderecent.classList.toggle('aside-close3');
    asideopen.style.display = "block";
  })
});

// aside 늘리기 스크립트
window.addEventListener("load", function() {
  var asideclose = document.querySelector('.aside-close');
  var asideul = document.querySelector('aside ul');
  var asideopen = document.querySelector('.aside-open');
  var asiderecent = document.querySelector('.aside-recent');

  asideopen.addEventListener('click', () => {
    asideul.classList.toggle('aside-close1');
    asideclose.classList.toggle('aside-close2');
    asiderecent.classList.toggle('aside-close3');
    asideopen.style.display = "none";
  })
});

// aside 닫기
function asideend() {
  var asideend = document.querySelector('aside');
  asideend.style.display = "none";
}

// aside top btn
var timeOut;

function scrollToTop() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout('scrollToTop()', 10);
  } else clearTimeout(timeOut);
}