function installTodo() {
    let EXapps = document.getElementById('EXapps');
    EXapps.innerHTML += `
<div class="window" id="todo">
        <div class="tabs">
            <button class="tabaccIcon" onClick="closeApp('todo')"><img src="systemH/accessibility/close.png"></button>
            <button class="tabaccIcon" onClick="miniApp('todo')"><img src="systemH/accessibility/minimize.png"></button>
        </div>
        <div class="Todo-container">
            <h1 class="Todo-h1">To-Do List</h1>
            <div class="Todo-input-container">
                <input type="text" id="Todo-taskInput" class="Todo-input" placeholder="Enter task...">
                <input type="time" id="Todo-timeInput" class="Todo-input" value="00:00">
                <button onclick="TodoaddTask()" class="Todo-button">Add Task</button>
            </div>
            <ul id="Todo-taskList" class="Todo-ul"></ul>
        </div>
    </div>
    `;

    let deskpad = document.getElementById('deskpad');
    deskpad.innerHTML += `
		<button class="padIcon" onClick="openApp('todo')">
			<img class="padImage" src="systemH/appstore/todo/todo.png">
		</button>
    `;

    appstyles.push("systemH/appstore/todo/program/todo.css");
	appscripts.push("systemH/appstore/todo/program/todo.js");

    appcontent += `
	<div class="window" id="todo">
        <div class="tabs">
            <button class="tabaccIcon" onClick="closeApp('todo')"><img src="systemH/accessibility/close.png"></button>
            <button class="tabaccIcon" onClick="miniApp('todo')"><img src="systemH/accessibility/minimize.png"></button>
        </div>
        <div class="Todo-container">
            <h1 class="Todo-h1">To-Do List</h1>
            <div class="Todo-input-container">
                <input type="text" id="Todo-taskInput" class="Todo-input" placeholder="Enter task...">
                <input type="time" id="Todo-timeInput" class="Todo-input" value="00:00">
                <button onclick="TodoaddTask()" class="Todo-button">Add Task</button>
            </div>
            <ul id="Todo-taskList" class="Todo-ul"></ul>
        </div>
    </div>
    `;

    appsdesk += `
		<button class="padIcon" onClick="openApp('todo')">
			<img class="padImage" src="systemH/appstore/todo/todo.png">
		</button>
    `;

    installedApps.push("installTodo");

	var script = document.createElement('script');
	script.src = "systemH/appstore/todo/program/todo.js";
	document.head.appendChild(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "systemH/appstore/todo/program/todo.css";
    document.head.appendChild(link);

    saveApps();
    toggletheme();
    toggletheme();

    document.getElementById('installTodo').innerHTML = "Installed";
    document.getElementById('installTodo').disabled = true;
}
