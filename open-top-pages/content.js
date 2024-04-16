var confirmed = confirm("検索上位ページを開きません");
// 上位3つのURLを新しいタブで開く関数
function openURLsInNewTabs(urls) {
    urls.forEach(function(url) {
      window.open(url, '_blank');
    });
}
var urlNum = 2
var searchResults = document.querySelectorAll('.MjjYud');
var topURLs = [];
for (var i = 0; i < searchResults.length && topURLs.length < urlNum; i++) {
    var result = searchResults[i];
    // Wt5Tfeタグ内の場合は除外
    if (!result.querySelector('.Wt5Tfe')) {
        var url = result.querySelector('a').getAttribute('href');
        topURLs.push(url);
    }
}

if (!confirmed) {
    // window.location.href = topURLs[0]; // 一番上のURLを開く
    openURLsInNewTabs(topURLs);
}