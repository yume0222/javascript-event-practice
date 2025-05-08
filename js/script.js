// ダークモード
const darkModeBtn = document.querySelector('#dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (darkModeBtn.textContent === 'ダークモードにする') {
    darkModeBtn.textContent === 'ライトモードにする'
  } else {
    darkModeBtn.textContent === 'ダークモードにする'
  }
});

// 入力した文字を数える
const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  if (text.value.length > 100) {
    count.classList.add('alert');
  } else {
    count.classList.remove('alert');
  }
});

// チェックを入れるとボタンを押せるようにする
const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

check.addEventListener('change', () => {
  if (isAgreed.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

// ページのスクロール量を表示
const getScrollPercent = () => {
  const scroll = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const viewHeight = document.documentElement.clientHeight;
  // スクロールされた割合 = スクロール量 / (ページ全体の高さ - 表示領域の高さ) * 100
  const percentage = scroll / (pageHeight - viewHeight) * 100;
  console.log(percentage);

  bar.style.width = `${percentage}%`;
};
window.addEventListener('scroll', getScrollPercent);
