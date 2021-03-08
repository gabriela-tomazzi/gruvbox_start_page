var date = new Date;

let div_hora = document.getElementById('div_hora');

setInterval(()=> {
	var hora = date.getHours();
	var min = date.getMinutes();
	var day = date.getDate();
	var month = date.getMonth();
	let month_full = '';

	switch(month) {
		case 0:
			month_full = 'Jan';
			break;
		case 1:
			month_full = 'Fev';
			break;
		case 2:
			month_full = 'Mar';
			break;
		case 3:
			month_full = 'Abr';
			break;
		case 4:
			month_full = 'Mai';
			break;
		case 5:
			month_full = 'Jun';
			break;
		case 6:
			month_full = 'jul';
			break;
		case 7:
			month_full = 'ago';
			break;
		case 8:
			month_full = 'Set';
			break;
		case 9:
			month_full = 'Out';
			break;
		case 10:
			month_full = 'Nov';
			break;
		case 11:
			month_full = 'Dez';
			break
		default:
			month_full = 'Mês indefinido';
			break
	}
	
	div_hora.innerHTML = `${month_full} ${day}, ${hora}:${min}`;
}, 100)