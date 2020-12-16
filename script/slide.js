const visual_area = document.getElementById('visual');
const slide_list = document.querySelector('#slide_list');

visual_area.onmousemove = function (e) {
    if (e.offsetX > visual_area.offsetWidth / 2) {
        slide_list.style.cursor = "url('../asset/arrow_right.png') 0 0, auto";
    } else {
        slide_list.style.cursor = "url('../asset/arrow_left.png') 0 0, auto";
    }
}

visual_area.onclick = function (e) {
    if (e.offsetX > visual_area.offsetWidth / 2) {
        slide_list.style.left = '-100vw';
    } else {
        slide_list.style.left = 0;
    }
}