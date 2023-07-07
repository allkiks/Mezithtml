// IE10以下浏览器提示
function hiUpgrade() {
    window.AESKey = '';
    // 判断浏览器是否支持placeholder属性
    function isSupportPlaceholder() {
        var input = document.createElement('input');
        return 'placeholder' in input;
    };
    //判断是否是IE浏览器，包括Edge浏览器
    function IEVersion() {
        //取得浏览器的userAgent字符串
        var userAgent = navigator.userAgent;
        //判断是否IE浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
        if (isIE) {
            // ie10及以下
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion < 10 || !isSupportPlaceholder()) {
                return true;
            }
        } else {
            return false;
        }
    }
    var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">无法正常浏览本网站！</p><div class="hi-close">继续浏览</div><div class="hi-text1"><p>1、您的浏览器版本过低，请升级您的浏览器。</p><p>2、如果您的浏览器是最新版本，请<span>切换到极速模式</span>访问。</p><p>3、您使用的是IE10以下的浏览器，建议您<span>使用主流浏览器</span>访问。</p></div><p class="hi-text2"><span>主流浏览器下载</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>谷歌浏览器</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>火狐浏览器</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico3"></div><p>UC浏览器</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ浏览器</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>搜狗浏览器</p></a></li></ul></div></div>';
    if (IEVersion()) {
        document.write(tpl);
    }
}
hiUpgrade();

// 使用IE浏览器提示
// function hiUpgrade() {
//     window.AESKey = '';
//     // 判断浏览器是否支持placeholder属性
//     function isSupportPlaceholder() {
//         var input = document.createElement('input');
//         return 'placeholder' in input;
//     };
//     //判断是否是IE浏览器，包括Edge浏览器
//     function IEVersion() {
//         //取得浏览器的userAgent字符串
//         var userAgent = navigator.userAgent;
//         //判断是否IE浏览器
//         var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
//         if (isIE) {
//             // ie10及以下
//             var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
//             reIE.test(userAgent);
//             var fIEVersion = parseFloat(RegExp["$1"]);
//             if (fIEVersion <= 10 || !isSupportPlaceholder()) {
//                 return true;
//             }
//         } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
//             // ie11
//             return true;
//         } else {
//             return false;
//         }
//     }
//     var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">无法正常浏览本网站！</p><div class="hi-close">继续浏览</div><div class="hi-text1"><p>1、您的浏览器版本过低，请升级您的浏览器。</p><p>2、如果您的浏览器是最新版本，请<span>切换到极速模式</span>访问。</p><p>3、您使用的是IE浏览器，请<span>使用主流浏览器</span>访问。</p></div><p class="hi-text2"><span>主流浏览器下载</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>谷歌浏览器</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>火狐浏览器</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico3"></div><p>UC浏览器</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ浏览器</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>搜狗浏览器</p></a></li></ul></div></div>';
//     if (IEVersion()) {
//         document.write(tpl);
//     }
// }
// hiUpgrade();


function goTop() {
$('html,body').animate({ 'scrollTop': 0 }, 1000);
}

function fixedBot(){
    if($(".hadbox").hasClass("hadbox2")){
        $(".hadheight").show();
    }else{
        $(window).scroll(function(){
            if($(window).scrollTop()>200){
                $(".hadbox").addClass("hadbox2");
            }else{
                console.log(10);
                $(".hadbox").removeClass("hadbox2");
            }
        });
    }
    
}
if($(window).width()<768){
    $(".fixedheight").height($(".fixedbot").height()-2);
}
fixedBot();

/* 导航 */

$(".hadbox-sec1 .container .gt .search").click(function(){
    $(".hadbox-sec3").toggleClass("active");
});
$(".hadbox-sec3 .cont .f_close").click(function(){
    $(".hadbox-sec3").removeClass("active");
});

function navFade(){
    var i = $(window).scrollTop();
    var obj = $(".hadbox");
    $(window).scroll(function(){
      if($(this).scrollTop()>i&& $(this).scrollTop()>50){
        i = $(this).scrollTop();
        obj.addClass("hadbox3");
      }else{
        i = $(this).scrollTop();
        obj.removeClass("hadbox3");
      }
    });
  }
