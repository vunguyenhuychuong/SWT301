function checkData() {
    var show = document.getElementsByTagName("input");
    var check = "the ";
    for(let index = 0; index < show.length; index++) {
        if(show[index].value == ""){
            check += show[index].id + ", ";
        }
    }
    alert(check + "is required");
}