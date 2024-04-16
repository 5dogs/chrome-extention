var confirmed = confirm("保有商品を開く?");

// alert("os")
if (confirmed) {
    // "保有商品一覧"をクリックして新しいタブで開くpossess_lst_detail
    clickOnPossessListLink();
}

// "保有商品一覧"をクリックして新しいタブで開く関数
function clickOnPossessListLink() {
    // "保有商品一覧"のリンクを取得
    const possessListLink = document.querySelector('.pcmm-btlk-link span.pcmm-btlk__text');

    // リンクが存在するかを確認し、存在すれば新しいタブで開く
    if (possessListLink) {
        const url = possessListLink.parentElement.href;
        window.open(url+"#possess_lst_detail", '_blank');
    } else {
        console.log('保有商品一覧のリンクが見つかりませんでした。');
    }
}