function renderAppstore() {
document.getElementById('appstore').innerHTML = `
<div class="tabs">
			<button class="tablink" onClick="openTab('appstore-home')">Home</button>
			<button class="tabaccIcon" onClick="closeApp('appstore')"><img src="systemH/accessibility/close.png"></button>
   <button class="tabaccIcon" onClick="togglefullscreen()"><img src="systemH/accessibility/fullscreen.png"></button>
			<button class="tabaccIcon" onClick="miniApp('appstore')"><img src="systemH/accessibility/minimize.png"></button>
		</div>
		<div class="tabcontent" id="appstore-home">
  			<center>
				<h1>Universe Appstore</h1>
				<button class="padIcon" onClick="openTab('appstore-clicker')"><img class="padImage" src="systemH/appstore/clicker/clicker.png"></button>
				<button class="padIcon" onClick="openTab('appstore-calculator')"><img class="padImage" src="systemH/appstore/calculator/calculator.png"></button>
				<button class="padIcon" onClick="openTab('appstore-timer')"><img class="padImage" src="systemH/appstore/timer/timer.png"></button>
				<button class="padIcon" onClick="openTab('appstore-new')"><img class="padImage" src="https://webteddystudioofficial.github.io/universe-appstore/new.png"></button><br><br>
				<button class="warningButton" onClick="uninstallKeep()">Uninstall but keep saves</button><br><br>
				<button class="warningButton" onClick="uninstallAll()">Uninstall all apps</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-clicker">
			<center>
				<h1>Universe Clicker</h1>
				<img class="apsimg" src="systemH/appstore/clicker/clicker.png"><br>
				<span>By: GroupSSalt</span><br><br>
				<button class="button" onClick="installClicker()" id="installClicker">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-calculator">
			<center>
				<h1>AI Calculator</h1>
				<img class="apsimg" src="systemH/appstore/calculator/calculator.png"><br>
				<span>By: ChatGPT</span><br><br>
				<button class="button" onClick="installCalculator()" id="installCalculator">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-timer">
			<center>
				<h1>Timer</h1>
				<img src="systemH/appstore/timer/timer.png" class="apsimg"><br>
				<span>By: GroupSSalt</span><br><br>
				<button class="button" id="installTimer" onClick="installTimer()">Install</button>
			</center>
		</div>
		<div class="tabcontent" id="appstore-new">
			<center>
				<img class="apsimg" src="https://webteddystudioofficial.github.io/universe-appstore/new.png"><br>
				<h1>Make a new app</h1>
				<p>To make a new app. Write all your code and send it RAW (don't send a file, send text) to <b>saltydevelopers@gmail.com</b><br>we will take care of your request and notify you if your app will be added to the Appstore!</p>
			</center>
		</div>
`;
	toggletheme();
	toggletheme();
}

let shouldAppend = true;
function append() {
    let srcs = [
        "https://webteddystudioofficial.github.io/universe-appstore/clicker/install.js",
        "https://webteddystudioofficial.github.io/universe-appstore/timer/install.js",
        "https://webteddystudioofficial.github.io/universe-appstore/calculator/install.js"
    ];
	if (shouldAppend !== false) {
    srcs.forEach(function(src) {
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script); // Changed from document.appendChild(script) to document.body.appendChild(script)
    });
	}
}
