window.addEventListener("load",() => {
  // 图片切换
  var slide = document.querySelector(".slide_photo");
  var count = 1;
  setInterval(() => {
    slide.src = "../img/banner" + count + ".jpg";
    count++;
    if (count > 2) count = 1;
  }, 1500);

  // 关闭登录框
  var closer = document.querySelector(".closer");
  var login = document.querySelector(".login");
  var eject = document.querySelector(".alert");
  var gotop = document.querySelector(".li5");
  closer.addEventListener("click",() => {
    login.style.display = "none";
    eject.style.display = "block";
  });
  eject.addEventListener("click",() => {
    login.style.display = "block";
    eject.style.display = "none";
  });

  // 回到顶部
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 600) {
      gotop.style.display = "block";
    } else {
      gotop.style.display = "none";
    }
  });
  gotop.addEventListener("click", () => {
    animate(window, 0);
  });

  // 动画函数
  function animate(obj, target, callback) {
    //想清除以前的定时器，保留当前一个定时器执行；
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var step = (target - window.pageYOffset) / 40;
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

  // 滚动事件改变文本内容
  window.addEventListener("scroll", () => {
    var sum = 17756;
    var num = 1;
    var reg = 2653;
    var timer = null;
    var timer1 = null;
    var timer2 = null;
    var number = document.querySelector(".list_number");
    var hundred = document.querySelector(".hundred");
    var people = document.querySelector(".people_number");
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 300 && window.pageYOffset < 310) {
      for (var i = 0; i < 624; i++) {
        clearInterval(timer);
        timer = setInterval(() => {
          if (sum >= 18397) {
            clearInterval(timer);
          } else {
            sum++;
          }
          number.innerHTML = sum;
        }, 0);
      }
      for (var i = 1; i < 101; i++) {
        clearInterval(timer1);
        timer1 = setInterval(() => {
          if (num >= 100) {
            clearInterval(timer1);
          } else {
            num++;
          }
          hundred.innerHTML = num + "%";
        }, 10);
      }

      for (var i = 1; i < 621; i++) {
        clearInterval(timer2);
        timer2 = setInterval(() => {
          if (reg >= 3273) {
            clearInterval(timer2);
          } else {
            reg++;
          }
          people.innerHTML = reg;
        }, 0);
      }
    }
  });
	
});
//     window.addEventListener('scroll', function () {

// })

// window.addEventListener('scroll',function() {
//     var num = 1;
//     var timer1 = null;
//     var hundred = document.querySelector('.hundred');
//     if (window.pageYOffset >= 150) {
//         for(var i = 1;i<101;i++) {
//             clearInterval(timer1);
//                 timer1 = setInterval(() => {
//                     if(num >= 100) {
//                         clearInterval(timer1);
//                     }else {
//                       num++;
//                     }
//                   hundred.innerHTML = num + '%';
//                   }, 0);
//               }
//             }
// })
