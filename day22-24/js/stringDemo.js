function getValue() {
    var checkA = document.getElementById("radio-a").checked;
    var checkB = document.getElementById("radio-b").checked;
    var valueA = document.getElementById("str-a").value;
    var valueB = document.getElementById("str-b").value;
    if (valueA || valueB) {
        if (checkA) {
            return valueA;
        } else if (checkB) {
            return valueB;
        }
    }
}

var numA;
var numB;

function getNum() {
    numA = document.getElementById("num-a").value;
    numB = document.getElementById("num-b").value;
}

function write(strings, add) {
    document.getElementById("result").innerHTML = add + strings;
}

function getLen() {
    var value = getValue();
    if (value && value != "")
        write(value.length, "长度是：")
}

function getThree() {
    var value = getValue();
    if (value && value != "")
        write(value.charAt(2), "第三个字符是：")
}

function getConcat() {
    var valueA = document.getElementById("str-a").value;
    var valueB = document.getElementById("str-b").value;
    if (valueA || valueB) {
        write(valueA.concat(valueB), "连接之后的字符串：")
    }
}

function getIndexof() {
    var valueA = document.getElementById("str-a").value;
    var valueB = document.getElementById("str-b").value;
    if (valueA && valueB) {
        write(valueA.indexOf(valueB) + 1, "B的字符串在A中第一次出现的位置：")
    }
}

function getLastIndexof() {
    var valueA = document.getElementById("str-a").value;
    var valueB = document.getElementById("str-b").value;
    if (valueA && valueB) {
        write(valueB.lastIndexOf(valueA) + 1, "A的字符串在B中最后一次出现的位置：")
    }
}

function getSlice() {
    getNum();
    var value = getValue();
    if (value && value != "" && (numB - numA > 0))
        write(value.slice(numA, numB), "从" + numA + "到" + numB + "的子字符串：")
}

function getRowNum() {
    var checkA = document.getElementById("radio-a").checked;
    var checkB = document.getElementById("radio-b").checked;
    var valueA = document.getElementById("str-a").value;
    var valueB = document.getElementById("str-b").value;
    if (checkA) {
        if (valueA == "") {
            write("0", "当前的行数为：");
        } else {
            write(valueA.trim().split(/\r?\n\s*/).length, "当前的行数为：")
        }
    } else if (checkB) {
        if (valueB == "") {
            write("0", "当前的行数为：");
        } else {
            write(valueB.trim().split(/\r?\n\s*/).length, "当前的行数为：")
        }
    }
}

function getSub() {
    getNum();
    var value = getValue();
    if (value && value != "")
        write(value.slice(numA, numB), "")
}

function getUpper() {
    var value = getValue();
    if (value && value != "")
        write(value.toUpperCase(), "转成大写后：")
}

function getLower() {
    var value = getValue();
    if (value && value != "")
        write(value.toLowerCase(), "转成小写后：")
}

function delSpace() {
    var value = getValue();
    if (value && value != "")
        value = value.replace(/\s*/g, "")
    write(value, "去除空格后：")
}

function replaceA() {
    var checkA = document.getElementById("radio-a").checked;
    var checkB = document.getElementById("radio-b").checked;
    var valueA = document.getElementById("str-a").value;
    var valueB = document.getElementById("str-b").value;

    if (valueA && valueB) {
        if (checkA) {
            write(valueA.replace(/[a]/g, valueB), "a替换另一个输入框内容后：")
        } else if (checkB) {
            write(valueB.replace(/[a]/g, valueA), "a替换另一个输入框内容后：")
        }
    }
}