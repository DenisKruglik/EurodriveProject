var App={
	init:function(){
		App.setFormEvents();
		App.setLocalStorage();
		App.syncLocalStorage();
	},
	setFormEvents:function(){
		$('#form').submit(function(e){
			e.preventDefault();
			if ($('input[type=email]').val()) {
				App.dropMessage('Ваша заявка успешно отправлена. На Ваш номер и электронный адрес выслано уведомление',$('#form'));
			}else App.dropMessage('Ваша заявка успешно отправлена. На Ваш номер выслано уведомление',$('#form'));
		})
		$('select[name=direction]').change(function(){
			App.switchSelect(this);
		})
	},
	switchSelect:function(e){
		if (e.value=="Гомель-Минск") {
			$('option.fromminsk').css('display','none');
			$('option.fromgomel').css('display','block');
			$('option.togomel').css('display','none');
			$('option.tominsk').css('display','block');
		}else if (e.value=="Минск-Гомель"){
			$('option.fromminsk').css('display','block');
			$('option.fromgomel').css('display','none');
			$('option.togomel').css('display','block');
			$('option.tominsk').css('display','none');
		}else $('select[name=onset] option, select[name=destination] option').css('display','none');
	},
	dropMessage:function(e,loc){
		var mes=$("<div class='message'>"+e+"</div>");
		$(mes).css('display','none');
		$(mes).css('position','fixed');
		$(mes).css('top','60px');
		$(mes).prependTo(loc);
		$(mes).fadeIn(500);
		var timer=setTimeout(function(){
			$(mes).fadeOut(500);
		},5000);
		var rem=setTimeout(function(){
			$(mes).remove();
		},5500);
	},
	setLocalStorage:function(){
		$('#form input, #form textarea').on('input',function(){
			App.remember(this);
		})
		$('#form select').on('change',function(){
			App.remember(this);
		})
		$('#form').on('reset',function(e){
			e.preventDefault();
			localStorage.clear();
			for (var i = 0; i < form.elements.length-2; i++) {
				form.elements[i].value="";
			}
			App.switchSelect($('select[name=direction]')[0]);
		})
	},
	remember:function(e){
		var a=$(e).attr('name');
		localStorage.setItem(a,e.value);
	},
	syncLocalStorage:function(){
		$(document).ready(function(){
			var form=document.getElementById('form');
			for (var i = 0; i < form.elements.length-2; i++) {
				var n=form.elements[i].name;
				form.elements[i].value=localStorage.getItem(n);
			}
			var destination=$('select[name=direction]')[0];
			App.switchSelect(destination);
		})
	}
}
App.init();