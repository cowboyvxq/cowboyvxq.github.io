window.addEventListener('load',function() {

// 回到顶部
var top = document.querySelector(".return_top");
document.addEventListener('scroll',function() {
    if (window.pageYOffset >= 1000){
        top.style.opacity = 1;
		top.style.position = 'fixed';

    }else{
        top.style.opacity = 0;
    }
}),
top.addEventListener('click',function(){
    animate(window,0);
})

// 回到顶部动画函数
function animate(obj,target,callback){
	//想清除以前的定时器，保留当前一个定时器执行；
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var step = (target - window.pageYOffset)/10;
		step = step > 0 ? Math.ceil(step):Math.floor(step);
		if(window.pageYOffset == target){
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}
		// obj.style.left = window.pageYOffset + step + 'px';
		window.scroll(0,window.pageYOffset + step)
	},35);
}

// // 鼠标移入右边盒子切换图片
// var rightBox = document.querySelectorAll('.broad_side>div');
// var img1 = document.querySelectorAll('.img1');
// var img2 = document.querySelectorAll('.img2');

// 鼠标移入侧边栏切换图片
var box1 = document.querySelector('.box1');
var link = document.querySelector('.link_first');
box1.addEventListener('mouseover',function(){
	link.style.color='red';
})

// 实现倒计时
  
const hourSpan = document.querySelector(".hour");
      minuteSpan = document.querySelector(".minute");
      secondSpan = document.querySelector(".second");
      time = new Date('2021-12-18'); //倒计截止日期；
function countdown(){
     const now = new Date();
     timerRemainning = time - now;
     // console.log(timerRemainning);
     let hour,minute,second;
     if(timerRemainning < 0){
          return 0;
     }

     second = Math.floor(timerRemainning/1000 % 60);
     minute = Math.floor(timerRemainning/1000 / 60 % 60);
     hour = Math.floor(timerRemainning/1000 / 60 % 60/24);
     if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }

     // 输出倒计时数据
     hourSpan.innerHTML = hour;
     minuteSpan.innerHTML = minute;
     secondSpan.innerHTML = second;
}
     setInterval(countdown,1000)		//执行定时器
countdown(); 
})
