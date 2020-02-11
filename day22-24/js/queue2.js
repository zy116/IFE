function write(queue) {
    document.getElementById("queue-cont").innerHTML = "队列内容：" + queue;
}

function getValue() {
    var value = document.getElementById("queue-input").value;
    return value;
}

function add() {
    var value = getValue();
    if (value != "")
        queue.push(value);
    write(queue.join("&lt-"));
}

function del() {
    if (queue.length == 0)
        alert("队列没有元素")
    else {
        queue.shift();
        write(queue.join("&lt-"));
    }
}

function print() {
    if (queue.length == 0)
        alert("队列没有元素")
    else {
        console.log(queue[queue.length-1])
    }
}

function empty() {
    if (queue.length == 0)
        console.log(true)
    else
        console.log(false)
}