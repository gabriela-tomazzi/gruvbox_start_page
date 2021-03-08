function search(event) {
    var x = event.key;
    if (x == "Enter") {
        
		var input = document.getElementById('search_input');
		let text = input.value;
		url = 'https://duckduckgo.com/?q=' + text;

    }
	window.open(url, '_self');

	input.value = "";
	console.log('rodou');
}