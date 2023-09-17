/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editForm.js":
/*!*************************!*\
  !*** ./src/editForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editForm: () => (/* binding */ editForm)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\n\n\n\nfunction editForm(formToEdit){\n    (0,___WEBPACK_IMPORTED_MODULE_1__.createBoard)()\n    const projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.retrieveProjects)()\n    const formContainer = document.createElement(\"div\")\n    formContainer.style.display = \"flex\"\n    formContainer.style.flexDirection = \"column\"\n    const todoForm = document.createElement(\"form\")\n    todoForm.style.display = \"flex\"\n    todoForm.style.flexDirection = \"row\"\n    const p = document.createElement(\"h4\")\n    p.textContent = \"Edit to-do item\"\n\n    const pName = document.createElement(\"input\")\n    pName.value = formToEdit.name\n    pName.required = true\n    pName.type = \"text\"\n\n    const pDetails = document.createElement(\"input\")\n    pDetails.value = formToEdit.details\n    pDetails.required = true\n    pDetails.type = \"text\"\n\n    const pDate = document.createElement(\"input\")\n    pDate.required =  true\n    pDate.value = formToEdit.date\n    pDate.type = \"date\"\n\n    const pPriority = document.createElement(\"select\")\n    const pPriorityText = document.createElement(\"p\")\n    pPriority.required = true\n    pPriority.options[pPriority.options.length] = new Option('', 'Value1');\n    pPriority.options[pPriority.options.length] = new Option('Low', 'Value1');\n    pPriority.options[pPriority.options.length] = new Option('Medium', 'Value2');\n    pPriority.options[pPriority.options.length] = new Option('High', 'Value3');\n    pPriority.options[pPriority.selectedIndex].text = formToEdit.priority\n    const pProjectBelongsTo = document.createElement(\"select\")\n    pProjectBelongsTo.required = true\n    const pProjectText = document.createElement(\"p\")\n    pProjectText.textContent = \"Project\"\n    const pContainer = document.querySelector(\".pContainer\")\n    Array.from(pContainer.children).forEach((node)=>pProjectBelongsTo.options[pProjectBelongsTo.options.length] = new Option(\"\", 'Value1'));\n    Array.from(pContainer.children).forEach((node)=>pProjectBelongsTo.options[pProjectBelongsTo.options.length] = new Option(node.textContent, 'Value1'));\n    pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text = formToEdit.projectBelongsTo\n    const finishBtn = document.createElement(\"button\")\n    finishBtn.textContent = \"Submit\"\n    finishBtn.addEventListener(\"click\",(e) => {\n        e.preventDefault()\n        for (const project of projects){\n            console.log(formToEdit.projectBelongsTo)\n            if (project.name == formToEdit.projectBelongsTo){\n                console.log(\"workHere\")\n                const index = project.todos.indexOf(formToEdit)\n                project.todos.splice(index, 1)\n                break\n            }\n        }\n        for (const project of projects){\n            if (project.name == pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text){\n                console.log(\"here\")\n                project.todos.push(new _todo__WEBPACK_IMPORTED_MODULE_0__.todo(pName.value,pDetails.value,pDate.value,pPriority.options[pPriority.selectedIndex].text,pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text))\n                ;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_3__.generateTodos)(project.todos)\n\n            }  \n        }\n        (0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.populateProjects)(projects)\n    })\n    formContainer.appendChild(p)\n    todoForm.appendChild(pName)\n    todoForm.appendChild(pDetails)\n    todoForm.appendChild(pDate)\n    todoForm.appendChild(pPriorityText)\n    todoForm.appendChild(pPriority)\n    todoForm.appendChild(pProjectText)\n    todoForm.appendChild(pProjectBelongsTo)\n    todoForm.appendChild(finishBtn)\n    const formbar = document.querySelector(\".formBar\")\n    formContainer.appendChild(todoForm)\n    formbar.appendChild(formContainer)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/editForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard),\n/* harmony export */   projectHandle: () => (/* binding */ projectHandle),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm */ \"./src/todoForm.js\");\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\");\n/* harmony import */ var _noteForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noteForm */ \"./src/noteForm.js\");\n/* harmony import */ var _projectHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectHandlers */ \"./src/projectHandlers.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _noteLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noteLoader */ \"./src/noteLoader.js\");\n\n\n\n\n\n\n\n\n//finish data store on the website\nconst addBtn = document.querySelector(\".add\")\nconst hider = document.querySelector(\".hider\")\nconst projectHandle = new _projectHandlers__WEBPACK_IMPORTED_MODULE_3__.projectHandler(\"Example\")\nconst noteBtn = document.querySelector(\".notes\")\nconst header = document.querySelector(\"header\")\nheader.textContent = \"To-Do List: Example\"\n\nif (localStorage.getItem(\"projects\") === null){\n    (0,_storageHandler__WEBPACK_IMPORTED_MODULE_4__.populateProjects)([projectHandle])\n}\n\nif (localStorage.getItem(\"notes\") === null){\n    (0,_storageHandler__WEBPACK_IMPORTED_MODULE_4__.populateNotes)([])\n}\n\nconst projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_4__.retrieveProjects)(\"projects\")\n;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_5__.generateTodos)(projects[0].todos)\n\nfor (const project of projects){\n    const pContainer = document.querySelector(\".pContainer\")\n    const button = document.createElement(\"button\")\n    button.textContent = project.name\n    button.addEventListener(\"click\",(e)=>{\n        const projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_4__.retrieveProjects)(\"projects\")\n        e.preventDefault()\n        for (const project of projects){\n            if (e.target.textContent == project.name){\n                const header = document.querySelector(\"header\")\n                header.textContent = \"To-Do List: \"+project.name\n                ;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_5__.generateTodos)(project.todos)\n                break\n            }\n        }\n    })\n    pContainer.appendChild(button)\n}\n\n\n\nfunction createBoard(){\n    const body = document.querySelector(\"body\")\n    hider.classList.add(\"hiderOn\")\n    const board = document.createElement(\"div\")\n    board.classList.add(\"board\")\n    const sidebar = document.createElement(\"div\")\n    sidebar.classList.add(\"boardSideBar\")\n    const noteBtn = document.createElement(\"button\")\n    noteBtn.textContent = \"New Note\"\n    noteBtn.addEventListener(\"click\",_noteForm__WEBPACK_IMPORTED_MODULE_2__.noteForm)\n    const projectBtn = document.createElement(\"button\")\n    projectBtn.addEventListener(\"click\",_projectForm__WEBPACK_IMPORTED_MODULE_1__.projectForm)\n    projectBtn.textContent = \"New Project\"\n    const todoBtn = document.createElement(\"button\")\n    todoBtn.textContent = \"New To Do\"\n    todoBtn.addEventListener(\"click\",_todoForm__WEBPACK_IMPORTED_MODULE_0__.todoForm)\n    const formBar = document.createElement(\"div\")\n    formBar.classList.add(\"formBar\")\n    sidebar.appendChild(noteBtn)\n    sidebar.appendChild(projectBtn)\n    sidebar.appendChild(todoBtn)\n    board.appendChild(sidebar)\n    board.appendChild(formBar)\n    body.appendChild(board)\n    \n}\n\nfunction hiderOff(){\n    hider.classList.remove(\"hiderOn\")\n    document.querySelector(\".board\").remove()\n}\n\nhider.addEventListener(\"click\",hiderOff)\naddBtn.addEventListener(\"click\",createBoard)\nnoteBtn.addEventListener(\"click\",(e) => {\n    header.textContent = \"Notes\"\n    e.preventDefault()\n    ;(0,_noteLoader__WEBPACK_IMPORTED_MODULE_6__.generateNotes)()\n})\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   note: () => (/* binding */ note)\n/* harmony export */ });\nclass note {\n    constructor(name,details){\n        this.name = name\n        this.details = details\n    }\n    changeDetails(newDetails){\n        this.details = newDetails\n    }\n    changeName(newName){\n        this.name = newName\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/note.js?");

