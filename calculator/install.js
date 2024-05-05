function installCalculator() {
    let EXapps = document.getElementById('EXapps');
    EXapps.innerHTML += `
		<div class="window" id="calculator">
  <div class="tabs">
    <button class="tabaccIcon" onClick="closeApp('calculator')"><img src="systemH/accessibility/close.png"></button>
    <button class="tabaccIcon" onClick="miniApp('calculator')"><img src="systemH/accessibility/minimize.png"></button>
  </div>
  <div class="calculator">
    <div class="calculator-display" id="display">0</div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorClearDisplay()">C</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('%')">%</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('/')">/</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('7')">7</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('8')">8</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('9')">9</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('*')">*</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('4')">4</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('5')">5</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('6')">6</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('-')">-</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('1')">1</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('2')">2</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('3')">3</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('+')">+</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('0')">0</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('.')">.</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorCalculate()">=</button>
    </div>
  </div>
</div>
    `;

    let deskpad = document.getElementById('deskpad');
    deskpad.innerHTML += `
	<button class="padIcon" onClick="openApp('calculator')">
	<img src="systemH/appstore/calculator/calculator.png" class="padImage">
	</button>
    `;

    appstyles.push("https://webteddystudioofficial.github.io/universe-appstore/program/calculator.css");

    appcontent += `
	<div class="window" id="calculator">
  <div class="tabs">
    <button class="tabaccIcon" onClick="closeApp('clicker')"><img src="systemH/accessibility/close.png"></button>
    <button class="tabaccIcon" onClick="miniApp('clicker')"><img src="systemH/accessibility/minimize.png"></button>
  </div>
  <div class="calculator">
    <div class="calculator-display" id="display">0</div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorClearDisplay()">C</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('%')">%</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('/')">/</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('7')">7</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('8')">8</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('9')">9</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('*')">*</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('4')">4</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('5')">5</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('6')">6</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('-')">-</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('1')">1</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('2')">2</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('3')">3</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorAppendChar('+')">+</button>
    </div>
    <div class="calculator-row">
      <button class="calculator-btn" onclick="calculatorAppendChar('0')">0</button>
      <button class="calculator-btn" onclick="calculatorAppendChar('.')">.</button>
      <button class="calculator-btn calculator-operator" onclick="calculatorCalculate()">=</button>
    </div>
  </div>
</div>
    `;
	
    appsdesk += `
	<button class="padIcon" onClick="openApp('calculator')">
	<img src="https://webteddystudioofficial.github.io/universe-appstore/calculator.png" class="padImage">
	</button>
    `;

    installedApps.push("installCalculator");

    appscripts.push("https://webteddystudioofficial.github.io/universe-appstore/program/calculator.js");

	var script = document.createElement('script');
	script.src = "https://webteddystudioofficial.github.io/universe-appstore/program/calculator.js";
	document.head.appendChild(script);

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://webteddystudioofficial.github.io/universe-appstore/program/calculator.css";
    document.head.appendChild(link);

    saveApps();
    toggletheme();
    toggletheme();

    document.getElementById('installCalculator').innerHTML = "Installed";
    document.getElementById('installCalculator').disabled = true;
}
