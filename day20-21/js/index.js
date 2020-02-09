document.getElementById("submit-btn").onclick = function () {
    console.log(document.getElementById("name").value);
}

document.getElementById("name").onkeypress = function (event) {
    if (event.keyCode == 13) {
        console.log(document.getElementById("name").value);
    } else if (event.keyCode == 27) {
        document.getElementById("name").value = "";
    }
}