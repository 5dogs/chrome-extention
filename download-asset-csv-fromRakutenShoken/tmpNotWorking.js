//なんか今動かない！！！




alert("dada")

function importCSV() {
    const csvSaveLink = document.querySelector('#docs-file-menu');

    if (csvSaveLink) {
        csvSaveLink.click();
        
    } else {
        console.log('daunewoad不可能だった。');
    }
}