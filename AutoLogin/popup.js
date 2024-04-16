document.getElementById('exportButton').addEventListener('click', function () {
    window.open("https://youtube.com");
});

// alert("popupjsだよ");

let currentURL = new URL(window.location.href);
let isEnabled = currentURL.href === "https://youtube.com";
// Uncomment the line below if you want to check a URL parameter
// let isEnabled = currentURL.searchParams.get("export") === "1";

if (isEnabled) {
    alert("popupjsだよ");
}



// // if (window.location.href == "https://www.smbc-card.com/memx/force_login/index.html/*") {
// if (window.location.href == "youtube.com") {


//     var confirmed = confirm("検索上位ページを開きません");

//     alert("daa")

//     // ログインフォームに自動入力するIDとPW
//     const loginId = "your_username";
//     const password = "your_password";

//     // ID入力フィールドを取得して値を設定
//     document.getElementById('id_input').value = loginId;

//     // PW入力フィールドを取得して値を設定
//     document.getElementById('pw_input').value = password;
        
// }else{

//     alert("ditida")
// }