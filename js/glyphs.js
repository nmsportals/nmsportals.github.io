$('document').ready(function() {


  var copyLink = document.querySelector('#copybtn');
  copyLink.addEventListener('click', function () {
    var copiedObj = document.querySelector('#glyphlink');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
    $('#copybtn').html('Copied!')
  }, false);

  var copyCode = document.querySelector('#copybtncode');
  copyCode.addEventListener('click', function () {
    var copiedObj = document.querySelector('#glyphcode');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
    $('#copybtncode').html('Copied!')
  }, false);

  var copyGaAddress = document.querySelector('#copygaaddress');
  copyGaAddress.addEventListener('click', function () {
    var copiedObj = document.querySelector('#galacticAddress');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
    $('#copygaaddress').html('Copied!')
  }, false);

  var copyGaAddressCode = document.querySelector('#copygaaddresscode');
  copyGaAddressCode.addEventListener('click', function () {
    var copiedObj = document.querySelector('#galacticAddressCode');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
    $('#copygaaddresscode').html('Copied!')
  }, false);
  
  var copyGaAddressLink = document.querySelector('#copygaaddressLink');
  copyGaAddressLink.addEventListener('click', function () {
    var copiedObj = document.querySelector('#gacoordstoglyphslink');
    // select the contents
    copiedObj.select();

    document.execCommand('copy'); // or 'cut'
    $('#copygaaddressLink').html('Copied!')
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
    $('.result').addClass('blackgd');

  }
  $('.glyphs').keyup(function(e) {
    var val =  $(this).val().toUpperCase().replace(/[^a-fA-F0-9]+/,"");
    $(this).val(val);
    console.log(".glyphs length: "+val.length);
    var target = val;
    target = target.split("");
    var result = "";
    for (var i = 0, len = target.length; i < len; i++) {
      result += '<i class="glyph-' + target[i] + '"></i>';
    }
    var linkToGacoords = $('.glyphs').val();
    console.log("linkToGacoords: "+linkToGacoords);
    if (val.length == 12) {
      var subst = '$1:$2:$3:$4:$5';
      var regex = /(\S{1})(\S{3})(\S{2})(\S{3})(\S{3})/g;
      console.log("linkglyphs:"+linkToGacoords);
      var resultcoords = linkToGacoords.replace(regex, subst);
      var [P, O, R, T, Al] = resultcoords.split(":");
      console.log(P, O, R, T, Al)

      Al = parseInt(Al, 16);
      console.log("HexToInt "+Al);
      Al = +Al +2048 -4097;
      Al = Math.abs(Al);
      console.log("Al Operation "+Al);
      Al = Al.toString(16).toUpperCase();
      console.log("AL Lenght: "+Al);
      if (Al.length == 3) {
        Al = ("0"+Al);
      }
      if (Al.length == 2) {
        Al = ("00"+Al);
      }
      if (Al.length == 1) {
        Al = ("000"+Al);
      }
      else {
        Al = Al;
      }
      console.log("Al value:"+Al);


      T = parseInt(T, 16);
      T = +T +2048 -4097;
      T = Math.abs(T);
      T = T.toString(16).toUpperCase();
      console.log("T length:"+T.length);
      if (T.length == 3) {
        T = ("0"+T);
      }
      if (T.length == 2) {
        T = ("00"+T);
      }
      if (T.length == 1) {
        T = ("000"+T);
      }
      else {
        T = T;
      }
      console.log("T value:"+T);


      R = parseInt(R, 16);
      R = +R +128 -257;
      R = Math.abs(R);
      console.log("R operation: "+R);
      R = R.toString(16).toUpperCase();
      console.log("R length now:"+R.length);
      if (R.length == 3) {
        R = ("0"+R);
      }
      if (R.length == 2) {
        R = ("00"+R);
      }
      if (R.length == 1) {
        R = ("000"+R);
      }
      else {
        R = R;
      }
      console.log("R value:"+R);


      if (O.length < 4 && O.length > 3) {
        O = ("00"+O);
      } else {
        O = ("0"+O);
      }
      console.log("O value:"+O);
      console.log("O length:"+O.length);

      var ValidateO = parseInt(O, 16);
      console.log("ValidateO value:"+ValidateO);
      if ( ValidateO > 767) {
        console.log("O valueErrorCode:"+O);
        $('.portalError').fadeIn({queue: false, duration: '300'});
      } else {
        console.log("O NoErrorCode:"+O);
        $('.portalError').delay(1500).fadeOut(300);
        var galacticAddress = (Al+":"+R+":"+T+":"+O);

        $('.galacticAddressCode').html(galacticAddress);
        $('#galacticAddressCode').val(galacticAddress);
        $('.galacticAddressCodeBox').addClass('blackgd');
        $('.gacodeTitleblock').show();
        $('.gacodeTitleCode').show();
        $('.gaTitleCode').show();
        $('#copygaaddresscode').show();
        console.log(galacticAddress);
      }
    }
    else {
      $('.portalError').fadeOut(300);
      $('.galacticAddressCode').html('');
      $('#galacticAddressCode').val('');
      $('.galacticAddressCodeBox').removeClass('blackgd');
      $('.gacodeTitleblock').hide();
      $('.gacodeTitleCode').hide();
      $('.gaTitleCode').hide();
      $('#copygaaddresscode').hide();
    }
    $(".result").html(result);
    if (val.length > 0) {
      $('.clearglyphsurl').show();
      $('.result').addClass('blackgd');
    } else {
      $('.clearglyphsurl').hide();
      $('.gacodeTitleCode').hide();
      $('.result').removeClass('blackgd');
    }
  });

  $('.glyphsblock i').click(function(){
    var glyph = $(this).attr('data-id');
    var value = $('.clickedglyphs').html();
    console.log("clickedglyphs lenght: "+value.length)
    var codevalue = $('#glyphcode').val();
    var linkvalue = $('.linkglyphs').html();
    var icon = ('<i class="glyph-'+glyph+'">');
    var url = ('http://' + window.location.hostname + '/');
    if (value.length < 12) {
      $('.clickedglyphs').html(value +glyph);
      $('#glyphcode').val(codevalue +glyph);
      $('.glyphscheck').append(icon);
      var linkglyphs = $('.clickedglyphs').html();

      if (value.length >= 0) {
        $('.deleteglyphs').show();
        $('.clearglyphs').show();
        $('.clickedglyphs').addClass('blackgd');
      } else {
        $('.clearglyphs').hide();
        $('.deleteglyphs').hide();
        $('.clickedglyphs').removeClass('blackgd');
      }

      if (value.length == 11) {
        $(this).parent().find('.clicked').removeClass('clicked');
        var subst = '$1:$2:$3:$4:$5';
        var regex = /(\S{1})(\S{3})(\S{2})(\S{3})(\S{3})/g;
        console.log("linkglyphs:"+linkglyphs);
        var result = linkglyphs.replace(regex, subst);
        var [P, O, R, T, Al] = result.split(":");
        Al = parseInt(Al, 16);
        console.log("HexToInt "+Al);
        Al = +Al +2048 -4097;
        Al = Math.abs(Al);
        console.log("Al Operation "+Al);
        Al = Al.toString(16).toUpperCase();
        console.log("AL Lenght: "+Al);
        if (Al.length == 3) {
          Al = ("0"+Al);
        }
        if (Al.length == 2) {
          Al = ("00"+Al);
        }
        else {
          Al = Al;
        }
        console.log("Al value:"+Al);

        T = parseInt(T, 16);
        T = +T +2048 -4097;
        T = Math.abs(T);
        T = T.toString(16).toUpperCase();
        if (T.length == 3) {
          T = ("0"+T);
        }
        if (T.length == 2) {
          T = ("00"+T);
        }
        else {
          T = T;
        }
        console.log("T value:"+T);

        R = parseInt(R, 16);
        R = +R +128 -257;
        R = Math.abs(R);
        console.log("R operation: "+R);
        R = R.toString(16).toUpperCase();
        if (R.length < 4 && R.length > 3) {
          R = ("0"+R);
        } else {
          R = ("00"+R);
        }
        console.log("R value:"+R);
        if (O.length < 4 && O.length > 3) {
          O = ("00"+O);
        } else {
          O = ("0"+O);
        }
        console.log("O value:"+O);
        var ValidateO = parseInt(O, 16);
        console.log("ValidateO value:"+ValidateO);
        if ( ValidateO > 767) {
          console.log("O valueError:"+O);
          $('.glyphsError').fadeIn({queue: false, duration: '300'});
        } else {
          $('.glyphsError').delay(1500).fadeOut(300);
          var galacticAddress = (Al+":"+R+":"+T+":"+O);
          $('.galacticAddressBox').addClass('blackgd');
          $('.galacticAddress').show();
          $('.gaTitle').show();
          $('.galacticAddress').html(galacticAddress);
          $('#galacticAddress').val(galacticAddress);
          $('#copygaaddress').show();
        }
        $('.linkTitle').show();
        $('#glyphlink').val(url +'#'+linkglyphs);
        $('#glyphlink').show();
        $('.glyphlink').html(url +'#'+linkglyphs);
        $('.glyphlink').show();
        $('.glyphlinkbox').addClass('blackgd');
        $('#copybtn').show();
        $('#copybtncode').show();

        console.log(galacticAddress);
      } else {
        $('.glyphsError').fadeOut(300);
        $(this).parent().find('.clicked').removeClass('clicked');
        $(this).addClass('clicked');
      }
    }
  });

  var planetchoice = $('.planetNumber').get(0);
  for (var i = 0; i <= 15; ++i) {
    planetchoice[planetchoice.length] = new Option(i +1, i);
  }

  $('.planetNumbers').on('change', function () {
    var selectVal = $(".planetNumbers option:selected").val();
    console.log("planeta: "+selectVal);
  });
  $('.planetNumber').change(function(){
    var option = $(this).find('option:selected').val();
    /* setting input box value to selected option value */
    console.log("planeta: "+option);
  });

  $('.gacoords').on('keyup keypress', function(e) {
    var val =  $(this).val().toUpperCase().replace(/[^a-fA-F0-9:]+/,"");
    $(this).val(val);
    val = $(this).val().split(":").join(""); // remove hyphens
    if (val.length > 0) {
      val = val.match(new RegExp('.{1,4}', 'g')).join(":");
    }
    $(this).val(val);
    var galacticCoords = val;
    var url = ('http://' + window.location.hostname + '/');
    console.log(galacticCoords);
    var [A, B, C, D] = galacticCoords.split(":");
    if (galacticCoords.length == "") {
      $('.clearga').hide();
    } else {$('.clearga').show();}
    if (galacticCoords.length == 19) {
      var doConversion =[];
      if ( parseInt(A, 16) > 4095) {
        console.log("Invalid Address A "+A);
        $('.gacoordsError').fadeIn({queue: false, duration: '300'});
        $('.wrongcoords').html(A);
        doConversion = false;
      } else if ( parseInt(B, 16) > 255 ) {
        console.log("Invalid Address B");
        $('.gacoordsError').fadeIn({queue: false, duration: '300'});
        $('.wrongcoords').html(B);
        doConversion = false;
      } else if ( parseInt(C, 16) > 4095) {
        console.log("Invalid Address C");
        $('.gacoordsError').fadeIn({queue: false, duration: '300'});
        $('.wrongcoords').html(C);
        doConversion = false;
      } else if ( parseInt(D, 16) > 767) {
        console.log("Invalid Address D");
        $('.gacoordsError').fadeIn({queue: false, duration: '300'});
        $('.wrongcoords').html(D);
        doConversion = false;
      } else {
        doConversion = true
        $('.gacoordsError').delay(1500).fadeOut(300);
      }
      console.log("Execute Conversion: "+doConversion);
      if (+doConversion == true) {
        console.log("Execute: "+doConversion);
        D.toString(16);
        console.log("D value= "+D);
        console.log(A,B,C,D);
        A = parseInt(A, 16);
        console.log("HextoInt A: "+A);
        A = +A -2048 +4097;
        A = Math.abs(A);
        console.log("A - 2047 "+A);
        A = A.toString(16).toUpperCase();
        console.log("InttoHex A: "+A);

        B = parseInt(B, 16);
        console.log("HextoInt B: "+A);
        B = +B +257 -128;
        B = Math.abs(B);
        console.log("B - 2047 "+B);
        B = B.toString(16).toUpperCase();
        console.log("InttoHex B: "+B);

        C = parseInt(C, 16);
        console.log("HextoInt C: "+C);
        C = +C -2048 +4097;
        C = Math.abs(C);
        console.log("C - 2047 "+C);
        C = C.toString(16).toUpperCase();
        console.log("InttoHex C: "+C);

        D = D.slice(1);
        console.log("D= "+D)

        var planet = $(".planetNumber option:selected").val();
        var galaxytoPortal = planet+D+B+C+A;
        console.log(galaxytoPortal);
        var portalglyphs = "";
        for (var i = 0, len = galaxytoPortal.length; i < len; i++) {
          portalglyphs += '<i class="glyph-' + galaxytoPortal[i] + '"></i>';
        }
        $(".portalglyphs").html(portalglyphs);
        $('.portalglyphs').addClass('blackgd');
        $('.portalGlyphBox').addClass('blackgd');
        $('.portalCodeBox').addClass('blackgd');
        $(".gacoordstoglyphs").html(galaxytoPortal);
        $(".gacoordstoglyphslink").html(url +'#'+galaxytoPortal);
        $("#gacoordstoglyphslink").val(url +'#'+galaxytoPortal);
        $('#copygaaddressLink').show();
        $('.portalTitle').show();
      }
    } else {
      $('.gacoordsError').fadeOut(300);
      $('.gacoordstoglyphs').html('');
      $('.portalglyphs').html('');
      $('.portalglyphs').removeClass('blackgd');
      $('.portalGlyphBox').removeClass('blackgd');
      $('.portalCodeBox').removeClass('blackgd');
      $('.portalTitle').hide();
      $('#copygaaddressLink').hide();
    }

  });

  $(".deleteglyphs").click(function(){
    $('#copybtn').hide();
    $('#copybtncode').hide();
    var value = $('.clickedglyphs').html();
    console.log("Length of value: "+value.length);
    value = value.slice(0, -1);
    $('.clickedglyphs').html(value);
    $('.glyphscheck').children().last().remove();
    $('#glyphlink').val('');
    $('.glyphlink').html('');
    $('.galacticAddressBox').removeClass('blackgd');
    $('.glyphlinkbox').removeClass('blackgd');
    $('.galacticAddress').html('');
    $('#copygaaddress').hide();
    $('#galacticAddress').val('');
    $('.gaTitle').hide();
    $('.linkTitle').hide();
    $('.glyphsError').fadeOut(300);
    if (value.length <= 0) {
      $(this).hide();
      $('.clearglyphs').hide();
      $('.clickedglyphs').removeClass('blackgd');
      $('.glyphsblock').find('.clicked').removeClass('clicked');
    }
    //var glyphslink = $('#glyphlink').val();
    //glyphslink = glyphslink.substr(0,glyphslink.length-1);
    //$('#glyphlink').val(glyphslink);
  });
  $('.clearglyphs').click(function(){
    $(this).parent().parent().find('.clicked').removeClass('clicked');
    $('.clickedglyphs').html('');
    $('#glyphlink').val('');
    $('.glyphlink').html('');
    $('#glyphcode').val('');
    $('.glyphscheck').html('');
    $('.galacticAddressBox').removeClass('blackgd');
    $('.glyphlinkbox').removeClass('blackgd');
    $('.clickedglyphs').removeClass('blackgd');
    $('.galacticAddress').html('');
    $('.gaTitle').hide();
    $('#galacticAddress').val('');
    $('#galacticAddress').hide();
    $('#copygaaddress').hide();
    $('.linkTitle').hide();
    $('#glyphlink').hide();
    $('#copybtn').hide();
    $('#copybtncode').hide();
    $('.deleteglyphs').hide();
    $('.glyphsError').fadeOut(300);
    $(this).hide();

  });
  $('.clearglyphsurl').click(function(){
    $('.glyphs').val('');
    $('.result').html('');
    $('.galacticAddressCode').html('');
    $('#galacticAddressCode').val('');
    $('.galacticAddressCodeBox').removeClass('blackgd');
    $('.result').removeClass('blackgd');
    $('.gacodeTitleblock').hide();
    $('.gacodeTitleCode').hide();
    $('.gaTitleCode').hide();
    $('.portalError').hide();
    $('#copygaaddresscode').hide();
    $(this).hide();
  });
  $('.clearga').click(function(){
    $('.gacoords').val('');
    $('.gacoordstoglyphs').html('');
    $('.portalglyphs').html('');
    $('.portalglyphs').removeClass('blackgd');
    $('.portalGlyphBox').removeClass('blackgd');
    $('.portalCodeBox').removeClass('blackgd');
    $('.portalTitle').hide();
    $('.gacoordstoglyphslink').html('');
    $('.gacoordstoglyphslink').hide();
    $('#gacoordstoglyphslink').html('');
    $('#copygaaddressLink').hide();
    $('.gacoordsError').fadeOut(300);
    $(this).hide();
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

function randomname() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
Math.floor(Math.random() * 6) + 1
//console.log(randomname());

function RandomColor(){
  var color='';
  while(color.length<6){
    color=Math.floor(Math.random()*16777215).toString(16);
  }
  return '#'+color;
}
//console.log(RandomColor());