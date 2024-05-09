function installTimer() {
    let EXapps = document.getElementById('EXapps');
    EXapps.innerHTML += `
        <div class="window" id="timer">
            <div class="tabs">
                <button class="tabaccIcon" onClick="closeApp('timer')"><img src="systemH/accessibility/close.png"></button>
                <button class="tabaccIcon" onClick="togglefullscreen()"><img src="systemH/accessibility/maximize.png"></button>
                <button class="tabaccIcon" onClick="miniApp('timer')"><img src="systemH/accessibility/minimize.png"></button>
            </div>
            <div class="timer-container">
                <div id="timer-display">00:00:00</div>
                <button class="timer-button" id="timer-start-stop" onclick="timer_start_stop()">Start</button>
                <button class="timer-button" id="timer-reset" onclick="timer_reset()">Reset</button>
            </div>
        </div>
    `;

    let deskpad = document.getElementById('deskpad');
    deskpad.innerHTML += `
        <button class="padIcon" onClick="openApp('timer')">
            <img src="systemH/appstore/timer/timer.png" class="padImage">
        </button>
    `;

    appstyles.push("systemH/appstore/timer/program/timer.css");
    appscripts.push("systemH/appstore/timer/program/timer.js");

    appcontent += `
        <div class="window" id="timer">
            <div class="tabs">
                <button class="tabaccIcon" onClick="closeApp('')"><img src="systemH/accessibility/close.png"></button>
                <button class="tabaccIcon" onClick="togglefullscreen()"><img src="systemH/accessibility/maximize.png"></button>
                <button class="tabaccIcon" onClick="miniApp('timer')"><img src="systemH/accessibility/minimize.png"></button>
            </div>
            <div class="timer-container">
                <div id="timer-display">00:00:00</div>
                <button class="timer-button" id="timer-start-stop" onclick="timer_start_stop()">Start</button>
                <button class="timer-button" id="timer-reset" onclick="timer_reset()">Reset</button>
            </div>
        </div>
    `;

    appsdesk += `
        <button class="padIcon" onClick="openApp('timer')">
            <img src="systemH/appstore/timer/timer.png" class="padImage">
        </button>
    `;

    installedApps.push("installTimer");

    var script = document.createElement('script');
    script.src = "systemH/appstore/timer/program/timer.js";
    document.head.appendChild(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "systemH/appstore/timer/program/timer.css";
    document.head.appendChild(link);

    saveApps();
    toggletheme();
    toggletheme();

    document.getElementById('installTimer').innerHTML = "Installed";
    document.getElementById('installTimer').disabled = true;
}