//   navFade();

  $(".hadbox-sec2 .menu1 .basemenubut,.hadbox-sec1 .container .gt .basemenubut").click(function(){
      $(this).toggleClass("basemenubut2");
      
      
      if($(".hadbox-sec3").hasClass("hadbag")){
        $(".hadbox-sec3").toggleClass("active2");
      }else{
        $(".hadbox-sec3").toggleClass("active1");
      }
  });
  $(".hadbox-sec3").click(function(){
        $(this).removeClass("active1");
        $(this).removeClass("active2");
        $(".hadbox-sec2 .menu1 .basemenubut,.hadbox-sec1 .container .gt .basemenubut").removeClass("basemenubut2");
  });
  $(".hadbox-sec3.hadbag .cont .menu_nav").click(function(e){
    e.stopPropagation();
  });

  $(".hadbox-sec2 .lange .tit").click(function(){
    $(this).next().stop().slideToggle();
  });

$('.counter').countUp({
    time: 1000
});

var hdon = $(".hadbox-sec3 .cont .menu_nav li.on").index();
$(".hadbox-sec3 .cont .menu_nav li").hover(function(){
    $(this).addClass("on").siblings().removeClass("on");
},function(){
    $(".hadbox-sec3 .cont .menu_nav li").eq(hdon).addClass("on").siblings().removeClass("on");
});

/* 首页 */
function domeMousemove(obj,shu){
	if(obj.length==0){
		return false;
	}
	var oUl = obj;
	var l = oUl.get(0).offsetWidth/2;
	var t = oUl.get(0).offsetHeight/2;
	$(".hm").mousemove(function(e){
		var oEv = e || event;
		var iL = oEv.clientX;
		var iT = oEv.clientY;
		var left1 = ((iL - l )/140*(oUl.index()+1))*shu;
		var top1 = ((iT - t )/100*(oUl.index()+1))*shu;
		oUl.css({
			"-webkit-transform": "translate3D("+left1+"px,"+top1+"px,0)",
			"transform": "translate3D("+left1+"px,"+top1+"px,0)"
		});

	});
  }
  domeMousemove($(".hm .bag img"),-1);

 // 视频弹窗
 function HiVideoPop(obj) {
    var oVideoBox = $("#hi-video-pop"); //弹窗
    var oClose = oVideoBox.find(".hi-close"); //关闭按钮
    var oVideo = oVideoBox.find("video"); //视频标签
    // 点击显示弹窗，设置视频src，播放视频
    obj.each(function() {
        $(this).click(function() {
            oVideoBox.stop().fadeIn();
            oVideo.attr("src", $(this).attr("data-video-src"));
            oVideo.trigger("play");
        });
    });
    // 点击关闭弹窗，暂停视频播放
    oClose.click(function() {
        oVideoBox.stop().fadeOut();
        oVideo.trigger("pause");
    });
}
// 调用
HiVideoPop($(".bannerbox .f_video")); //参数为点击的对象，必须带有data-video-src属性

// 下载中心
$(".downalt .cont .form .item .int input,.careersalt .cont .form .item .int input").focus(function(){
    // $(this).parents(".item").addClass("on");
});
$(".downalt .cont .form .item .int input,.careersalt .cont .form .item .int input").blur(function(){
    // $(this).parents(".item").removeClass("on");
});


$(".downalt .cont .close,.downalt .bag").click(function(){
    $(this).parents(".downalt").fadeOut();
});


/* 加入我们 */
$(document).on("click",".careersbox-sec1 .cont .item .tit",function(){
    $(this).parent().toggleClass("on");
    $(this).parent().find(".fz_jut").stop().slideToggle(250).find('.fz_text').toggleClass("on");
});
$(".careersalt  .close,.careersalt .bag").click(function(){
    $(this).parents(".careersalt").fadeOut().find(".cont").removeClass("on");
    // $(this).parents(".careersalt").fadeOut().find(".cont").slideUp();
});

