function diyTrim(str) {
    var result = "";

// do something
    result = str.replace(/\s*/g, "");

    return result
}


function removeRepetition(str) {
    var result = "";

// do something
    if (str != "") {
        result = str[0];
        for (var i = 1; i < str.length; i++) {
            if (str[i] != str[i - 1])
                result += str[i];
        }
    }
    return result;
}