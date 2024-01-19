function changeContent(page) {
    if(page == 1)
        document.getElementById("content").innerHTML = '<object type="text/html" data="Pages/rent.htm" ></object>';
    else if(page == 2)
        document.getElementById("content").innerHTML = '<object type="text/html" data="Pages/whatsup.htm" ></object>';
    else if(page == 3)
        document.getElementById("content").innerHTML = '<object type="text/html" data="Pages/my.htm" ></object>';
}