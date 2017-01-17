/*$(function(){
  $('.tab-list').each(function(){
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function(e){
      e.preventDefault();
      var $link = $(this);
      var id = this.hash;

      if (id && !$link.is('.active')) {
        $panel.removeClass('active');
        $tab.removeClass('active');

        $panel = $(id).addClass('active');
        $tab = $link.parent().addClass('active');
      }
    });
  });
})
*/

  $(".zza").click(function(){
    if ($(".zzz").is(":visible")) {
      if ($(".zzz").val()==="") {
        $(".zzz").hide();
        $(".zza").animate({left:"0"},300);
      }else{
        alert("youzhi");
      };
    }else{
      $(".zzz").show(function(){
        $(".zzz").css("visibility","visible");
        $(".zzz").animate({width:"200px"},500);
        $(".zza").animate({left:"175px"},300);
      });
    };
  });


  if ($(".zzz").is(":visible")) {
    $(".zza").on(function(){
      $(".zzz").css("visibility","hidden");
      $(".zza").animate({left:"0"},300);
    });
  }else{
    $(".zza").on(function(){
      $(".zzz").css("visibility","visible");
      $(".zzz").animate({width:"200px"},500);
      $(".zza").animate({left:"175px"},300)
    });
  }