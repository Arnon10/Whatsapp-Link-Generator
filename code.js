
function creatLink(){
   var phoneNumber = document.getElementById("phoneNum").value.toString().replace("0", "+972");
   var information = document.getElementById("info").value.replace(/ /gi, "%20");;

   var link = "https://wa.me/" + phoneNumber + "?text=" + information
   
   document.getElementById("link").value = link;
}

function copyContant(){
    var copyText = document.getElementById("link");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}



