//*** Autoplay start開始／stop停止（自作サムネールナビゲーションと関係ありません）
  //start
  $(function () {
    var $fotorama = $('#fotorama-divid'),
         fotorama = $fotorama.data('fotorama');
    $('#button-autoplay').on('click', fotorama.startAutoplay);
  });
  //stop
  $(function () {
    var $fotorama = $('#fotorama-divid'),
         fotorama = $fotorama.data('fotorama');
    $('#button-stopautoplay').on('click', fotorama.stopAutoplay);
  });

//***自作サムネールナビゲーションイベントハンドラー（サムネール画像クリック）
function StartIndex(p){
    $(function(){
     //画像スタートインデックス fotorama.show(p)
       var $fotorama = $('#fotorama-divid'),
           fotorama = $fotorama.data('fotorama');
           fotorama.show(p);                       //選択された画像をFotorama画面に表示
     //サムネールインデックス
           $("li.thumbli").removeClass("selected"); //すべてのサムネール画像の選択状態を一括削除
       $("#" + p).addClass("selected");         //選択されたサムネール画像を選択状態に
      });
  
  }
  //*** Fotoramアクティブインデックス イベントハンドラー（Fororama操作）
    $(function () {
      $('.fotorama')
            .on('fotorama:show', function (e, fotorama, direct) {
                   StartIndex(fotorama.activeIndex);
          }) 
          .fotorama();  //IDスセレクタ名fotoramaIndexでFotorama設定
      });