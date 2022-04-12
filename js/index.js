var listUser = JSON.parse(localStorage.getItem('listUser'));

function render(listUser) {

    let itemuser = '';
    for (let i = 0; i < listUser.length; i++) {
        itemuser += `<tr>
        <td>${listUser[i].id}</td>
        <td>${listUser[i].name}</td>
        <td>${listUser[i].age}</td>
        <td>${listUser[i].phone}</td>
        <td>
        <a href="../admin/update.html" onclick="update(${listUser[i].id})" class="action">Edit</a>
        <button onclick="deleteUser(${listUser[i].id})">Delete</button>
        </td>
    </tr>`
    }

    document.getElementById("list").innerHTML = itemuser;

}
render(listUser);
//update
function update(id) {
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].id == id) {
            object = listUser[i]
            console.log(object);
            info = localStorage.setItem('isUser', JSON.stringify(object));

        }
    }
}

function deleteUser(id) {
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].id == id) {
            // console.log(listUser[i].id);
            listUser.splice(i, 1);
        }
    }
    localStorage.setItem('listUser', JSON.stringify(listUser));
    render(listUser);
}
//search
const search = document.getElementById('search');
search.addEventListener('keyup', (search) => {
    const searchString = search.target.value.toLowerCase();
    const filteredUser = listUser.filter((user) => {
            return user.name.toLowerCase().includes(searchString)
        })
        // console.log(filteredUser);
    render(filteredUser);
});