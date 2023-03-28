	const stylesheet = document.querySelector("#stylesheet");
	var btn = document.querySelector(".but");
	var theme = "light";
	
	function onInit(){
		if (localStorage.getItem("theme") == null) { localStorage.setItem("theme", theme); }
		if (localStorage.getItem("theme") == "dark") { toggleTheme(); }
	};
	
	function toggleTheme() {
		if (theme == "dark") {  stylesheet.href = "index-light.css"; theme = "light"; }
				else {	stylesheet.href = "index-dark.css"; theme = "dark"; }
		localStorage.setItem("theme", theme);
		document.querySelector(".but").textContent = "mhhmmm " + theme + " mode";
		document.querySelector("#framer").contentWindow.location.reload();
	};
