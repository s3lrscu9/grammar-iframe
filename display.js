window.onload = function () {
    var url = new URL(location.href);
    var params = url.searchParams;
    var content = params.get("content");
    var sub = params.get("sub");
    var desc = params.get("desc");

    $(".content").html(content);
    var arr = sub.split("\n");
    for (var i = 0; i < arr.length; i ++) {
        $(".sub").append("<code>" + sub + "</code>:" + desc + "<br>");
    }
}