var confirmed = confirm("CSVダウンロードする?");

if (confirmed) {
    setTimeout(downladCSV, 1500);//保有商品一覧ページを開いてOK押してから1500m秒以内にデータを読み込んでくれるという前提
    var newTab = window.open('https://docs.google.com/spreadsheets/d/14mfuqIFzjls0Zyz4Q20Istzhx3VcSFE2qrQjXPkYLws/edit#gid=0', '_blank');

    // 新しいタブのロードを監視する
    var checkTabLoadedInterval = setInterval(function() {
        if (document.hasFocus()) {
            clearInterval(checkTabLoadedInterval);
           confirmDashboards();
        }
    }, 1000);; // 1秒ごとに新しいタブの状態をチェック
} else {
   confirmDashboards(); // confirmがキャンセルされた場合
}

function confirmDashboards() {
    if (confirm("各ダッシュボードを開きますか？")) {
        ['https://minkabu.jp/mypage/favorites#v-myPage',
            'https://lookerstudio.google.com/reporting/de699bca-88d6-433c-9e2e-52648e540832/page/M9kwD/edit',
            'https://finance.yahoo.co.jp/portfolio/detail?portfolioId=2#PortfolioDetail'].forEach(url => window.open(url, '_blank'));
    }
}






function downladCSV() {
    const csvSaveLink = document.querySelector('a[onclick="csvOutput(); return false;"]');

    if (csvSaveLink) {
        csvSaveLink.click();
        
    } else {
        console.log('ダウンロードできませんでした。');
    }
}