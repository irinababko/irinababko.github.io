(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),f=0;if(d.target)f=d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b=a.css("display");"inline-block"!==b&&"inline-flex"!==b&&(b="block");b={display:b};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),a.css(d.property,f-b+"px"))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);function isVisible(elem){var coords=elem.getBoundingClientRect();var windowHeight=document.documentElement.clientHeight;var topVisible=coords.top>0&&coords.top<windowHeight;var bottomVisible=coords.bottom<windowHeight&&coords.bottom>0;return topVisible||bottomVisible;}
function showVisible(){var imgs=document.getElementsByTagName('img');for(var i=0;i<imgs.length;i++){var img=imgs[i];var realsrc=img.getAttribute('realsrc');if(!realsrc)continue;if(isVisible(img)){img.src=realsrc;img.setAttribute('realsrc','');}}}
window.onscroll=showVisible;showVisible();function sel_dost(id,city_name){var iddost=id;$(".text_dost li").slideUp("fast");$(".text_dost li").removeClass('current');$('.dost_'+iddost).slideDown("fast");$('.dost_'+iddost).addClass('current');$.ajax({url:"index_ajax3.php",dataType:"html",type:"GET",data:"q=dostavka.php&city="+iddost+"&city_name="+city_name,success:function(msg){$(".city_box li a").removeClass('current');$(".sel_li_"+iddost).addClass('current');$('.city_box').fadeToggle("fast");$(".sel_dost span").html(msg);}});return false;};function sel_city(cname){$(".text_dost li").removeClass('current');$.ajax({url:"index_ajax3.php",dataType:"html",type:"GET",data:"q=dostavka.php&city_name="+cname,success:function(msg){$(".sel_dost span").html(msg);$(".city_box li a").removeClass('current');$('.city_box').fadeToggle("fast");$(".text_dost .dost_777").slideDown("fast");$(".text_dost .dost_777").addClass('current');}});return false;};if($(window).width()>767){$(window).load(function(){$('.thumbnails .thumbnail').matchHeight();$('.shop-products .thumbnails .thumbnail').matchHeight();});}
$(function(){$("img.lazy").lazyload({effect:"fadeIn"});});function DelClear(id){var idGood=id;$("#ajaxCompare").slideUp("fast");$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/ajaxCompare.php&action=del&keywords="+idGood,success:function(msg){$("#ajaxCompare").html(msg);}})
    $('.ch'+id).show();$("#ajaxCompare").slideDown("fast");return false;}
function ComClear(){$("#ajaxCompare").slideUp("fast");$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/ajaxCompare.php&action=clr",success:function(msg){$("#ajaxCompare").html(msg);}})
    for(var i=1;i<30;i++){if($('.cs'+i)){$('.cs'+i).show();}}
    return false;}
function addCompare(id){var comclass=".ch"+id;$(comclass).hide();var comparebox=$('.compare_top'),addtocart=$(comclass),prodimag=$('.img'+id),prodimag_idle=true;if(addtocart.length>0&&prodimag.length>0){$(function(){if(!prodimag_idle){return false;}
    prodimag_idle=false;var p=prodimag.offset();$('body').append('<img src="'+prodimag.attr('src')+'" style="left:'+p.left+'px;top:'+p.top+'px;" id="flyimgcart" />');p=comparebox.offset();p.left+=194;p.top+=Math.round(comparebox.outerHeight()/2);$('body > #flyimgcart:first').animate({'width':'0px','opacity':'0','left':p.left+'px','top':p.top+'px'},600,function(){$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/ajaxCompare.php&action=add&keywords="+id,success:function(msg){$("#ajaxCompare").html(msg);}})
        $('#flyimgcart').remove();prodimag_idle=true;});});}
    return false;}
$(function(){$('.addToCompare').click(function(){var id=$(this).attr('goodid');$(this).hide();var comparebox=$('.compare_top'),addtocart=$('.addToCompare'),prodimag=$('.img'+id),prodimag_idle=true;if(addtocart.length>0&&prodimag.length>0){$(function(){if(!prodimag_idle){return false;}
    prodimag_idle=false;var p=prodimag.offset();$('body').append('<img src="'+prodimag.attr('src')+'" style="left:'+p.left+'px;top:'+p.top+'px;" id="flyimgcart" />');p=comparebox.offset();p.left+=194;p.top+=Math.round(comparebox.outerHeight()/2);$('body > #flyimgcart:first').animate({'width':'0px','opacity':'0','left':p.left+'px','top':p.top+'px'},600,function(){$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/ajaxCompare.php&action=add&keywords="+id,success:function(msg){$("#ajaxCompare").html(msg);}})
        $('#flyimgcart').remove();prodimag_idle=true;});});}
    return false;});});function WishDel(id){var idGood=id;$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/wishlist.php&action=del&keywords="+idGood,success:function(msg){$("#wishlist_top").html(msg);}})
    $('.wl'+id).show();return false;}
