// 顶部nav块以及搜索框功能实现
window.addEventListener("load", () => {
  var nut = document.querySelector(".nut_r2");
  var tnt = document.querySelector(".tnt");
  var inp = document.querySelector(".inp");
  var content = document.querySelector(".content_box");
  var list = document.querySelector(".list");
  var search = document.querySelector(".search");
  var small_icon = document.querySelector(".small_icon");
  inp.addEventListener("click", () => {
    nut.style.display = "none";
    tnt.style.display = "none";
    this.placeholder = "请输入关键字";
    list.style.display = "block";
  });
  content.addEventListener("click", () => {
    nut.style.display = "block";
    tnt.style.display = "block";
    inp.placeholder = "";
    list.style.display = "none";
  });
  document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 50) {
      search.style.display = "none";
      small_icon.style.display = "block";
      list.style.display = "none";
    } else {
      search.style.display = "block";
      small_icon.style.display = "none";
    }
  });

  // 轮播图事件
  var swiper = document.querySelector(".swiper_photo");
  var count = 1;
  setInterval(() => {
    swiper.src = "../images/轮播图" + count + ".png";
    count++;
    if (count > 3) count = 1;
  }, 1500);

  // 鼠标移入直降字眼的盒子，p2文字进行更改
  var link = document.querySelector(".link");
  var p_text = document.querySelector(".p_text");

  var link1 = document.querySelector(".link1");
  var p_text1 = document.querySelector(".p_text1");

  var link2 = document.querySelector(".link2");
  var p_text2 = document.querySelector(".p_text2");

  var link3 = document.querySelector(".link3");
  var p_text3 = document.querySelector(".p_text3");

  var link4 = document.querySelector(".link4");
  var p_text4 = document.querySelector(".p_text4");

  var link5 = document.querySelector(".link5");
  var p_text5 = document.querySelector(".p_text5");
  link.addEventListener("mouseover", () => {
    p_text.innerHTML = "配件直降";
    p_text.style.color = "#f00";
  });
  link.addEventListener("mouseout", () => {
    p_text.innerHTML = "抖音文创限量款";
    p_text.style.color = "#999";
  });

  link1.addEventListener("mouseover", () => {
    p_text1.innerHTML = "配件直降";
    p_text1.style.color = "#f00";
  });
  link1.addEventListener("mouseout", () => {
    p_text1.innerHTML = "尽情挥洒创造力";
    p_text1.style.color = "#999";
  });

  link2.addEventListener("mouseover", () => {
    p_text2.innerHTML = "配件直降";
    p_text2.style.color = "#f00";
  });
  link2.addEventListener("mouseout", () => {
    p_text2.innerHTML = "是下一代手机，更是下一代电脑";
    p_text2.style.color = "#999";
  });

  link3.addEventListener("mouseover", () => {
    p_text3.innerHTML = "配件直降";
    p_text3.style.color = "#f00";
  });
  link3.addEventListener("mouseout", () => {
    p_text3.innerHTML = "7种主题随机发货";
    p_text3.style.color = "#999";
  });

  link4.addEventListener("mouseover", () => {
    p_text4.innerHTML = "配件直降";
    p_text4.style.color = "#f00";
  });
  link4.addEventListener("mouseout", () => {
    p_text4.innerHTML = "是下一代手机，更是下一代电脑";
    p_text4.style.color = "#999";
  });

  link5.addEventListener("mouseover", () => {
    p_text5.innerHTML = "配件直降";
    p_text5.style.color = "#f00";
  });
  link5.addEventListener("mouseout", () => {
    p_text5.innerHTML = "7种主题随机发货";
    p_text5.style.color = "#999";
  });
});

// tab栏切换事件
window.addEventListener("load",() => {
  var nav_list = document.querySelector(".nav_list");
  var list = nav_list.querySelectorAll("li");
  var tab = document.querySelector(".tab");
  var lis = tab.querySelectorAll("li");
  for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    list[i].addEventListener("mouseover", () => {
      lis[this.index].style.display = "block";
      tab.style.display = "block";
    });
    list[i].addEventListener("mouseout", () => {
      lis[this.index].style.display = "none";
      tab.style.display = "none";
    });
    lis[i].addEventListener("mouseover", () => {
      tab.style.display = "block";
      this.style.display = "block";
    });
    lis[i].addEventListener("mouseout", () => {
      tab.style.display = "none";
      this.style.display = "none";
    });
  }
});

// 回到顶部
window.addEventListener("load", () => {
  var gotop = document.querySelector(".backtop");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 500) {
      gotop.style.display = "block";
      gotop.style.position = "fixed";
    } else {
      gotop.style.display = "none";
    }
  });
  gotop.addEventListener("click", function () {
    animate(window, 0);
  });
});

// 动画函数
function animate(obj, target, callback) {
  //想清除以前的定时器，保留当前一个定时器执行；
  clearInterval(obj.timer);
  obj.timer = setInterval(() => {
    var step = (target - window.pageYOffset) / 50;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (window.pageYOffset == target) {
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
    }
    // obj.style.left = window.pageYOffset + step + 'px';
    window.scroll(0, window.pageYOffset + step);
  }, 15);
}
