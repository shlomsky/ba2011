$(document).ready(function() {
  //fixed menu
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    var x = $('header').height();
    if (y >= x) {
      $('menu').addClass('sticky');
      $('header').addClass('sticky');
    } else {
      $('menu').removeClass('sticky');
      $('header').removeClass('sticky');
    }
  });
	
	$("#main.work a.top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  
  $('.section a').click(function(){
    var thisBlock = $(this).parents('.section');
    andrich(thisBlock);
    return false;
  });

});

//lightbox
function andrich(thisBlock) {
  
  $('.lightbox').fadeToggle("fast");
  thisBlock.find('.lightbox_wrapper').fadeToggle("slow");
  $('body').css('overflow', 'hidden');

  //show images
  $('.lightbox_wrapper:visible img:eq(0)').addClass('center');
  $('.lightbox_wrapper:visible img:eq(1)').addClass('right');
  lightboxPos(thisBlock);

  $('.lightbox_wrapper:visible img.right').live('click', function(){
    $('.lightbox_wrapper:visible img').removeAttr('class');
    $(this).addClass('center');
    $(this).prev('img').addClass('left');
    $(this).next('img').addClass('right');
    lightboxPos(thisBlock);
  });

  $('.lightbox_wrapper:visible img.left').live('click', function(){
    $('.lightbox_wrapper:visible img').removeAttr('class');
    $(this).addClass('center');
    $(this).prev('img').addClass('left');
    $(this).next('img').addClass('right');
    lightboxPos(thisBlock);
  });

  $('.lightbox_wrapper:visible img').live('click', function(){
    stopPropogation();
  });
  
  $(document).one('click', function(){
    $('.lightbox_wrapper:visible img').removeAttr('class');
    $('.lightbox_wrapper:visible').fadeToggle("fast");
    $('.lightbox').fadeToggle("fast");
    $('body').css('overflow-y', '');
  });
  
  $(window).resize(function(){
    lightboxPos(thisBlock);
  });
  
};

function lightboxPos(thisBlock){
  width = $(window).width();
  height = $(window).height();
  
  //image sizes
  $('.lightbox_wrapper:visible img').each(function(){
    $(this).css('height', '');
    $(this).css('width', '');
    var th = $(this).height();
    var tw = $(this).width();
    if (tw > th) {
      if (tw < (width*0.7)) {
        var x = tw;
      } else {
        var x = width * 0.7;
      }
      if (th > height) {
        if (tw > width) {
          var x = width * 0.7;
          $(this).css('width', x);
        } else {
          var y = height * 0.8;
          $(this).css('height', y);
        }
      } else {
        $(this).css('width', x);
      }
    } else {
      if (th < (height*0.8)) {
        var y = th;
      } else {
        var y = height * 0.8;
      }
      if (tw > width){
        if (th > height) {
          var y = height * 0.8;
          $(this).css('height', y);
        } else {
          var x = width * 0.7;
          $(this).css('width', x);
        }
      } else {
        $(this).css('height', y); 
      }
    }
    $(this).css('height', y);
  });
  
  //center image
 $('.lightbox_wrapper:visible img.center').each(function(){
    $(this).css('right', '');
    $(this).css('left', '');
    var thisW = $(this).width();
    var thisH = $(this).height();
    var xOffset = (width - thisW)/2;
    var yOffset = (height - thisH)/2;
    $(this).css('left', xOffset);
    $(this).css('top', yOffset);
  });
  
  //right image
 $('.lightbox_wrapper:visible img.right').each(function(){
    $(this).css('right', '');
    $(this).css('left', '');
    var thisW = $(this).width();
    var thisH = $(this).height();
    var xOffset = -(thisW*0.85);
    var yOffset = (height - thisH)/2;
    $(this).css('right', xOffset);
    $(this).css('top', yOffset);
  });
  
  //left image
  $('.lightbox_wrapper:visible img.left').each(function(){
    $(this).css('right', '');
    $(this).css('left', '');
    var thisW = $(this).width();
    var thisH = $(this).height();
    var xOffset = -(thisW*0.85);
    var yOffset = (height - thisH)/2;
    $(this).css('left', xOffset);
    $(this).css('top', yOffset);
  });
  return false;
};