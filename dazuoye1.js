		var box = document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-825*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-825*index},function(){
				if(index==7){
					slider.style.left = '-825px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-825*index},function(){
				if(index==0){
					slider.style.left = '-4950px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);
		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			} else {
				return getComputedStyle(obj, null)[attr];
			}
		}
		function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var isStop = true;
		        for(var attr in json){
		        	var now = 0;
		        	if(attr == 'opacity'){
		        		now = parseInt(getStyle(obj,attr)*100);
		        	}else{
		        		now = parseInt(getStyle(obj,attr));
		        	}
		        	var speed = (json[attr] - now) / 8;
		        	speed = speed>0?Math.ceil(speed):Math.floor(speed);
		        	var cur = now + speed;
		        	if(attr == 'opacity'){
		        		obj.style[attr] = cur / 100;
		        	}else{
		        		obj.style[attr] = cur + 'px';
		        	}
		        	if(json[attr] !== cur){
		        		isStop = false;
		        	}
		        }
		        if(isStop){
		        	clearInterval(obj.timer);
		        	callback&&callback();
		        }
		    }, 30)
		}
		window.onload = function(){
			var cover = document.getElementsByClassName('cover')[0];
			window.onscroll = function(){
				var st = document.documentElement.scrollTop || document.body.scrollTop;
				if(st>130){
					cover.style.position = 'fixed';
				}else{
					cover.style.position = 'static';
				}
			}
		}
        var ul = document.getElementById("ul");
        function show() {
            var top = ul.offsetTop - 1; 
            ul.style.top = top + "px"; 
            if (-1 * ul.offsetTop >= ul.offsetHeight / 3) {
                ul.style.top = 0;
            }
        }
        var t = setInterval(show, 30);
        var li = document.getElementById("ul").getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].onmouseout = function () {
            	t = setInterval(show, 30);
            };
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }
        var op1 = document.getElementById('op1');
        var dsq = document.getElementById('dsq');
        dsq.innerHTML = op1.children[0].innerHTML;
        op1.onclick = function(){
        	for(var i=0;i<op1.children.length;i++){
        		if(this.value == i){
        			dsq.innerHTML = op1.children[i].innerHTML;
        		}
        	}
        }
        var right1 = document.getElementById('right1');
        right1.onmouseover = function(){
        	animate(right1,{right:0,top:82,opacity:100});
        }
        right1.onmouseout = function(){
        	animate(right1,{right:-83,top:82,opacity:100});
        }
        var right2 = document.getElementById('right2');
        right2.onmouseover = function(){
        	animate(right2,{right:0,top:191,opacity:100});
        }
        right2.onmouseout = function(){
        	animate(right2,{right:-83,top:191,opacity:100});
        }
        var right3 = document.getElementById('right3');
        var right31t = document.getElementById('right31t');
        right3.onmouseover = function(){
        	animate(right3,{right:0,top:336,opacity:100});
        	right31t.src = "pictures/img/erwei.png";
        	right31t.style.marginTop = "3px";
        }
        right3.onmouseout = function(){
        	animate(right3,{right:-83,top:336,opacity:100});
        	right31t.src = "pictures/img/serwei.png";
        	right31t.style.marginTop = "36px";
        }
        var right4 = document.getElementById('right4');
        right4.onmouseover = function(){
        	animate(right4,{right:0,top:491,opacity:100});
        }
        right4.onmouseout = function(){
        	animate(right4,{right:-83,top:491,opacity:100});
        }

