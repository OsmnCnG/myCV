
function downloadCourseraCertificate() {
    var link = document.createElement('a');
    link.href = 'certificate/Coursera EXV7BLZYKAAY.pdf';
    link.download = 'myCertificate';
    link.click();
}



function downloadPatikaCertificate() {
    var link = document.createElement('a');
    link.href = 'certificate/javaPatika.pdf';
    link.download = 'myCertificate';
    link.click();
}


function downloadBorusanCertificate() {
    var link = document.createElement('a');
    link.href = 'certificate/Borusan-Teknoloji-Okulu-Sertifikasi_Borusan-Teknoloji-Okulu_Osman-Can-GONEN.pdf.pdf';
    link.download = 'myCertificate';
    link.click();
}


let clickCount = 0;

function showMessage() {
    // alert("Rana <3");
    console.log("<3");
}

function checkClicks() {
    clickCount++;
    
    if (clickCount === 3) {
        showMessage();
        clickCount = 0; // Sıfırlama
    }
}

