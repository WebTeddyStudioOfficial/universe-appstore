function installDog() {
    let EXapps = document.getElementById('EXapps');
    EXapps.innerHTML += `
		<div class="window" id="petdog">
			<div class="tabs">
				<button class="tabaccIcon" onClick="closeApp('petdog')"><img src="systemH/accessibility/close.png"></button>
				<button class="tabaccIcon" onClick="miniApp('petdog')"><img src="systemH/accessibility/minimize.png"></button>
			</div>
			<div class="petdog">
				<button id="petdogButton" class="petdogButton" onClick="petdog()">Pet Dog</button>
			</div>
		</div>
    `;

    let deskpad = document.getElementById('deskpad');
    deskpad.innerHTML += `
		<button class="padIcon" onClick="openApp('petdog')">
			<img src="systemH/appstore/petdog/petdog.png" class="padImage">
		</button>
    `;

    appstyles.push("systemH/appstore/petdog/program/petdog.css");
	appscripts.push("systemH/appstore/petdog/program/petdog.js");

    appcontent += `
		<div class="window" id="petdog">
			<div class="tabs">
				<button class="tabaccIcon" onClick="closeApp('petdog')"><img src="systemH/accessibility/close.png"></button>
				<button class="tabaccIcon" onClick="miniApp('petdog')"><img src="systemH/accessibility/minimize.png"></button>
			</div>
			<div class="petdog">
				<button id="petdogButton" class="petdogButton" onClick="petdog()">Pet Dog</button>
			</div>
		</div>
    `;

    appsdesk += `
		<button class="padIcon" onClick="openApp('petdog')">
			<img src="systemH/appstore/petdog/petdog.png" class="padImage">
		</button>
    `;

    installedApps.push("installDog");

	var script = document.createElement('script');
	script.src = "systemH/appstore/petdog/program/petdog.js";
	document.head.appendChild(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "systemH/appstore/petdog/program/petdog.css";
    document.head.appendChild(link);

    saveApps();
    toggletheme();
    toggletheme();
	quickLoadAdder('systemH/appstore/petdog/program/puppy1.png', 'image');
	quickLoadAdder('systemH/appstore/petdog/program/puppy2.png', 'image');
	quickLoadAdder('systemH/appstore/petdog/program/puppy3.png', 'image');

        var preload = document.createElement('link');
        preload.href = 'systemH/appstore/petdog/program/puppy1.png';
        preload.rel = 'preload';
        preload.as = 'image';
        document.head.appendChild(preload);

		var preload = document.createElement('link');
        preload.href = 'systemH/appstore/petdog/program/puppy2.png';
        preload.rel = 'preload';
        preload.as = 'image';
        document.head.appendChild(preload);

		var preload = document.createElement('link');
        preload.href = 'systemH/appstore/petdog/program/puppy3.png';
        preload.rel = 'preload';
        preload.as = 'image';
        document.head.appendChild(preload);

    document.getElementById('installDog').innerHTML = "Installed";
    document.getElementById('installDog').disabled = true;
}
