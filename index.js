
	const currentTheme = localStorage.getItem("theme");
	const stylesheet = document.querySelector("#stylesheet");
	var btn = document.querySelector(".but");
	var theme = "light";
	
	function onInit(){
		if (currentTheme != "dark" && currentTheme != "light") { localStorage.setItem("theme", "light"); }
		if (currentTheme == "dark") { toggleTheme(); }
	};
	
	function toggleTheme() {
		if (theme == "dark" || currentTheme == null) {	stylesheet.href = "index-light.css"; theme = "light"; }
							else {	stylesheet.href = "index-dark.css";	 theme = "dark"; }
		localStorage.setItem("theme", theme);
		document.querySelector(".but").textContent = "mhhmmm " + theme + " mode";
		document.querySelector("#framer").contentWindow.location.reload();
	};
