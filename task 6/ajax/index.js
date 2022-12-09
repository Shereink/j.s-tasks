

var newApi = new XMLHttpRequest();
newApi.open("GET", "	https://dummyjson.com/todos")
newApi.send();
newApi.onreadystatechange = handler;
// console.log(newApi.responseText);
function handler() {
    if (newApi.readyState == 4 && newApi.status == 200) {
        var user = JSON.parse(newApi.responseText)
        //    console.log(2);
        console.log(user);
        //    console.log(1);
        // document.write(user.todos[1]["id"])
        for (var i = 0; i < 30; i++) {
            var id = user.todos[i]["id"]
            document.write(id)
        }
    }
}