/* 产品列表 */
var prolost4cont = new Swiper('.prolost4_cont',{
    //slidesPerView : 'auto',    根据slide的宽度自动调整展示数量。此时需要设置slide的宽度，如下style所示
    loop: true,
    speed:900,
    loopedSlides: 5,
    // centeredSlides: true,
     navigation: {
        nextEl: '.x-pr .swiper-button-prev',
        prevEl: '.x-pr .swiper-button-next',
    },
    autoplay: {
        delay: 4000,//1秒切换一次
      },
    on: {
      slideChangeTransitionStart: function(){
        //   alert(this.activeIndex);
        var _index = $(".prolost4_cont .swiper-slide-active").attr("data-swiper-slide-index");
        $(".prolost4_nav .li").eq(_index).addClass("on").siblings().removeClass("on");
      },
    },
    breakpoints: { 
        0: {  //当屏幕宽度大于等于320
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        567:{
            slidesPerView: 1.2,
        },
        768: {  //当屏幕宽度大于等于768 
          slidesPerView: 1.53125,
        },
      }
});


$(".porlist-sec2  .item").click(function(){
    var $clickId = $(this).attr("ux-click-id");
	$(".uxProTip"+$clickId).fadeIn();
	var bu = $(".uxProTip"+$clickId).data("bu");
	$('body').css('overflow','hidden');
	if(bu){
	    $(".uxProTip"+$clickId).attr("data-bu","false");
		var poraltbox1nav = new Swiper(".uxProTip"+$clickId+" .poraltbox1_nav",{
		    speed:300,
				observer: true,  //开启动态检查器，监测swiper和slide
				    observeParents: true,  //监测Swiper 的祖/父元素
		    slidesPerView: "auto",
				centeredSlides: true,
				watchOverflow: true,
				// loop: true,
				breakpoints: {
				    0: {  //当屏幕宽度大于等于320
				      slidesPerView: 4,
				    },
				    768: {  //当屏幕宽度大于等于768 
				      slidesPerView: 5,
				    },
				  }
		});
		var poraltbox1cont = new Swiper(".uxProTip"+$clickId+" .poraltbox1_cont",{
		    speed:300,
				// loop: true,
				centeredSlides: true,
				observer: true,  //开启动态检查器，监测swiper和slide
				    observeParents: true,  //监测Swiper 的祖/父元素
		    spaceBetween: 20,
		    on: {
		        slideChangeTransitionStart: function(){
		            //   alert(this.activeIndex);
		          //  var _in  = this.realIndex;
		          var _in  = this.activeIndex;
								console.log(_in);
		            poraltbox1nav.slideToLoop(_in);
		            $(".uxProTip"+$clickId+" .poraltbox1_nav .swiper-slide-active").addClass("on").siblings().removeClass("on");
		        },
		    },
		  //  navigation: {
		  //      nextEl: $(".uxProTip"+$clickId+" .poraltbox1_next"),
		  //      prevEl: $(".uxProTip"+$clickId+" .poraltbox1_prev"), 
		  //  },
		    
		});
		$(".uxProTip"+$clickId+" .poraltbox1_next").click(function(){
		    poraltbox1cont.slideNext();
		});
		$(".uxProTip"+$clickId+" .poraltbox1_prev").click(function(){
		    poraltbox1cont.slidePrev();
		});
		$(".uxProTip"+$clickId+" .poraltbox1_nav .swiper-slide").click(function(){
		  //  poraltbox1cont.slideToLoop(Number($(this).attr("data-swiper-slide-index")));
		    poraltbox1cont.slideTo($(this).index());
		});
		kai1=false;
	}
  
		// poraltbox1cont.slideToLoop(1);
});
$(".poraltbox1 .bag,.poraltbox1 .close").click(function(){
    $(".poraltbox1").fadeOut();
    $('body').css('overflow','initial');
});


$(".poraltbox1_nav").each(function(){
    var len = $(this).find(".swiper-slide").length;
    if(len>5){
        // $(this).parents(".poraltbox1").find(".poraltbox1_next,.poraltbox1_prev").hide();
        $(this).parents(".poraltbox1").find(".poraltbox1_next,.poraltbox1_prev").addClass('on');
    }
});

// 案例详情

var caseinfo2cont = new Swiper(".caseinfo2_cont",{
    speed:900,
    navigation: {
        nextEl: '.caseinfo2_next',
        prevEl: '.caseinfo2_prev',
    },
    breakpoints: { 
        0: {  //当屏幕宽度大于等于320
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {  //当屏幕宽度大于等于768 
          slidesPerView: 3,
        },
      }
});

/* 定制 */

$(".customisebox-sec2 .cont .gt .fz_jut .item .list .li").click(function(){
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
    if($(this).hasClass("on")){
        $(this).parents(".item").next().addClass("active");
    } else if($(this).parents(".item.on").length==0 && $(this).parents(".item").hasClass("typeimg")!=true){
        $(this).parents(".item").next().find(".li").removeClass("on");
        $(this).parents(".item").removeClass("active");
        $(this).parents(".item").next().removeClass("active");
    }else{
        $(this).parents(".item").next().removeClass("active");
        $(this).parents(".item").next().find(".li").removeClass("on");
    }
    if($(this).parents(".fz_jut").find(".item").length==$(this).parents(".fz_jut").find(".item .li.on").length){
        $(this).parents(".fz_jut").find(".fz_but").addClass("active");
    }else{
        $(this).parents(".fz_jut").find(".fz_but").removeClass("active");
    }
});
$(".customisebox-sec2 .cont .gt .fz_jut .item.typeimg .list .li").click(function(){
    $(".customisebox-sec2 .cont .lt .img img").attr("src",$(this).data("src")); 
});

$(".customisebox-sec3 .fz_gt .close").click(function(){
    $(this).parents(".customisebox-sec3").removeClass("active");
});

$(".customisebox-sec3 .fz_gt .nei .fz_jut .item .list .li").click(function(){
    
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
    if($(this).hasClass("on")){
        $(this).parents(".item").addClass("active").siblings().addClass("on1");
				$(this).parents(".fz_jut").find(".fz_but").addClass("active");
    } 
		if($(this).parents(".item").find(".li.on").length==0){
			$(this).parents(".item").removeClass("active").siblings().removeClass("on1");
			$(this).parents(".fz_jut").find(".fz_but").removeClass("active");
		}
    
});

$(".customisebox-sec3 .fz_cont .fz_zhong .fz_title").click(function(){
    $(this).parent().toggleClass("on"); /* .find(".fz_meter").stop().slideToggle();*/
});

$(".customisebox-sec3 .fz_cont .fz_zhong .fz_meter .close").click(function(){
    $(this).parents(".fz_zhong").removeClass("on"); /* .find(".fz_meter").stop().slideUp();*/
});

$(".customisebox-sec3 .fz_img .dian").click(function(){
    $(".customisebox-sec3").addClass("active");
});

if($(window).width()>767){
    window.onload=function(){
        $(".hm-sec1,.x-contact1").height($(window).height()-$(".fotbox-sec1").outerHeight());
    }
}

// Cookie
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toGMTString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i].trim();
//         if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
//     }
//     return "";
// }

// var tyys = getCookie("tyys");
// 		if (tyys != "") {
// 				$(".ckiebox").fadeOut();
// 		} else {
// 	        $(".ckiebox").fadeIn();
// 	    }
		
// 		$(".ckiebox .container .but").click(function() {
// 		    $(".ckiebox").fadeOut();
// 				setCookie("tyys", 1);
// 		});

// 搜索框默认显示光标
// $('.hadbox-sec1 .container .gt .search input').focus();
// $('.search-other .ckbox .a1').focus();



$(document).ready(function(){
    $(".fotbox-sec3 .container .cont .gt .z-name").click(function(){
      $(".fotbox-sec3 .container .cont .gt .z-namebox").slideToggle();
      $(".fotbox-sec3 .container .cont .gt .z-name img").toggleClass("blue999");
    });
  });