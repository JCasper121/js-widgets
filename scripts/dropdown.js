var dropdownToggle = document.getElementById('dropdown-toggle');
var dropdown = document.getElementById('dropdown');

dropdownToggle.onclick = function() {
    if(dropdown.dataset.visiblity === 'true') {
        dropdown.style.display = 'none';
        dropdown.dataset.visiblity = false;
    } else {
        dropdown.style.display = 'block';
        dropdown.dataset.visiblity = true;
    }
}