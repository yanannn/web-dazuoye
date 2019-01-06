var five121 = document.getElementById('five121');
		var five122 = document.getElementById('five122');
		var five123 = document.getElementById('five123');
		var five124 = document.getElementById('five124');
		var five11t = document.getElementById('five11t');
		five121.onclick = function(){
			five122.style.border = "1px solid #ff9003";
			five123.style.border = "1px solid #ffffff";
			five11t.src = "pictures/img/pp0.jpeg";
			Bimg.src = "pictures/img/pp0.jpeg";
		}
		five124.onclick = function(){
			five123.style.border = "1px solid #ff9003";
			five122.style.border = "1px solid #ffffff";
			five11t.src = "pictures/img/pp1.jpeg";
			Bimg.src = "pictures/img/pp1.jpeg";
		}
		var five252 = document.getElementById('five252');
		var five253 = document.getElementById('five253');
		var five282 = document.getElementById('five282');
		var five252t = document.getElementById('five252t');
		var five253t = document.getElementById('five253t');
		five252.style.border = "1px solid #ff0754";
		five252.style.borderRadius = "2px";
		five253.style.border = "1px solid #ffffff";
		five252.onclick = function(){
			five252.style.border = "1px solid #ff0754";
			five252.style.borderRadius = "2px";
			five253.style.border = "1px solid #ffffff";
			five282.innerHTML = "150ml";
			five252t.src = "pictures/img/duigou.png";
			five253t.src = "pictures/img/duigou2.png";
		}
		five253.onclick = function(){
			five252.style.border = "1px solid #ffffff";
			five253.style.border = "1px solid #ff0754";
			five253.style.borderRadius = "2px";
			five282.innerHTML = "200ml";
			five253t.src = "pictures/img/duigou.png";
			five252t.src = "pictures/img/duigou2.png";
		}
		var five262 = document.getElementById('five262');
		var five263 = document.getElementById('five263');
		var five264 = document.getElementById('five264');
		var i = 1;
		five262.onclick = function(){
			if(i>0){
				--i;
				five263.innerHTML = i;
			}else{
				five263.innerHTML = 0;
			}
		}
		five262.onmouseover = function(){
			if(i>0){
				five262.style.cursor = "pointer";
			}else{
				five262.style.cursor = "not-allowed";
			}
		}
		five264.onclick = function(){
			if(i<5){
				++i;
				five263.innerHTML = i;
			}else{
				five263.innerHTML = 5;
			}
		}
		five264.onmouseover = function(){
			if(i>4){
				five264.style.cursor = "not-allowed";
			}else{
				five264.style.cursor = "pointer";
			}
		}
		var img1 = document.getElementById('img1');
        var img2 = document.getElementById('img2');
        var slider = document.getElementById('slider');
        var Bimg = document.getElementById('Bimg');
        var five11 = document.getElementById('five11');
        img1.onmouseover = function () {
            slider.style.display = 'block';
            img2.style.display = 'block';
        }
        img1.onmouseout = function () {
            slider.style.display = 'none';
            img2.style.display = 'none';
        }
        img1.onmousemove = function (ev) {
            var ev = ev || window.event;
            var oL = ev.clientX - five11.offsetLeft - slider.offsetWidth / 2;

            var oT = ev.clientY - five11.offsetTop - slider.offsetHeight / 2;
            var oMaxw = img1.offsetWidth - slider.offsetWidth;
            var oMaxh = img1.offsetHeight - slider.offsetHeight;
            oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
            oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
            slider.style.left = oL + 'px';
            slider.style.top = oT + 'px';
            var scale = img2.offsetWidth / slider.offsetWidth;
            Bimg.style.left = -scale * oL +22 + 'px'
            Bimg.style.top = -scale * oT +22 + 'px'
        }
        var five292 = document.getElementById('five292');
        var tj = document.getElementById('tj');
        var jtgw = document.getElementById('tjgw');
        var tjgwc0 = document.getElementById('tjgwc0');
        five292.onclick = function(){
        	tj.setAttribute('class', 'tj0');
        	tjgw.setAttribute('class', 'tjgw0');
        }
        tjgwc0.onclick = function(){
        	tj.setAttribute('class', 'tj');
        	tjgw.setAttribute('class', 'tjgw');
        }