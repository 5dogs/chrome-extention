const searchResults = document.querySelectorAll('.MjjYud');
const urlNum = 12
const topURLs = [];
for (let i = 0; i < searchResults.length && topURLs.length < urlNum; i++) {
    //Wt5Tfe(”関連する質問”)のクラスでなければ、リストに追加する
    if (!searchResults[i].querySelector('.Wt5Tfe')) {
        let url = searchResults[i].querySelector('a').getAttribute('href');
        topURLs.push(url);
    }
}

if (!confirm("検索上位ページを開きません")) {
    topURLs.forEach(function(url) {
        window.open(url, '_blank');
    });
}