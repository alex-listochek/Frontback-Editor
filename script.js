//полноэкранный режим F11

function toggleFullScreen() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
	(!document.mozFullScreen && !document.webkitIsFullScreen)) {
	if (document.documentElement.requestFullScreen) {  
		document.documentElement.requestFullScreen();  
		} else if (document.documentElement.mozRequestFullScreen) {  
		document.documentElement.mozRequestFullScreen();  
	} else if (document.documentElement.webkitRequestFullScreen) {  
		document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		}  
	} else {  
		if (document.cancelFullScreen) {  
		document.cancelFullScreen();  
		} else if (document.mozCancelFullScreen) {  
		document.mozCancelFullScreen();  
		} else if (document.webkitCancelFullScreen) {  
		document.webkitCancelFullScreen();  
		}  
	}  
}

//демонстрация выполнения кода

try {

function update() {
	var res = document.getElementById('preview').contentWindow.document;
	res.open();
	res.write('<style>' + cssEditor.getValue() + '</style>');
	res.write('<script>' + jsEditor.getValue() + '</script>');
	res.write(htmlEditor.getValue() + '<script>' + jsEditor.getValue() + '</script>');
	res.close();
	console.clear();
	}
	
	} catch (err) {
	console.log("Exception succeeded")
}