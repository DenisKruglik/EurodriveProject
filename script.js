location.hash="#main";
function serve(){
	var h=location.hash;
	var path="";
	switch(h){
		case "#main":
			path="main.html";
			break;
		case "#broning":
			path="broning.html";
			break;
		case "#contacs":
			path="contacs.html";
			break;
		case "#faq":
			path="faq.html";
			break;
		case "#stops":
			path="stops.html";
			break;	
		default: return;		
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			document.getElementById('container').innerHTML=this.responseText;
			if (path=="main.html") {fr.event("click",get.byId('b'),function(){location.hash="#broning"})}
			if (path=="broning.html") {fr.event("click",get.byId('notif'),function(){
				if (get.byId('tel').value.length<7 || !Number(get.byId('tel').value)) {
					alert("Введите корректный телефонный номер в соответствующее поле");
				}else alert("Оповещение будет отправлено на Ваш номер");
		})}
			if (path=="broning.html") {fr.event("click",get.byId('rate'),function(){
				for (;;) {
					var a=prompt("Введите Вашу оценку от 1 до 5");
					if (a==1 || a==2 || a==3 || a==4 || a==5){
						alert("Ваша оценка учтена в общем рейтинге");
						break;
					}else alert("Неверный ввод");
				}
				})}
		}
	}
	xhr.open("GET",path,true);
	xhr.send();
}
window.onhashchange=serve;
serve();
