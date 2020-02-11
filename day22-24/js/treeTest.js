function findIdByName(name) {
    function findId(p) {
        if (p.name == name) {
            console.log(p.id);
        }
        if (p.left != undefined)
            findId(p.left);
        if (p.right != undefined)
            findId(p.right);
    }

    findId(tree);
}

function findNameById(id) {
    function findName(p) {
        if (p.id == id) {
            console.log(p.name);
        }
        if (p.left != undefined)
            findName(p.left);
        if (p.right != undefined)
            findName(p.right);
    }

    findName(tree);
}

function getListWithDLR() {
    function findName(p) {
        console.log(p.name);
        if (p.left != undefined)
            findName(p.left);
        if (p.right != undefined)
            findName(p.right);
    }

    findName(tree);
}

function getListWithLDR() {
    function findName(p) {
        if (p.left != undefined)
            findName(p.left);
        console.log(p.name);
        if (p.right != undefined)
            findName(p.right);
    }

    findName(tree);
}

function getListWithLRD() {
    function findName(p) {
        if (p.left != undefined)
            findName(p.left);
        if (p.right != undefined)
            findName(p.right);
        console.log(p.name);
    }

    findName(tree);
}