//  1
localStorage.setItem("greeting", "Привет, мир!");
console.log(localStorage.getItem("greeting"));

//2
localStorage.removeItem("greeting");
console.log(localStorage.getItem("greeting"));

// 3
let user = {
    name: "Komil",
    age: 19,
    isStudent: true
};

localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));

// 4
let updatedUser = JSON.parse(localStorage.getItem("user"));
updatedUser.country = "Kazakhstan";
localStorage.setItem("user", JSON.stringify(updatedUser));
console.log(JSON.parse(localStorage.getItem("user")));

// 5
if (localStorage.getItem("user")) {
    console.log("Есть пользователь");
} else {
    localStorage.setItem("user", JSON.stringify({ name: "Test", age: 18 }));
}

// 6
localStorage.clear();
console.log(localStorage.getItem("user"));

// 7
let tasks = [
    { title: "JS", completed: false },
    { title: "HW", completed: false },
    { title: "Football", completed: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));
console.log(JSON.parse(localStorage.getItem("tasks")));

// 8
let updatedTasks = JSON.parse(localStorage.getItem("tasks"));
updatedTasks[0].completed = true;
localStorage.setItem("tasks", JSON.stringify(updatedTasks));
console.log(JSON.parse(localStorage.getItem("tasks")));