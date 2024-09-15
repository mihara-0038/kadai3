
$(function () {
  /*=================================================
  // 入力チェック（申し込みボタン押下時に実行）
  ===================================================*/
  $('#submit-button').on('click', function () {
    // エラーメッセージを表示するためのエリアを初期化
    $('#name-error').text("");
    $('#tel-error').text("");
    $('#reservation-error').text("");
    $('#lesson-error').text("");

    // 名前が未入力の場合
    if ($('input[name="your-name"]').val() == "") {
      // エラーメッセージをセット
      $("#name-error").text("名前は必須項目です。");
    }

    // 電話番号の入力欄に1つでも未入力がある場合
    if (
      ($('input[name="your-tel1"]').val() == "") ||
      ($('input[name="your-tel2"]').val() == "") ||
      ($('input[name="your-tel3"]').val() == "")
    ) {
      // エラーメッセージをセット
      $("#tel-error").text("電話番号は必須項目です。");
    }

  });
    //ラジオボタン選択後の表記
    $('[name="radio-check"]:radio').change(function(){
      if($('[id=online-check]').prop('checked')){
        $('.visitor').fadeOut();
        $('.online').fadeIn();
      }else if ($('[id=visitor-check]').prop('checked')){
        $('.online').fadeOut();
        $('.visitor').fadeIn();
      }
    })
  });
