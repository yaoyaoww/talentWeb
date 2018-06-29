
jQuery(document).ready(function() {
    $.backstretch("img/1.jpg");
});
function jump() {
    debugger
    if($("#form-username").val()=="root"&&$("#form-password").val()=="root"){
        window.location.href = "html/homepage.html";
    }
    else{
        alert("请重新输入用户名和密码")
    }
}
function jump1() {
    window.location.href = "Project release.html";
}
function jump2() {
    window.location.href = "Project view.html";
}