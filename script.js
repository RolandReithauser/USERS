var users;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        users = JSON.parse(xhr.responseText);
        Feldolgozas(users);
    }
};
xhr.send(null);

function Feldolgozas(felhasznalok){
    var userTomb = users.data;

    for(var i = 0; i < userTomb.length; i++){

        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        th.appendChild(document.createTextNode(userTomb[i].id));

        var img = document.createElement("img");
        img.setAttribute("src", userTomb[i].avatar);
        td1.appendChild(img);

        td2.appendChild(document.createTextNode(userTomb[i].first_name + " " + userTomb[i].last_name));
        td3.appendChild(document.createTextNode(userTomb[i].email));

        tr.appendChild(td1);
        tr.appendChild(th);
        tr.appendChild(td2);
        tr.appendChild(td3);

        document.getElementById("adatok").appendChild(tr);
    }
}