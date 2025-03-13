function changeMember(name, role, bio1, bio2, bio3, bio4, cover, avatar) {
    document.getElementById('name').innerText = name;
    document.getElementById('role').innerText = role;
    document.getElementById('bio1').innerText = bio1;
    document.getElementById('bio2').innerText = bio2;
    document.getElementById('bio3').innerText = bio3;
    document.getElementById('bio4').innerText = bio4;
    document.getElementById('cover').src = cover;
    document.getElementById('avatar').src = avatar;
}