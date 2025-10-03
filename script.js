// 1. Data Types & Variables

const studentInfo = {
    id: "NA-0CE10C",                 // Student ID
    name: "Ahmad Ashraf Nur",       // Full Name
    birthMonth: 5,                  // Birth Month: May
    favoriteColor: "Black"          // Favorite Color
};

// 2. Objects & Data Management

class Task {
    constructor(title, description, dueDate, category) {
        this.id = "NA-0CE10C_" + Date.now();
        this.title = title;
        this.description = description;
        this.priority = 3;   // Default priority
        this.completed = false;
        this.createdDate = new Date();
        this.dueDate = new Date(dueDate);
        this.category = category;
    }
}

const tasks = []; // Array to store all tasks

// 3. Functions (10 points)

// Regular Function: Create a new task
function createTask(title, description, dueDate, category) {
    const task = new Task(title, description, dueDate, category);
    tasks.push(task);
    return task;
}

// Regular Function: Delete a task by ID
function deleteTask(taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

// Regular Function: Display tasks (all, completed, or pending)
function displayTasks(filterBy = "all") {
    let filteredTasks = tasks;

    if (filterBy === "completed") {
        filteredTasks = tasks.filter(t => t.completed);
    } else if (filterBy === "pending") {
        filteredTasks = tasks.filter(t => !t.completed);
    }

    return filteredTasks;
}

// Arrow Function: Calculate percentage of completed tasks
const calculateTasksPercentage = () => {
    if (tasks.length === 0) return "0%";
    const completed = tasks.filter(t => t.completed).length;
    return ((completed / tasks.length) * 100).toFixed(2) + "%";
};

// Helper Function: Toggle task completion status
function toggleComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
    }
}

// 4. Loops

// For loop to show tasks created in student's birth month
function showBirthMonthTasks() {
    const birthMonthTasks = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].createdDate.getMonth() + 1 === studentInfo.birthMonth) {
            birthMonthTasks.push(tasks[i]);
        }
    }
    return birthMonthTasks;
}

// 5. Promises & Async Operations

// Promise function to simulate saving tasks
function saveTasksToStorage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = JSON.stringify(tasks, null, 2);
            resolve("Tasks saved successfully!\n" + data);
        }, studentInfo.birthMonth * 100); // Delay = birthMonth * 100 ms
    });
}

// Async function to call the save function
async function saveTasks() {
    const result = await saveTasksToStorage();
    return result;
}
