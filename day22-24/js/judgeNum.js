function writeP(num, string1, string2) {
    document.getElementById("result").innerHTML = string1 + num + string2;
}

function judgeNum(numId) {
    var va = document.getElementById(numId).parentNode.nextSibling.value;
    if (typeof Number(va) === "number" && va != "") {
        writeP("", Number(va), "是数字")
    }
}

function selectJudge() {
    var numA = document.getElementById("radio-a").checked;
    var numB = document.getElementById("radio-b").checked;
    if (numA) {
        judgeNum("radio-a");
    } else if (numB) {
        judgeNum("radio-b");
    }
}

function ceiAtoB() {
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (aCei && bCei)
        writeP(Number(aCei).toFixed(Number(bCei)),"" , "");
}

function absNum() {
    var numA = document.getElementById("radio-a").checked;
    var numB = document.getElementById("radio-b").checked;
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (numA && aCei!="") {
        writeP(Math.abs(Number(aCei)), "NumberA的绝对值是：", "");
    } else if (numB && bCei!="") {
        writeP(Math.abs(Number(bCei)), "NumberB的绝对值是：", "");
    }
}

function upNum() {
    var numA = document.getElementById("radio-a").checked;
    var numB = document.getElementById("radio-b").checked;
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (numA && aCei!="") {
        writeP(Math.ceil(Number(aCei)), "NumberA的向上舍入值是：", "");
    } else if (numB && bCei!="") {
        writeP(Math.ceil(Number(bCei)), "NumberB的向上舍入值是：", "");
    }
}

function floorNum() {
    var numA = document.getElementById("radio-a").checked;
    var numB = document.getElementById("radio-b").checked;
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (numA && aCei!="") {
        writeP(Math.floor(Number(aCei)), "NumberA的向下舍入值是：", "");
    } else if (numB && bCei!="") {
        writeP(Math.floor(Number(bCei)), "NumberB的向下舍入值是：", "");
    }
}

function fixedNum() {
    var numA = document.getElementById("radio-a").checked;
    var numB = document.getElementById("radio-b").checked;
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (numA && aCei!="") {
        writeP(Number(aCei).toFixed(), "NumberA的四舍五入值是：", "");
    } else if (numB && bCei!="") {
        writeP(Number(bCei).toFixed(), "NumberB的四舍五入值是：", "");
    }
}

function max() {
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (aCei && bCei)
        writeP(Math.max(aCei,bCei), "两者中最大值为：","");
}

function min() {
    var aCei = document.getElementById("num-a").value;
    var bCei = document.getElementById("num-b").value;
    if (aCei && bCei)
        writeP(Math.min(aCei,bCei), "两者中最小值为：","");
}