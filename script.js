//  1

// Сохраняем строку
localStorage.setItem("greeting", "Привет, мир!");

// Получаем и выводим
const greeting = localStorage.getItem("greeting");
console.log("Greeting:", greeting);


// 2

// Удаляем
// localStorage.removeItem("greeting");

// // Проверка
// const deletedGreeting = localStorage.getItem("greeting");
// console.log("После их удаления:", deletedGreeting); // null


// // 3

// // Объект пользователя
// const user = {
//     name: "Komil",
//     age: 19,
//     isStudent: true
// };

// // Сохраняем как JSON
// localStorage.setItem("user", JSON.stringify(user));

// // Получаем и парсим
// const savedUser = JSON.parse(localStorage.getItem("user"));
// console.log("User:", savedUser);


// // 4

// // Получаем пользователя
// let updatedUser = JSON.parse(localStorage.getItem("user"));

// // Добавляем новое поле
// updatedUser.country = "Kazakhstan";

// // Сохраняем обратно
// localStorage.setItem("user", JSON.stringify(updatedUser));

// // Проверка
// console.log("Updated User:", JSON.parse(localStorage.getItem("user")));


// // 5

// // Проверка наличия
// if (localStorage.getItem("user")) {
//     console.log("User exists:", JSON.parse(localStorage.getItem("user")));
// } else {
//     const newUser = {
//         name: "New User",
//         age: 20
//     };
//     localStorage.setItem("user", JSON.stringify(newUser));
//     console.log("Создан новый пользователь");
// }


// // 6

// // Полная очистка
// localStorage.clear();

// // Проверка
// console.log("После очистки:", localStorage.getItem("user"));


// // 7

// // Массив задач
// const tasks = [
//     { title: "Learn JS", completed: false },
//     { title: "Do homework", completed: false },
//     { title: "Play football", completed: false }
// ];

// // Сохраняем
// localStorage.setItem("tasks", JSON.stringify(tasks));

// // Получаем
// const savedTasks = JSON.parse(localStorage.getItem("tasks"));
// console.log("Tasks:", savedTasks);


// // 8

// // Получаем задачи
// let updatedTasks = JSON.parse(localStorage.getItem("tasks"));

// // Меняем статус первой задачи
// updatedTasks[0].completed = true;

// // Сохраняем обратно
// localStorage.setItem("tasks", JSON.stringify(updatedTasks));

// // Проверка
// console.log("Updated Tasks:", JSON.parse(localStorage.getItem("tasks")));