/***/ }),

/***/ "./src/noteForm.js":
/*!*************************!*\
  !*** ./src/noteForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noteForm: () => (/* binding */ noteForm)\n/* harmony export */ });\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n/* harmony import */ var _noteLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noteLoader */ \"./src/noteLoader.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n\n\n\nfunction noteForm(){\n    const notes = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.retrieveNotes)()\n    const noteForm = document.createElement(\"form\")\n\n    const p = document.createElement(\"h4\")\n    p.textContent = \"New Note\"\n\n    const pName = document.createElement(\"input\")\n    pName.placeholder = \"Name of to-do note\"\n    pName.required = true\n    pName.type = \"text\"\n\n    const pDetails = document.createElement(\"input\")\n    pDetails.placeholder = \"Details\"\n    pDetails.required = true\n    pDetails.type = \"text\"\n\n    \n    const finishBtn = document.createElement(\"button\")\n    finishBtn.textContent = \"Submit\"\n    finishBtn.prevent\n    finishBtn.addEventListener(\"click\",(e) => {\n        e.preventDefault();\n        notes.push(new _note__WEBPACK_IMPORTED_MODULE_0__.note(pName.value,pDetails.value))\n        ;(0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.populateNotes)(notes)\n        const header = document.querySelector(\"header\")\n        header.textContent = \"Notes\"\n        ;(0,_noteLoader__WEBPACK_IMPORTED_MODULE_1__.generateNotes)()\n    })\n    noteForm.appendChild(p)\n    noteForm.appendChild(pName)\n    noteForm.appendChild(pDetails)\n    noteForm.appendChild(finishBtn)\n    const formbar = document.querySelector(\".formBar\")\n    formbar.appendChild(noteForm)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/noteForm.js?");

