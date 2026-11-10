// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

// os-btnというidを持つHTML要素を取得し、定数に代入する
const Text = document.getElementById('text');

// 画面のクリックでイベント処理を実行する
Btn.addEventListener('click', () => {
  Text.textContent = 'ボタンをクリックしました';
  }
);