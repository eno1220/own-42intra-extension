window.onload = function () {
  // select要素を取得
  var select = document.getElementsByClassName("cursus-user-select")[0];
  // valueを変更
  select.value = "42cursus";
  // changeイベントを発火
  var event = new Event("change");
  select.dispatchEvent(event);
};
