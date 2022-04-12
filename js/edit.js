var listUser = JSON.parse(localStorage.getItem('listUser'));
var infoUser = JSON.parse(localStorage.getItem('isUser'));

function load() {
    let showupdate = '';
    showupdate = `
    <label for="ID">ID</label>
    <input id="id" type="number" value="${infoUser.id}" placeholder="ID" class="form-input">
    <label for="Name">Name</label>
    <input id="name" type="text" value="${infoUser.name}" placeholder="Name" class="form-input">
    <label for="age">Age</label>
    <input id="age" type="number" value="${infoUser.age}" placeholder="Age" class="form-input">
    <label for="phone">Phone</label>
    <input id="phone" type="number" value="${infoUser.phone}" placeholder="Phone" class="form-input">
    <button class="button-form" onclick="edit()">Update</button>`

    document.getElementById("show-form").innerHTML = showupdate;
}
load();

function edit() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var getUser = JSON.parse(localStorage.getItem('listUser'))
    objIndex = getUser.findIndex((obj => obj.id == id));
    getUser[objIndex].name = name;
    getUser[objIndex].age = age;
    getUser[objIndex].phone = phone;
    localStorage.setItem("listUser", JSON.stringify(getUser));
}