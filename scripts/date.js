var date = new Date;
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
let div_hora = document.getElementById('div_hora');

setInterval(()=> {
	var hora = date.getHours();
	var min = date.getMinutes();
	var day = date.getDate();
	var month = date.getMonth();
	let month_full = '';

	for(let i in months) {
		if(month == i) {
			month_full = months[i];
		}
	}
	
	div_hora.innerHTML = `${month_full} ${day}, ${hora}:${min}`;
}, 1000)