var confirmed = confirm("CSVインポートする?");

if (confirmed) {
    // importCSV();
    setTimeout(importCSV, 1500);//保有商品一覧ページを開いてOK押してから1500m秒以内にデータを読み込んでくれるという前提
    window.open('https://docs.google.com/spreadsheets/d/14mfuqIFzjls0Zyz4Q20Istzhx3VcSFE2qrQjXPkYLws/edit#gid=0', '_blank');

}   


// "保有商品一覧"をクリックして新しいタブで開く関数
function importCSV() {
    // "保有商品一覧"のリンクを取得
    // const possessListLink = document.querySelector('.pcmm-btlk-link span.pcmm-btlk__text');
    // const csvSaveLink = document.querySelector('a[href="#"][alt="CSVで保存"]');
    const csvSaveLink = document.querySelector('a[onclick="csvOutput(); return false;"]');

    if (csvSaveLink) {
        csvSaveLink.click();
        
    } else {
        console.log('daunewoad不可能だった。');
    }
}