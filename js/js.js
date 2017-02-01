$(function() {
	//获取图片数量
	var size = $("#pic img").size(),
		j,
		i = 0;   

	//显示第一张轮播图
	$("#pic li").first().show();
	
	//自动轮播
	var lunbo = setInterval(inter, 3000);
	function inter() {
		i++;
		if ( i == size) {
			i = 0;
		}
		//alert(i)
		$("#pic li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		$("#num img").eq(i).attr('src', 'images/index/dot.png').
		siblings().attr('src', 'images/index/dot1.png');
		changeText(i);
	}
	//鼠标悬停时停止轮播
	$("#lunbo").hover(function() {
		clearInterval(lunbo);
	}, function() {
		lunbo = setInterval(inter, 3000)
	});

	//点击小圆点切换
	$("#num img").click(function() {
		 j = $(this).index();
		$("#pic li").eq(j).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		$("#num img").eq(j).attr('src', 'images/index/dot.png').
		siblings().attr('src', 'images/index/dot1.png');
		changeText(j);
	});

	function changeText(j) {
		var article = $("#lunbo article"),
			h1 = $("#lunbo article h1"),
			p = $("#lunbo article p");
		switch(j) {
			case 0 :
				h1.text('"奇遇大鹏友" \\ 半岛味道');
				break;
			case 1: 
				h1.text('哈斯卡尔教授访问十字水');
				break;
			case 2:
				h1.text('"奇遇大鹏友" \\ 街拍所城');
				break;
			case 3:
				h1.text('"奇遇大鹏友" \\ 生生不息');
				break;
			case 4:
				h1.text('"奇遇大鹏友" \\ 租下路日记');
				break;
		}
	}
});