var confirmed = confirm("CSVダウンロードする?");

if (confirmed) {
    // downladCSV();
    setTimeout(downladCSV, 1500);//保有商品一覧ページを開いてOK押してから1500m秒以内にデータを読み込んでくれるという前提
    window.open('https://docs.google.com/spreadsheets/d/14mfuqIFzjls0Zyz4Q20Istzhx3VcSFE2qrQjXPkYLws/edit#gid=0', '_blank');

}   


// "保有商品一覧"をクリックして新しいタブで開く関数
function downladCSV() {
    const csvSaveLink = document.querySelector('a[onclick="csvOutput(); return false;"]');

    const fileMenu = document.getElementById('docs-file-menu'); 
    if (fileMenu) {
        fileMenu.click();
    }
}