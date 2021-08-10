// 侧边栏tab切换
window.addEventListener('load', function () {
    // 搜索框的焦点事件
    var search = document.querySelector('.search_box');
    search.onfocus = function () {
        this.placeholder = '';
    }
    search.onblur = function () {
        this.placeholder = '搜索 天猫 品牌/商品/店铺';
    }

    // 回到顶部
    var backtop = document.querySelector('.backtop');
    backtop.onclick = function () {
        this.style.backgroundPosition = '-509px 0';
        this.style.top = '200px';
        this.style.transition = 'all 3s';
        animate(window, 0);
    }

    backtop.onmouseover = function () {
        this.style.backgroundPosition = '-509px 0';
        this.style.transition = 'all 0s';
    }

    backtop.onmouseout = function () {
        this.style.backgroundPosition = '-10px 0';
    }

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
            window.scroll(0, window.pageYOffset + step)
        }, 15);
    }

    // 品牌推荐模块换一批的效果
    var brank_ul = document.querySelector('.brank_ul');
    var brank_lis = brank_ul.querySelectorAll('li');
    var last_icon = document.querySelector('.last_icon');
    var k = 1;
    last_icon.onclick = function () {
        var sum = 360 * k + 'deg';
        for (var i = 0; i < brank_lis.length - 1; i++) {
            brank_lis[i].style.transform = 'rotateY(' + sum + ')';
            brank_lis[i].style.transition = 'all 1.7s';
        }
        k++;
    }

    //  轮播图模块
    function $(cssselector) {
        var obj = document.querySelectorAll(cssselector);
        if (obj.length == 1) {
            return obj[0];
        }
        return obj;
    }

    let banner = $('.banner');
    let bannerUl = $('.banner_imgs ul');
    let ulLis = $('.banner ul li');

    let prev = $('.arrow_left')
    let next = $('.arrow_right');

    let dotLis = $('.banner .dot ol li');

    let num = 1;
    let circleIndex = 0;

    let flag = true;

    // 点击右箭头，切换下一张图片
    next.onclick = function () {
        if (flag) {
            flag = false;
            num++;
            bannerUl.style.marginLeft = -num * 100 + 'vw';
            bannerUl.style.transition = 'margin-left 1s';

            circleIndex++;
            if (circleIndex == 5) {
                circleIndex = 0;
            }
            for (let i = 0; i < dotLis.length; i++) {
                dotLis[i].classList.remove('active');
            }
            dotLis[circleIndex].classList.add('active');
        }

    }

    // 点击左箭头，切换上一张图片
    prev.onclick = function () {
        if (flag) {
            flag = false
            num--;
            bannerUl.style.marginLeft = -num * 100 + 'vw';
            bannerUl.style.transition = 'margin-left 1s';

            circleIndex--;
            if (circleIndex == -1) {
                circleIndex = 4;
            }
            for (let i = 0; i < dotLis.length; i++) {
                dotLis[i].classList.remove('active');
            }
            dotLis[circleIndex].classList.add('active');
        }
    }

    // 过度完成，执行的无缝轮播事件
    bannerUl.ontransitionend = function () {
        flag = true;
        if (num == 6) {
            num = 1;
            bannerUl.style.marginLeft = -num * 100 + 'vw';
            bannerUl.style.transition = 'margin-left 0s';
        }

        if (num == 0) {
            num = 5;
            bannerUl.style.marginLeft = -num * 100 + 'vw';
            bannerUl.style.transition = 'margin-left 0s';
        }
    }

    for (let i = 0; i < dotLis.length; i++) {
        dotLis[i].setAttribute('data-index', i + 1);
        dotLis[i].onclick = function () {
            for (let j = 0; j < dotLis.length; j++) {
                dotLis[j].classList.remove('active');
            }
            this.classList.add('active');
            let index = this.getAttribute('data-index');
            bannerUl.style.marginLeft = -index * 100 + 'vw';
            bannerUl.style.transition = 'margin-left .4s';
            num = index;
            circleIndex = index - 1;
        }
    }

    let timer = null;

    function autoPlay() {
        timer = setInterval(() => {
            next.click();
        }, 3000);
    }
    autoPlay();

    function stopPlay() {
        clearInterval(timer);
    }
    var swper = document.querySelector('.swper');

    // 鼠标移入轮播图盒子，停止播放
    swper.onmouseover = function () {
        stopPlay();
    }
    // 鼠标移出轮播图盒子，自动播放
    swper.onmouseout = function () {
        autoPlay();
    }

    //  轮播图模块，tab栏的操作事件
    var lis = document.querySelectorAll('.sider-list li');
    var tab = document.querySelectorAll('.nav-content');
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        tab[i].index = i;
        lis[i].onmouseover = function () {
            tab[this.index].className = 'show fl_left clearfix';
        }

        lis[i].onmouseout = function () {
            tab[this.index].className = 'nav-content';
        }

        tab[i].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                this.className = 'show fl_left clearfix';
                lis[this.index].className = 'active';
            }
        }

        tab[i].onmouseout = function () {
            for (var i = 0; i < lis.length; i++) {
                this.className = 'nav-content';
                lis[i].className = '';
            }
        }

    }

    // 左侧边固定导航栏
    var navLeft = document.querySelector('.navgation-left');
    var pilotLis = document.querySelectorAll('.pilot_list li');
    var grabble = document.querySelector('.grabble');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 800) {
            grabble.style.display = 'block';
            navLeft.style.display = 'block';
            navLeft.style.transform = 'scale(1.1)';
            navLeft.style.transition = 'all 1s';
            backtop.style.display = 'block';
        } else {
            navLeft.style.transform = 'scale(0)';
            navLeft.style.transition = 'all 1s';
            grabble.style.display = 'none';
            backtop.style.display = 'none';
            backtop.style.top = '600px';
        }

        // 获取左侧导航条点击跳转对应的内容元素
        var mart = document.querySelector('.tmall-mart');
        var hk = document.querySelector('.tmall-hk');
        var beauty = document.querySelector('.fashion-beauty');
        var electronics = document.querySelector('.electronics');
        var grocery = document.querySelector('.grocery-health');
        var home = document.querySelector('.home');
        var outdoors = document.querySelector('.outdoors-automotive');
        var guess = document.querySelector('.guess-you-like');
        var logo = document.querySelector('.tmall-photo');

        for (var i = 0; i < pilotLis.length; i++) {
            if (window.pageYOffset > mart.offsetTop - 40 && window.pageYOffset <= hk.offsetTop - 40) {
                pilotLis[0].style.backgroundColor = '#64c333';
                pilotLis[i].style.backgroundColor = '#626262';

            } else if (window.pageYOffset > hk.offsetTop - 40 && window.pageYOffset <= beauty.offsetTop - 40) {
                pilotLis[1].style.backgroundColor = '#ff0036';
                pilotLis[i].style.backgroundColor = '#626262';

            } else if (window.pageYOffset > beauty.offsetTop - 40 && window.pageYOffset <= electronics.offsetTop - 40) {
                pilotLis[2].style.backgroundColor = '#ea5f8d';
                pilotLis[i].style.backgroundColor = '#626262';

            } else if (window.pageYOffset >= electronics.offsetTop - 40 && window.pageYOffset <= grocery.offsetTop - 40) {
                pilotLis[3].style.backgroundColor = '#0aa6e8';
                pilotLis[2].style.backgroundColor = '#626262';
                pilotLis[i].style.backgroundColor = '#626262';

            } else if (window.pageYOffset >= grocery.offsetTop - 40 && window.pageYOffset <= home.offsetTop - 40) {
                pilotLis[4].style.backgroundColor = '#64c333';
                pilotLis[i].style.backgroundColor = '#626262';

            } else if (window.pageYOffset >= home.offsetTop - 40 && window.pageYOffset <= outdoors.offsetTop - 40) {
                pilotLis[5].style.backgroundColor = '#f15453';
                pilotLis[i].style.backgroundColor = '#626262';

            } else if (window.pageYOffset >= outdoors.offsetTop - 40 && window.pageYOffset <= guess.offsetTop - 40) {
                pilotLis[6].style.backgroundColor = '#f15453';
                pilotLis[i].style.backgroundColor = '#626262';
            } else if (window.pageYOffset >= guess.offsetTop - 40 && window.pageYOffset <= logo.offsetTop - 90) {
                pilotLis[i].style.backgroundColor = '#626262';
                pilotLis[7].style.backgroundColor = '#f15453';
            } else {
                pilotLis[i].style.backgroundColor = '#626262';
            }
        }
    })
   
 
})

