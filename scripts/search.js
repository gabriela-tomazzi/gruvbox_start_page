function search(event) {
    var x = event.key;
    if (x == "Enter") {
        
		var input = document.getElementById('search_input');
		let text = input.value;
		
		if (text[0] == '!') {
			url = 'https://www.google.com/?q=' + text;
		} else {
			url = 'https://duckduckgo.com/?q=' + text;
		}

    }
	window.open(url, '_self');
}