/***/ }),

/***/ "./src/noteLoader.js":
/*!***************************!*\
  !*** ./src/noteLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateNotes: () => (/* binding */ generateNotes)\n/* harmony export */ });\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n\n\nfunction generateNotes(){\n    console.log(\"called\")\n    const page = document.querySelector(\".bigContainer\")\n    const notes = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_0__.retrieveNotes)()\n    page.replaceChildren()\n    for (const note of notes){\n        console.log(note)\n        const container = document.createElement(\"div\")\n        container.classList.add(\"note\")\n        container.classList.add(note.name)\n        const title = document.createElement(\"h4\")\n        title.textContent = note.name\n        const details = document.createElement(\"p\")\n        details.textContent = note.details            \n        const removeBtn = document.createElement(\"button\")\n        removeBtn.textContent = \"X\"\n        removeBtn.classList.add(\"remove\")\n        removeBtn.addEventListener(\"click\",(e)=>{\n            for (const note of notes){\n                if (e.target.parentNode.classList[1] == note.name){\n                    const index = notes.indexOf(note)\n                    notes.splice(index,1)\n                    e.target.parentNode.remove()\n                }\n                (0,_storageHandler__WEBPACK_IMPORTED_MODULE_0__.populateNotes)(notes)\n            }\n        })\n        container.appendChild(title)\n        container.appendChild(details)\n        container.appendChild(removeBtn)\n        page.appendChild(container)\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/noteLoader.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTodos: () => (/* binding */ generateTodos)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n/* harmony import */ var _editForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editForm */ \"./src/editForm.js\");\n\n\n\nfunction generateTodos(todos){\n    const page = document.querySelector(\".bigContainer\")\n    page.replaceChildren()\n    for (const todo of todos){\n        const container = document.createElement(\"div\")\n        container.classList.add(\"todo\")\n        container.classList.add(todo.name)\n        const title = document.createElement(\"h4\")\n        title.textContent = todo.name\n        const details = document.createElement(\"p\")\n        details.textContent = todo.details\n        const date = document.createElement(\"p\")\n        date.textContent = todo.date\n        const priority = document.createElement(\"p\")\n        priority.textContent = todo.priority\n        const project = document.createElement(\"p\")\n        project.textContent = todo.project\n        const finished = document.createElement(\"p\")\n        finished.textContent = \"Completed\"\n        const finishBox = document.createElement(\"input\")\n        finishBox.type = \"checkbox\"\n        finishBox.checked = todo.completed\n        finishBox.style.width = \"50px\"\n        finished.style.fontSize = \"0.5em\"\n        finishBox.style.height = \"50px\"\n        finishBox.addEventListener(\"click\",(e)=>{\n            const projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_1__.retrieveProjects)()\n            for (const project of projects){\n                if (project.name == todo.projectBelongsTo){\n                    for (const todo of todos){\n                        if (e.target.parentNode.firstChild.textContent == todo.name){\n                            if (todo.completed==true){\n                                project.todos[todos.indexOf(todo)].completed = false\n                            } else {\n                                project.todos[todos.indexOf(todo)].completed = true\n                            }\n                        (0,_storageHandler__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(projects)\n                        }\n                    }\n                }\n            }\n        })\n        const removeBtn = document.createElement(\"button\")\n        removeBtn.textContent = \"X\"\n        removeBtn.classList.add(\"remove\")\n        removeBtn.addEventListener(\"click\",(e)=>{\n            const projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_1__.retrieveProjects)()\n            for (const project of projects){\n                if (project.name == todo.projectBelongsTo){\n                    for (const todo of todos){\n                        if (e.target.parentNode.classList[1] == todo.name){\n                            e.target.parentNode.remove()\n                            console.log(project.todos)\n                            project.todos.splice(project.todos.indexOf(todo),1)\n                        }\n                        (0,_storageHandler__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(projects)\n                    }\n                }\n            }\n        })\n        const editBtn = document.createElement(\"button\")\n        editBtn.textContent = \"Edit details\"\n        editBtn.classList.add(\"edit\")\n        editBtn.addEventListener(\"click\",(e)=>{\n            for (const todo of todos){\n                if (e.target.parentNode.firstChild.textContent == todo.name){\n                    (0,_editForm__WEBPACK_IMPORTED_MODULE_2__.editForm)(todo)\n                }\n            } \n        })\n\n        container.appendChild(title)\n        container.appendChild(details)\n        container.appendChild(date)\n        container.appendChild(priority)\n        container.appendChild(project)\n        container.appendChild(finished)\n        container.appendChild(finishBox)\n        container.appendChild(removeBtn)\n        container.appendChild(editBtn)\n        page.appendChild(container)\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/pageLoad.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectForm: () => (/* binding */ projectForm)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _projectHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHandlers */ \"./src/projectHandlers.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n\n\n \n\nfunction projectForm(){\n    const projectForm = document.createElement(\"form\")\n    const projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.retrieveProjects)()\n    const p = document.createElement(\"h4\")\n    p.textContent = \"New Project\"\n\n    const pName = document.createElement(\"input\")\n    pName.placeholder = \"Name of project\"\n    pName.required = true\n    pName.type = \"text\"\n\n    const finishBtn = document.createElement(\"button\")\n    finishBtn.textContent = \"Submit\"\n    finishBtn.addEventListener(\"click\",(e) => {\n        e.preventDefault()\n        const pContainer = document.querySelector(\".pContainer\")\n        const button = document.createElement(\"button\")\n        button.textContent = pName.value\n        new _projectHandlers__WEBPACK_IMPORTED_MODULE_1__.projectHandler(pName.value)\n        button.addEventListener(\"click\",(e)=>{\n            e.preventDefault()\n            projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.retrieveProjects)()\n            for (const project of projects){\n                if (e.target.textContent == project.name){\n                    const header = document.querySelector(\"header\")\n                    header.textContent = \"To-Do List: \"+project.name\n                    ;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.generateTodos)(project.todos)\n                    break\n                }\n            }\n        })\n        pContainer.appendChild(button)\n        projects.push(new _projectHandlers__WEBPACK_IMPORTED_MODULE_1__.projectHandler(pName.value))\n        ;(0,_storageHandler__WEBPACK_IMPORTED_MODULE_2__.populateProjects)(projects)\n    })\n    projectForm.appendChild(p)\n    projectForm.appendChild(pName)\n    projectForm.appendChild(finishBtn)\n    const formbar = document.querySelector(\".formBar\")\n    formbar.appendChild(projectForm)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectForm.js?");

/***/ }),

