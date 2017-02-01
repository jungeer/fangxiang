$(function () {
	// 高亮显示当前页面导栏航
	var index=window.location.href.split('/').length-1;
	var href=window.location.href.split('/')[index].substr(0,4);
	$("#nav li a[href^='"+href+"']").addClass("on");


	//aside 部分的 js
	(function() {
        // 点击展开图标
        $('.video-more').click(function() {
        	/*
				获取 video 标签 poster 值，筛选出 文字部分
				对有对应文字 dataset 属性值 加上 class
				var isPoster = $('video').data('src');
				var char = 	isPoster.split('/')[2].substring(0, 5);
					alert(char)
        	*/
					
           $('video').attr('poster', 'images/aside/半岛味道.png')
           $('.video-more').fadeOut(200);
           $('.aside').fadeIn(800);
           //$('.video-img').css({'z-index': '1200'})
        });
        // 点击第一个 div 选项时，
        // 
         $('.aside-div').eq(0).click(function() {
        	$('.aside').hide();
        	$('.video-more').fadeIn(500);
        	var ele = $('.aside-div').hasClass('check')
        		data = ele.data('src');
        	setSrc($('video'),data);
        });

        $('.aside-div').each(function(index, element) {
            $(element).click(function() {
            	$(element).addClass('check').siblings().removeClass('check');
            	$('video').attr('src','video/'+$(element).data('src')+'.mp4');
            	$('video').attr('poster', 'images/aside/'+$(element).data('src')+'.png');
            })
        })

        function setSrc(element, data) {
        	element.attr(src, 'video/'+data+'.mp4');
        }

       var isPlay = document.querySelector('video');
       if(isPlay) {
          isPlay.addEventListener('play', function() {
             $('.aside').hide();
             $('.video-more').fadeIn(500);
         })
       }
       
        /*function played() {
        	var isPlay = document.querySelector('video');	
        	if( isPlay.play() ) {
        	$('.aside').hide();
      	  }
        }*/
        
	})();
})

	