function WishClear(){$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/wishlist.php&action=clr",success:function(msg){$("#wishlist_top").html(msg);}})
    for(var i=1;i<30;i++){if($('.cs'+i)){$('.cs'+i).show();}}
    return false;}
function more_product(){var page=Number($('.b-viewe-more .ajpage').val());var maxpage=Number($('.b-viewe-more .ajmaxpage').val());var href=document.location.href;href=encodeURI(href.replace(/~/g,'%7E').replace(/%20/g,' '));$('.b-viewe-more .btn-more').fadeIn("fast");$('.re-pagination').slideUp('fast');if(page<maxpage){$('.b-viewe-more #reload').fadeIn("fast");arr_href=href.split('?');get_href=arr_href[1];page++;if(href.indexOf('page')+1){var re=/page=\d+/i;get_href=get_href.replace(re,'page='+page);}else{if(get_href){get_href=get_href+'&page='+page;}
else{get_href='page='+page;}}
    $.ajax({url:arr_href[0],dataType:"html",type:"GET",data:get_href+'&ajload=true',success:function(msg){$('.b-viewe-more .ajpage').val(page);$(".slider-prod").append(msg);$('.b-viewe-more #reload').fadeOut("fast");if(page>=maxpage)$('.b-viewe-more').slideUp('fast');$('.b-viewe-more .btn-more').fadeIn("fast");return false;}});};return false;}
$(function(){$('.addToWishlist').click(function(){var id=$(this).attr('goodid');$(this).hide();var comparebox=$('.wishlist_top'),addtocart=$('#wishlist_top'),prodimag=$('.img'+id),prodimag_idle=true;if(addtocart.length>0&&prodimag.length>0){$(function(){if(!prodimag_idle){return false;}
    prodimag_idle=false;var p=prodimag.offset();$('body').append('<img src="'+prodimag.attr('src')+'" style="left:'+p.left+'px;top:'+p.top+'px;" id="flyimgcart" />');p=comparebox.offset();p.left+=194;p.top+=Math.round(comparebox.outerHeight()/2);$('body > #flyimgcart:first').animate({'width':'0px','opacity':'0','left':p.left+'px','top':p.top+'px'},600,function(){$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/wishlist.php&action=add&keywords="+id,success:function(msg){$("#wishlist_top").html(msg);}})
        $('#flyimgcart').remove();prodimag_idle=true;});});}
    return false;});});function addWishlist(id){var comclass=".wl"+id;$(comclass).hide();var comparebox=$('.wishlist_top'),addtocart=$('#wishlist_top'),prodimag=$('.img'+id),prodimag_idle=true;if(addtocart.length>0&&prodimag.length>0){$(function(){if(!prodimag_idle){return false;}
    prodimag_idle=false;var p=prodimag.offset();$('body').append('<img src="'+prodimag.attr('src')+'" style="left:'+p.left+'px;top:'+p.top+'px;" id="flyimgcart" />');p=comparebox.offset();p.left+=194;p.top+=Math.round(comparebox.outerHeight()/2);$('body > #flyimgcart:first').animate({'width':'0px','opacity':'0','left':p.left+'px','top':p.top+'px'},600,function(){$.ajax({url:"index_ajax1.php",dataType:"html",type:"POST",data:"q=includes/modules/ajax/wishlist.php&action=add&keywords="+id,success:function(msg){$("#wishlist_top").html(msg);}})
        $('#flyimgcart').remove();prodimag_idle=true;});});}
    return false;}
function cartUpdate(){var test1="#cart_quantity input";var forma=$(test1);var data='';forma.each(function(n,element){if(element.type=="radio"||element.type=="checkbox"){if(element.checked)
    tmp=element.name+"="+element.value+"&";}else{tmp=element.name+"="+element.value+"&";}
    if(tmp.length>3)data=data+tmp;});$('body').append('<img id="reload_cart" src="templates/palladium/images/477.png">').animate({opacity:'0.2'},500,function(){$.ajax({url:"shopping_cart.php?action=update_product&ajload=true",dataType:"html",data:data,type:"POST",success:function(msg){$(".cart_inner_ajax .in-total2").html(msg);}});$('body').animate({'opacity':'1'},500).find('#reload_cart').remove();});return false;}
