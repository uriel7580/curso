jQuery(document).ready(function($){if($('body').hasClass('pagelayout-login'))
{$('#login').append($('.potentialidps'))}
$('.potentialidp a').each(function(){var linkTitle=$(this).attr('title');$(this).attr('class','');$(this).addClass('btn btn-'+linkTitle.toLowerCase())});var use_cookie_sidebars=document.cookie.indexOf('mb2nl_sidebars')<0;var use_cookie_sidebars2=document.cookie.indexOf('mb2nl_sidebars2')<0;var sidebarBtn=$('.theme-hide-sidebar');var sidebarBtnShowText=sidebarBtn.data('showtext');var sidebarBtnHideText=sidebarBtn.data('hidetext');if(!use_cookie_sidebars&&!$('body').hasClass('editing'))
{$('body').addClass('hide-sidebars');sidebarBtn.text(sidebarBtnShowText)}
if(!use_cookie_sidebars2||$('body').hasClass('editing'))
{$('body').removeClass('hide-sidebars');sidebarBtn.text(sidebarBtnHideText)}
sidebarBtn.click(function(e){if(!$('body').hasClass('editing'))
{if($(this).hasClass('mode2'))
{setCookie('mb2nl_sidebars',1,0);if($('body').hasClass('hide-sidebars'))
{setCookie('mb2nl_sidebars2',1,3);$('body').removeClass('hide-sidebars');$(this).text(sidebarBtnHideText)}
else{$(this).text(sidebarBtnShowText);$('body').addClass('hide-sidebars');setCookie('mb2nl_sidebars2',1,0)}}
else{setCookie('mb2nl_sidebars2',1,0);if($('body').hasClass('hide-sidebars'))
{setCookie('mb2nl_sidebars',1,0);$('body').removeClass('hide-sidebars');$(this).text(sidebarBtnHideText)}
else{$(this).text(sidebarBtnShowText);$('body').addClass('hide-sidebars');setCookie('mb2nl_sidebars',1,3)}}}
e.preventDefault()});function setCookie(name,value,days)
{if(days>0)
{var data=new Date();data.setTime(data.getTime()+(days*24*60*60*1000));var expires='; expires='+data.toGMTString()}else{var expires='; expires=Thu, 01 Jan 1970 00:00:01 GMT'}
document.cookie=name+'='+value+expires+'; path=/'}
$('.row-fluid').each(function(){$(this).addClass('row');var colDiv=$(this).find('>div');var i=0;colDiv.each(function(){for(i=0;i<=12;i++)
{if(colDiv.hasClass('span'+i))
{colDiv.removeClass('span'+i);colDiv.addClass('col-sm-'+i)}}})});$('.theme-slider').each(function(){slider=$(this);theme_slider(slider)});$(document).on('click','.moreinfo',function(e){var el=$(this);setTimeout(function(){var parentDiv=el.parent().parent();var courseSlider=parentDiv.find('.course-slider');if(courseSlider.length>0)
{theme_slider(courseSlider)}},700)});function theme_slider(slider)
{isItems=slider.data('items');isMargin=slider.data('margin');isLoop=slider.data('loop')==0?!1:!0;isNav=slider.data('nav')==0?!1:!0;isDots=slider.data('dots')==0?!1:!0;isAutoplay=slider.data('autoplay')==0?!1:!0;isPauseTime=slider.data('pausetime');isAnimTime=slider.data('animtime');var is2res=isItems>2?2:isItems;var is3res=isItems>3?3:isItems;var is4res=isItems>5?5:isItems;isRes={0:{items:1},600:{items:is2res},780:{items:is3res},1000:{items:is4res}};slider.owlCarousel({items:isItems,margin:isMargin,loop:isLoop,nav:isNav,dots:isDots,autoplay:isAutoplay,responsive:isRes,autoplayHoverPause:!0,autoplayTimeout:isPauseTime,smartSpeed:isAnimTime,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']})}
var scrollLink=$('.theme-scrolltt');var scrollSpeed=scrollLink.data('scrollspeed');$(window).on('scroll',function(){if($(this).scrollTop()>500)
{scrollLink.addClass('active')}
else{scrollLink.removeClass('active')}});scrollLink.click(function(e){e.preventDefault();$('html, body').stop().animate({scrollTop:0},scrollSpeed)});if($('body').hasClass('path-admin-setting'))
{$('.mb2tmpl-acc-title').each(function(){var heading=$(this);heading.click(function(e){$(this).toggleClass('active');$(this).parent().find('> div').slideToggle(150)})})}
$('table').wrap('<div class="theme-table-wrap"></div>');$('.generaltable, .forumheaderlist, table.userenrolment').addClass('table table-striped');$('table.collection').addClass('table table-bordered');$('table.preference-table').addClass('table table-bordered');$('table.rolecap').addClass('table table-bordered');$('#categoryquestions').addClass('table table-striped');theme_mb2nl_table_wrap_cls();$(window).on('resize',function(){theme_mb2nl_table_wrap_cls()});function theme_mb2nl_table_wrap_cls()
{$('.theme-table-wrap').each(function(){var table_el=$(this).find('>table');if(table_el.width()>$(this).width())
{$(this).addClass('wider')}
else{$(this).removeClass('wider')}})}
$('.embed-video-bg').each(function(){var imageEl=$(this);var clickEl=imageEl.parent().find('>i');clickEl.on('click',function(e){var video=imageEl.parent().find('iframe');video.attr('src',imageEl.data('videourl'));$(this).fadeOut(350);imageEl.fadeOut(350);e.preventDefault()})});$('.alert-error').addClass('alert-danger');$('.box.notifyproblem').addClass('alert');$('.box.notifyproblem').addClass('alert-danger');$('.box.notifyproblem').removeClass('notifyproblem');$('.nav-tabs .nav-link').each(function(){if($(this).hasClass('active'))
{$(this).parent().addClass('active')}});$('.block-region').each(function(){var regionName='<span class="region-name">'+$(this).data('blockregion')+'</span>';if($('body').hasClass('editing'))
{$(this).append(regionName)}});$('.theme-ddmenu').each(function(){var menuList=$(this);var animType=menuList.data('animtype');var animSpeed=menuList.data('animspeed');var mobileArr=menuList.find('.mobile-arrow');function waitForSuperfish(){if(typeof menuList.superfish!=='function')
{setTimeout(waitForSuperfish,100);return!1}
return!0}
var is_superfish=waitForSuperfish();if(is_superfish)
{menuList.superfish({popUpSelector:'ul',hoverClass:'mb2ctm-hover',animation:animType==2?{height:'show'}:{opacity:'show'},speed:animSpeed,speedOut:'fast',cssArrows:!1})}
menuOnHover(menuList);$(window).on('resize',function(){menuOnHover(menuList)});mobileArr.click(function(e){e.preventDefault();$(this).parent().siblings('ul').slideToggle(250);$(this).toggleClass('active')});function menuOnHover(list){var w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);if(w<=768)
{list.removeClass('sf-js-enabled');list.removeClass('desk-menu');list.addClass('mobile-menu')}
else{list.addClass('sf-js-enabled');list.removeClass('mobile-menu');list.addClass('desk-menu');list.find('.mobile-arrow').removeClass('active');list.find('.mobile-arrow').parent().siblings('ul').hide()}}});$(document).on('click','.show-menu',function(e){e.preventDefault();var menuList=$(this).parent().parent().find('.theme-ddmenu');menuList.slideToggle(250)});var clonedUserName=$('.theme-loginform').find('.usertext');var userAvatar=$('.theme-loginform').find('.welcome_userpicture')
var userLink=userAvatar.parent();userLink.append(clonedUserName);userLink.click(function(e){e.preventDefault()});setTimeout(function(){makeFixedNavigation()},10);$(window).scroll(function(){makeFixedNavigation()});function makeFixedNavigation()
{var win=$(window);var offsetEl=$('.sticky-nav-element-offset');if(offsetEl.length!=0&&$('body').hasClass('sticky-nav'))
{var fixedEl=$('#main-navigation');var fixedElWrap=fixedEl.parent();var elOffset=offsetEl.offset().top;var fixElHeight=fixedEl.outerHeight(!0);if(win.scrollTop()>elOffset)
{fixedEl.addClass('sticky-nav-element');offsetEl.css({'height':fixElHeight})}
else{fixedEl.removeClass('sticky-nav-element');offsetEl.css({'height':0})}}}
$('input.mb2color').each(function(){$(this).spectrum({showInput:!0,showButtons:!1,preferredFormat:'rgb',allowEmpty:!0,color:'',showAlpha:!0})});var iconNavHeight=$('#theme-iconnav').height();$('#theme-iconnav').css({'margin-top':Math.ceil((iconNavHeight/2)*-1)});$('#theme-iconnav li').each(function(){var linkEl=$(this).find('a');var textEl=$(this).find('span.iconnavtext');var isRtl=$('body').hasClass('dir-rtl');linkEl.hover(function(){if(isRtl)
{textEl.stop().animate({'left':'100%'},300)}
else{textEl.stop().animate({'right':'100%'},300)}},function(){if(isRtl)
{textEl.stop().animate({'left':-500},150)}
else{textEl.stop().animate({'right':-500},150)}})});setOuterHeight();$(window).on('resize',function(){setOuterHeight()});function setOuterHeight()
{$('#page-outer').css({'min-height':$(window).height()})}
$('.header-tools > a.header-tools-link').click(function(e){e.preventDefault();if($(this).hasClass('tool-links'))
{$('.theme-loginform').hide();$('.theme-searchform').hide();$('.theme-links').show();$('.tool-search').removeClass('active');$('.tool-login').removeClass('active')}
else if($(this).hasClass('tool-login'))
{$('.theme-loginform').show();$('.theme-searchform').hide();$('.theme-links').hide();$('.tool-links').removeClass('active');$('.tool-search').removeClass('active')}
else{$('.theme-loginform').hide();$('.theme-searchform').show();$('.theme-links').hide();$('.tool-links').removeClass('active');$('.tool-login').removeClass('active')}
panelOpen();var panel=$('.sliding-panel');if(panel.hasClass('open')&&$(this).hasClass('active'))
{panelClose()}
if(panel.hasClass('open'))
{$(this).addClass('active')}});var oldW=$(window).width();panelMarginTop();$(window).on('resize',function(){if(oldW!=$(window).width())
{panelClose();panelMarginTop()}
delete oldW});function panelMarginTop()
{var panel=$('.sliding-panel');var buttons=panel.find('btn');panel.css({'margin-top':Math.ceil((panel.height()+1)*-1)})}
function panelOpen()
{var panel=$('.sliding-panel');if(panel.hasClass('closed'))
{panelMarginTop();panel.stop().animate({'margin-top':0},350);panel.removeClass('closed');panel.addClass('open')}}
function panelClose()
{var panel=$('.sliding-panel');if(panel.hasClass('open'))
{panel.stop().animate({'margin-top':Math.ceil(($('.sliding-panel').height()+1)*-1)},350);panel.removeClass('open');panel.addClass('closed');$('.header-tools a').removeClass('active')}}
function name_of_init_function(arr)
{console.log(arr)}});(function($){$(window).on('load',function(){var loadingDiv=$('.loading-scr');setTimeout(function(){loadingDiv.fadeOut(150)},loadingDiv.data('hideafter'))})})(jQuery)