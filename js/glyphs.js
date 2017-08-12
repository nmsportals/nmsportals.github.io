$('document').ready(function() {

  var copyBtn = document.querySelector('#copybtn');
  copyBtn.addEventListener('click', function () {
    var copiedObj = document.querySelector('#gliphlink');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
  }, false);
<<<<<<< HEAD
  
  var copyBtn = document.querySelector('#copybtncode');
  copyBtn.addEventListener('click', function () {
    var copiedObj = document.querySelector('#gliphcode');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
  }, false);
=======
>>>>>>> origin/master


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
<<<<<<< HEAD
	var codevalue = $('#gliphcode').val();
=======
>>>>>>> origin/master
    var linkvalue = $('.linkglyphs').html();
    var url = window.location.href; 
    if (value.length < 12) {
      $('.clickedglyphs').html(value +glyph);
<<<<<<< HEAD
	  $('#gliphcode').val(codevalue +glyph);
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
	$('#gliphcode').val('');
=======
>>>>>>> origin/master
  });
  $('.clearglyphsurl').click(function(){
    $('.glyphs').val('');
    $('.result').html('');
  });
});