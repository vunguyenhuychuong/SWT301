const $ = (query) => document.querySelector(query);

var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputT = document.getElementById('inputTextarea');

var tbao = document.getElementById('thongBao');
var tbName = document.getElementById('thongBaoname');
var tbEmail = document.getElementById('thongBaoEmail');
var tbTA = document.getElementById('thongBaoTA');


function zoomout(numberPicture) {
    document.getElementById("frame").src = './images/image' + numberPicture + '.jpg';
}

inputName.addEventListener('input', function() {
    var isEmpty = this.value === '';

    if (isEmpty) {
        tbName.innerHTML = 'Please fill out name fields!'
        tbName.style.display = 'block';
        return;
    } else {
        tbName.innerHTML = ''
        tbName.style.display = 'none';
        tbao.innerHTML = ''
        tbao.style.display = 'none';
    }


})

inputEmail.addEventListener('input', function() {
    var isEmpty = this.value === '';

    if (isEmpty) {
        tbEmail.innerHTML = 'Please fill out email fields!'
        tbEmail.style.display = 'block';
        return;
    } else {
        tbEmail.innerHTML = ''
        tbEmail.style.display = 'none';
        tbao.innerHTML = ''
        tbao.style.display = 'none';
    }
})


inputT.addEventListener('input', function () {
    var isEmpty = this.value === '';

    if (isEmpty) {
        tbTA.innerHTML = 'Please fill out content fields!'
        tbTA.style.display = 'block';
        return;
    } else {
        tbTA.innerHTML = '';
        tbTA.style.display = 'none';
        tbao.innerHTML = ''
        tbao.style.display = 'none';
    }
})

let button = $("#btnSend");
button.addEventListener("click", function warring() {
    if (inputName.value != '' && inputEmail.value != '' && inputT.value != '') {
        tbao.innerHTML = ''
        tbao.style.display = 'none';
        tbTA.innerHTML = ''
        tbTA.style.display = 'none';
        tbEmail.innerHTML = ''
        tbEmail.style.display = 'none';
        tbName.innerHTML = ''
        tbName.style.display = 'none';
        var result = confirm('Are you sure about your information?')
        if (result) {
            alert('Message sent')
            inputName.value = ''
            inputEmail.value = ''
            inputT.value = ''
        }
    } else {
        if (inputName.value == '' && inputEmail.value == '' && inputT.value == '') {
            tbao.innerHTML = 'Please fill out all fields!'
            tbao.style.display = 'block'
            tbTA.innerHTML = ''
            tbTA.style.display = 'none';
            tbEmail.innerHTML = ''
            tbEmail.style.display = 'none';
            tbName.innerHTML = ''
            tbName.style.display = 'none';
        } else if (inputName.value != '' && inputEmail.value == '' && inputT.value == '') {
            tbEmail.innerHTML = 'Please fill out email fields!'
            tbEmail.style.display = 'block';
            tbTA.innerHTML = 'Please fill out content fields!'
            tbTA.style.display = 'block';
            tbao.innerHTML = ''
            tbao.style.display = 'none';
        } else if (inputName.value != '' && inputEmail.value != '' && inputT.value == '') {
            tbTA.innerHTML = 'Please fill out content fields!'
            tbTA.style.display = 'block';
            tbao.innerHTML = ''
            tbao.style.display = 'none';
        } else if (inputName.value != '' && inputEmail.value == '' && inputT.value != '') {
            tbEmail.innerHTML = 'Please fill out email fields!'
            tbEmail.style.display = 'block';
            tbao.innerHTML = ''
            tbao.style.display = 'none';
        } else if (inputName.value == '' && inputEmail.value != '' && inputT.value == '') {
            tbTA.innerHTML = 'Please fill out content fields!'
            tbTA.style.display = 'block';
            tbName.innerHTML = 'Please fill out name fields!'
            tbName.style.display = 'block';
            tbao.innerHTML = ''
            tbao.style.display = 'none';
        } else if (inputName.value == '' && inputEmail.value != '' && inputT.value != '') {
            tbName.innerHTML = 'Please fill out name fields!'
            tbName.style.display = 'block';
            tbao.innerHTML = ''
            tbao.style.display = 'none';
        } else {
            tbEmail.innerHTML = 'Please fill out email fields!'
            tbEmail.style.display = 'block';
            tbName.innerHTML = 'Please fill out name fields!'
            tbName.style.display = 'block';
            tbao.innerHTML = ''
            tbao.style.display = 'none';
        }


    }

})

function zoomOut(numberPicture){
    document.getElementById("frame").src = "./images/image" + numberPicture + ".jpg"
}