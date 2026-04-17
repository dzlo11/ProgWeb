"use strict";
// TODO
window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/gustave-eiffel/progweb/main/tp8/fruitQuantities.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            // Traitez les données ici
        }
    };
    xhr.send();
};
// TODO
