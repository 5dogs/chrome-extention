window.open('https://minkabu.jp/mypage/favorites#v-myPage', '_blank');
window.open('https://lookerstudio.google.com/reporting/de699bca-88d6-433c-9e2e-52648e540832/page/M9kwD/edit', '_blank');
window.open('https://finance.yahoo.co.jp/portfolio/detail?portfolioId=2#PortfolioDetail', '_blank');

document.addEventListener('DOMContentLoaded', function() {
    // スクロールダウンする要素のクラス名を指定
    const targetClassName = 's1-content-area__container';

    // 指定されたクラス名の要素を取得
    const targetElement = document.querySelector('.' + targetClassName);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('指定されたクラス名の要素が見つかりませんでした。');
    }
});


function clickOnPossessListLink() {
    // ログインボタンをクリック
    const loginButton = document.getElementById('login-btn');
    if (loginButton) {
        loginButton.click();
    } else {
        console.log('ログインボタンが見つかりませんでした。');
    }
}