/***/ "./src/projectHandlers.js":
/*!********************************!*\
  !*** ./src/projectHandlers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectHandler: () => (/* binding */ projectHandler)\n/* harmony export */ });\n/* harmony import */ var _editForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editForm */ \"./src/editForm.js\");\n\n\nclass projectHandler{\n    constructor(name){\n        this.name = name\n        this.todos = []\n    }\n    addTodo(newTodo){\n        this.todos.push(newTodo)\n        this.generateTodos()\n    }\n    removeTodo(project){\n        const index = this.todos.indexOf(project)\n        this.todos.splice(index, 1)\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projectHandlers.js?");

/***/ }),

/***/ "./src/storageHandler.js":
/*!*******************************!*\
  !*** ./src/storageHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   populateNotes: () => (/* binding */ populateNotes),\n/* harmony export */   populateProjects: () => (/* binding */ populateProjects),\n/* harmony export */   retrieveNotes: () => (/* binding */ retrieveNotes),\n/* harmony export */   retrieveProjects: () => (/* binding */ retrieveProjects)\n/* harmony export */ });\n\nfunction populateProjects(projects){\n    localStorage.setItem(\"projects\",JSON.stringify(projects))\n}\n\nfunction retrieveProjects(){\n    return JSON.parse(localStorage.getItem(\"projects\"))\n}\n\nfunction populateNotes(notes){\n    localStorage.setItem(\"notes\",JSON.stringify(notes))\n}\n\nfunction retrieveNotes(){\n    return JSON.parse(localStorage.getItem(\"notes\"))\n}\n\n\n//# sourceURL=webpack://todo-list/./src/storageHandler.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\n    constructor(name,details,date,priority,projectBelongsTo){\n        this.name = name\n        this.details = details\n        this.date = date\n        this.priority = priority\n        this.completed = false\n        this.projectBelongsTo = projectBelongsTo\n    }\n    setCompleted(){\n        if (this.completed){\n            this.completed = false\n        } else {\n            this.completed = true\n        }\n    }\n    changeDate(newDate){\n        this.date = newDate\n    }\n    changeDetails(newDetails){\n        this.details = newDetails\n    }\n    changeName(newName){\n        this.name = newName\n    }\n    changeProjectBelongsTo(newProject){\n        this.projectBelongsTo = newProject\n    }\n    changePriority(newPriority){\n        this.priority = newPriority\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoForm: () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\n\nfunction todoForm(){\n    const projects = (0,_storageHandler__WEBPACK_IMPORTED_MODULE_1__.retrieveProjects)()\n    const formContainer = document.createElement(\"div\")\n    formContainer.style.display = \"flex\"\n    formContainer.style.flexDirection = \"column\"\n    const todoForm = document.createElement(\"form\")\n    todoForm.style.display = \"flex\"\n    todoForm.style.flexDirection = \"row\"\n    const p = document.createElement(\"h4\")\n    p.textContent = \"New To-Do\"\n\n    const pName = document.createElement(\"input\")\n    pName.placeholder = \"Name of to-do note\"\n    pName.required = true\n    pName.type = \"text\"\n\n    const pDetails = document.createElement(\"input\")\n    pDetails.placeholder = \"Details\"\n    pDetails.required = true\n    pDetails.type = \"text\"\n\n    const pDate = document.createElement(\"input\")\n    pDate.required =  true\n    pDate.type = \"date\"\n\n    const pPriority = document.createElement(\"select\")\n    const pPriorityText = document.createElement(\"p\")\n    pPriority.required = true\n    pPriorityText.textContent = \"Priority\"\n    pPriority.options[pPriority.options.length] = new Option('Low', 'Value1');\n    pPriority.options[pPriority.options.length] = new Option('Medium', 'Value2');\n    pPriority.options[pPriority.options.length] = new Option('High', 'Value3');\n\n    const pProjectBelongsTo = document.createElement(\"select\")\n    pProjectBelongsTo.required = true\n    const pProjectText = document.createElement(\"p\")\n    pProjectText.textContent = \"Project\"\n\n    const pContainer = document.querySelector(\".pContainer\")\n    Array.from(pContainer.children).forEach((node)=>pProjectBelongsTo.options[pProjectBelongsTo.options.length] = new Option(node.textContent, 'Value1'));\n    const finishBtn = document.createElement(\"button\")\n    finishBtn.textContent = \"Submit\"\n    finishBtn.addEventListener(\"click\",(e) => {\n        e.preventDefault()\n        for (const project of projects){\n\n            if (project.name == pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text){\n                console.log(project)\n                project.todos.push(new _todo__WEBPACK_IMPORTED_MODULE_2__.todo(pName.value,pDetails.value,pDate.value,pPriority.options[pPriority.selectedIndex].text,pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text))\n                ;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.generateTodos)(project.todos)\n                break\n            }\n        }\n        (0,_storageHandler__WEBPACK_IMPORTED_MODULE_1__.populateProjects)(projects)\n    })\n    formContainer.appendChild(p)\n    todoForm.appendChild(pName)\n    todoForm.appendChild(pDetails)\n    todoForm.appendChild(pDate)\n    todoForm.appendChild(pPriorityText)\n    todoForm.appendChild(pPriority)\n    todoForm.appendChild(pProjectText)\n    todoForm.appendChild(pProjectBelongsTo)\n    todoForm.appendChild(finishBtn)\n    const formbar = document.querySelector(\".formBar\")\n    formContainer.appendChild(todoForm)\n    formbar.appendChild(formContainer)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todoForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;