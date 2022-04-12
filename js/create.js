function userOject(id, name, age, phone) {
    var user = new Object();
    user.id = id;
    user.name = name;
    user.age = age;
    user.phone = phone;
    return user;
}

var listUser = JSON.parse(localStorage.getItem('listUser'));
if (listUser == null)
    listUser = new Array();
console.log(listUser);

function add() {
    var nodeID = document.getElementById("id");
    var id = nodeID.value;
    nodeID = '';

    var nodeName = document.getElementById("name");
    var name = nodeName.value;
    nodeName = '';

    var nodeAge = document.getElementById("age");
    var age = parseInt(nodeAge.value);
    nodeAge = '';

    var nodePhone = document.getElementById("phone");
    var phone = parseInt(nodePhone.value);
    nodePhone = '';

    var user = userOject(id, name, age, phone);

    listUser.push(user);

    var strlist = JSON.stringify(listUser);
    localStorage.setItem('listUser', strlist);
}