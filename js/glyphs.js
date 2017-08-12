$('document').ready(function() {

  var copyBtn = document.querySelector('#copybtn');
  copyBtn.addEventListener('click', function () {
    var copiedObj = document.querySelector('#gliphlink');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
  }, false);
  
  var copyBtn = document.querySelector('#copybtncode');
  copyBtn.addEventListener('click', function () {
    var copiedObj = document.querySelector('#gliphcode');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
  }, false);


  var url = location.hash;
  var type = url.split('#');
  var hash = '';
  //(score > 0 && score < 8){
  if (type.length > 1 && type.length < 12) {
    hash = type[1];
    var result = "";
    for (var i = 0, len = hash.length; i < len; i++) {
      result += '<i class="glyph-' + hash[i] + '"></i>';
    }
	$('.tabs-menu li:nth-of-type(1)').removeClass('current');
	$('.tabs-menu li:nth-of-type(2)').addClass('current');
	$('#tab-1').hide();
    $('#tab-2').show();
	
    $('.glyphs').val(hash);
    $(".result").html(result);

  } else {

  }
  $('.glyphs').keyup(function() {
    $(this).val().toUpperCase();
    var target = $(this).val().toUpperCase();
    target = target.split("");
    var result = "";
    for (var i = 0, len = target.length; i < len; i++) {
      result += '<i class="glyph-' + target[i] + '"></i>';
    }
    $(".result").html(result);
  });

  $('.glyphsblock i').click(function(){
    var glyph = $(this).attr('data-id');
    var value = $('.clickedglyphs').html();
	var codevalue = $('#gliphcode').val();
    var linkvalue = $('.linkglyphs').html();
    var url = window.location.href; 
    if (value.length < 12) {
      $('.clickedglyphs').html(value +glyph);
	  $('#gliphcode').val(codevalue +glyph);
      var linkglyphs = $('.clickedglyphs').html();
      $('#gliphlink').val(url +'#'+linkglyphs);
    } 
  });

  $(".deleteOne").click(function(){
    var value = $('.clickedglyphs').html();
    $('.clickedglyphs').html().slice(0, -1);
  });
  $('.clearglyphs').click(function(){
    $('.clickedglyphs').html('');
    $('#gliphlink').val('');
	$('#gliphcode').val('');
  });
  $('.clearglyphsurl').click(function(){
    $('.glyphs').val('');
    $('.result').html('');
  });
  $(".tabs-menu a").click(function(event) {
  event.preventDefault();
  $(this).parent().addClass("current");
  $(this).parent().siblings().removeClass("current");
  var tab = $(this).attr("href");
  $(".tab-content").not(tab).css("display", "none");
  $(tab).fadeIn();
});
});