function cartReload(act,id,qty){var url_post="shopping_cart_popup.php?ajload=true&action=update_product";if(act=='del'){data_post=({'cart_delete[]':id,'products_id[]':id});}
    if(act=='plus'){qty++;data_post=({'products_id[]':id,'cart_quantity[]':qty});}
    if(act=='minus'){qty--;data_post=({'products_id[]':id,'cart_quantity[]':qty});}
    $('body').append('<img id="reload_cart" src="templates/palladium/images/477.png">').animate({opacity:'0.2'},500,function(){$.ajax({url:url_post,dataType:"html",data:data_post,type:"POST",success:function(msg){$(".cart_inner_ajax").html(msg);}});$('body').animate({'opacity':'1'},500).find('#reload_cart').remove();});return false;}
function cartBack(){var str=location.href;if(str.indexOf("shopping_cart.php")>0){history.back(1);}else{$.colorbox.close();}}
(function($){$.fn.UItoTop=function(options){var defaults={text:'',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
    if(sd>settings.min)
        $(containerIDhash).fadeIn(settings.inDelay);else
        $(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);$(function(){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){if($(window).width()>767){var menu=$('.header-top'),pos=menu.offset();$(window).scroll(function(){if($(this).scrollTop()>pos.top+menu.height()&&menu.hasClass('default')){$(".header-top").removeClass('default').addClass('fixed');}else if($(this).scrollTop()<=pos.top&&menu.hasClass('fixed')){$(".header-top").removeClass('fixed').addClass('default');}});}}});function get_tab(tab){$('html,body').stop().animate({scrollTop:$('.product-tabs').offset().top},1000);$('.'+tab).click();return false;}
function filter_activ(block){block.toggleClass("active");}
function show_img_list(){$(this).find('.prod-small-pic li').each(function(){var bb=$(this).find('span');img=bb.attr("img_src");bb.html('<img src="'+img+'" />');});}
function changeCheck(el)
{var el=el,input=el.find("input").eq(0);if(!input.attr("checked")){el.css("background-position","left center");input.attr("checked",true);$("#cart_quantity").submit();}else{el.css("background-position","right center");input.attr("checked",false)}
    return false;}
function changeCheckStart(el)
{var el=el,input=el.find("input").eq(0);if(input.attr("checked")){el.css("background-position","left center");}
    return false;}
$(document).ready(function(){$("head").append('<link rel="stylesheet" type="text/css" href="/jscript/jquery/plugins/colorbox/colorbox.css" media="screen" />');$(".search_city").keyup(function(){var searchString=$(".search_city").val();$.ajax({url:"index_ajax3.php",dataType:"html",type:"POST",data:"q=novapochta/ajax_city.php&keywords="+searchString,success:function(msg){$("#ajaxQuickFindCity").html(msg);}});});$('.sel_dost').click(function(){$('.city_box').fadeToggle("fast");return false;});$(".status-link").click(function(){return false;});if($(window).width()>767){$(".lightbox").colorbox({opacity:1,width:"90%",height:"90%",maxWidth:"90%",innerWidth:"90%",previous:'<div class="owl-prev"></div>',next:'<div class="owl-next"></div>',title:function(){var title=$(this).attr('title');return '<span class="title-ban2 second fl-l">'+title+'</span>';}});}else{$(".lightbox").colorbox({opacity:1,width:"100%",maxWidth:"100%",previous:'<div class="owl-prev"></div>',next:'<div class="owl-next"></div>',title:function(){var title=$(this).attr('title');return '<span class="title-ban2 second fl-l">'+title+'</span>';}});}
    $(".iframe").colorbox({iframe:true,width:"30%",height:"80%",rel:false});$(".iframe_url").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:false,width:"30%",maxHeight:"80%",rel:false,href:url});return false;});$('.drop-menu > li > a').click(function(){var element=$(this).parent('li').find('.in-box');if(element){return false;}
    else{return true;}});$('.filter-mob').click(function(){$('.column.second > .col-left').toggleClass("show-filter").slideToggle("fast");return false;});$('.mention a').click(function(){var value_rev=$(this).find('b');var count=parseInt(value_rev.text().replace(/\D+/g,""));var rid=$(this).attr("rid");var action=$(this).attr('class');$.get('reviews_plmi.php',{"reviews_id":rid,"action":action},function(data){eval("arr_result="+data+";");if(arr_result['result']){count=count+1;value_rev.text('('+count+')');alert('Спасибо за отзыв!!');}else{alert('Можно только один раз !!!');}});return false;});$(".niceCheck").mousedown(function(){changeCheck($(this));});$(".niceCheck").each(function(){changeCheckStart($(this));});$('.client-btn').click(function(){$('.menu-top-small').slideToggle("fast");return false;});$('.tel-btn').click(function(){$('.header-main .d-t.mob-row .p-r.fl-l').slideToggle("fast");$('.menu-head.fl-l').slideToggle("fast");return false;});$('.menu-view').click(function(){$('.menu-head').toggleClass("show-tel");return false;});$(".show-all a").click(function(){$(".desk-info").css({'max-height':'none'});$(".desk-info .show-all").fadeOut("slow");return false;});$(".qphone").mask("(099) 999-99-99");$('.qbuy_send').submit(function(){var re=/^\([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;var sel_msg_box=$('.calc-message-box');var sel_msg_txt=$('.calc-message-box .calc-message-text');var s_phone=$('.qphone').val();var s_pid=$('.qproduct_id').val();var s_price=$('.qprice').val();var s_product=$('.qprod').val();var valid=re.test(s_phone);if(!valid){sel_msg_txt.html('<span class="error_phone">Номер телефона введен неправильно!</span>');sel_msg_box.show();}else{$.get('product_qbay1.php',{"phone":s_phone,"product_id":s_pid,"price":s_price,"prod":s_product},function(data){eval("arr_result="+data+";");if(arr_result['result']){sel_msg_txt.html('Спасибо, Ваша заявка успешно отправлена!');$(".qbuy_send").html('');sel_msg_box.show();ga('send','event','button','zakazati');}});return false;}
        return false;});$('.hover-item').hover(function(){$(this).find('.prod-small-pic li').each(function(){var bb=$(this).find('span');img=bb.attr("img_src");name=bb.attr("img_title");bb.html('<img src="'+img+'"  alt="'+name+'" title="'+name+'" />');});});$('.link-sort').click(function(){$('.list-drop').slideToggle("fast");return false;});$('.chosen-filter .t-a-c').click(function(){$(this).prev('.f_height').css({'height':'auto'});$(this).slideUp("fast");return false;});$('li a.link-ch').click(function(){$(this).parent("li").toggleClass("active");return false;});$('.has-down').click(function(){$('.in').css({'max-height':'none'}).addClass("do bg_hide").animate({height:"auto"},1500);$('.has-down').slideUp("fast");return false;});$('.search-cell').click(function(){$('.search_categories_id').slideToggle("fast");return false;});$('.title_tree .btn-more').click(function(){$('.inner_tree').slideToggle("fast");return false;});$('.search_categories_id a').click(function(){$('.search-cell span').html($(this).html());$('.search_hidden').html('<input type="hidden" name="inc_subcat" value="1" /><input type="hidden" name="categories_id" value="'+$(this).attr("data-cat")+'" id="cat_id" />');$('.search_categories_id').slideUp("fast");return false;});$(".kredit_show").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:false,width:"100%",height:"590",maxWidth:"970",rel:false,href:url});return false;});$(".mo_discount").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:true,width:"400",height:"380",maxWidth:"400",rel:false,href:url});return false;});$(".pcredit").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:true,width:"970",height:"720",maxWidth:"970",rel:false,href:url});return false;});$(".pcredit_pall").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:true,width:"770",height:"520",maxWidth:"770",rel:false,href:url});return false;});$(".pallcredit").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:true,width:"950",height:"520",rel:false,href:url});ga('send','event','button','rasrochkapall');return false;});$(".pcreditFF").click(function(){var url=$(this).attr("data-url");$.colorbox({iframe:false,width:"650",height:"530",maxWidth:"650",rel:false,href:url});return false;});$('.login_box').colorbox({iframe:false,width:"300",height:"360",maxWidth:"370",rel:false});$('.cart_ajax').colorbox({iframe:false,width:"800",maxWidth:"870",rel:false});$(".link-call").colorbox({iframe:false,width:"300",height:"250",maxWidth:"600",rel:false});$(".link-call-foter").colorbox({iframe:false,width:"300",height:"250",maxWidth:"600",rel:false});$(".inline").colorbox({inline:true,width:"300",rel:false});$(".map_foter").colorbox({iframe:true,width:"680",height:"600",rel:false});$(".ban-info .link-small").colorbox({iframe:true,width:"50%",height:"60%",rel:false});$(".mocity").colorbox({inline:true,maxWidth:"600",width:"90%"});$(".youtube").colorbox({iframe:true,innerWidth:640,innerHeight:390});$(".qbay").colorbox({iframe:true,width:"400",height:"400",rel:false});function doFooter(){if($(window).width()>767){$('#footer .widget-inner').slideDown("slow").removeClass("do");$('#footer .widget-title').removeClass("do");}else{$('#footer .widget-inner').slideUp("fast").addClass("do");$('#footer .widget-title').addClass("do");}}
    $(window).resize(function(){doFooter();});$(window).load(function(){doFooter();});$('#footer .widget-title').click(function(){$(this).next('.widget-inner.do').toggle("slow");});$('.shopping-cart .cart').hover(function(){$('.shopping-cart .cart-dropdown').show();},function(){$('.shopping-cart .cart-dropdown').hide();});$('.shopping-cart .cart-dropdown').bind({mouseenter:function(){$(this).show();},mouseleave:function(){$(this).hide();}});$('ul.icons.check a').click(function(){if($(this).closest('li').hasClass('on')){$(this).closest('li').removeClass('on');return false;}
    else{$(this).closest('li').addClass('on');return false;}});$("a[data-toggle=tooltip]").tooltip();(function(){var $menu=$('ul.drop-menu11'),optionsList='<option value="" selected>...</option>';$menu.find('li').each(function(){var $this=$(this),$anchor=$this.children('a'),depth=$this.parents('ul').length-1,indent='';if(depth){while(depth>0){indent+=' - ';depth--;}}
        optionsList+='<option value="'+$anchor.attr('href')+'">'+indent+' '+$anchor.text()+'</option>';});$('.category_block11').after('<div class="res-menu-wrap"><select class="res-menu">'+optionsList+'</select><div class="res-menu-title"></div></div>');$('.res-menu').on('change',function(){window.location=$(this).val();});var $fastomg=$(".mo_img .vr-list");$fastomg.find('img').each(function(){var $thisimg=$(this),$thisval=$thisimg.attr("data-original");$thisimg.attr("src",$thisval);});})();$(function(){$().UItoTop({easingType:'easeOutQuart'});});$('[placeholder]').focus(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');input.removeClass('placeholder');}}).blur(function(){var input=$(this);if(input.val()==''||input.val()==input.attr('placeholder')){input.addClass('placeholder');input.val(input.attr('placeholder'));}}).blur().parents('form').submit(function(){$(this).find('[placeholder]').each(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');}})});});function chat24WidgetRun(){window['cha'+'t2'+'4'+'ID']='23ee759655e61440989a4be31473ca52';window.domain='https://web.chats.novait.com.ua';var sc=document.createElement('script');sc.type='text/javascript';sc.async=true;sc.src=window.domain+'/js/widget/new/dist/widget.min.js';var c=document['getElement'+'sByTagNa'+'me']('script')[0];if(c)c['p'+'arent'+'Node']['inser'+'tB'+'efo'+'re'](sc,c);else
    document['docu'+'me'+'ntEle'+'m'+'ent']['f'+'i'+'r'+'s'+'tChi'+'ld']['appe'+'nd'+'C'+'hild'](sc);}
window.chat24WidgetCanRun=true;if(window.chat24WidgetCanRun){chat24WidgetRun();}
$(function(){$('.inp-check,.inp-radio,.newsletter,.input_extra input').styler();$('.chosen-filter .jq-radio').click(function(event){$(this).parents("#filter").submit();});if(window.getSelection)$('.content .block2').bind('copy',function()
{var selection=window.getSelection();var range=selection.getRangeAt(0);var magic_div=$('<div>').css({display:'block'});magic_div.append(range.cloneContents(),'<'+'p  style="position: absolute; left: -99999px;">Источник: <'+'a href="'+location.href+'">'+location.href+'</'+'a><br />&copy; Интернет магазин бытовой техники http://palladium.ua</'+'p>');$('body').append(magic_div);var cloned_range=range.cloneRange();selection.removeAllRanges();var new_range=document.createRange();new_range.selectNode(magic_div.get(0));selection.addRange(new_range);window.setTimeout(function()
{selection.removeAllRanges();selection.addRange(cloned_range);magic_div.remove();},0);});});