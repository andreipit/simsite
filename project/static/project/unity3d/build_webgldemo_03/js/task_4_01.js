$(function(){
	var ready;
    ready = function() {
		switch(window.location.search) {

		    case "": //start
		    	//wait next subtask
		        break;

		    case "?subtask=prostoi": //id="01" text="'Простой'"/>
				highLightBttn('.panel_2_1');
				$(document).on('click', '.panel_2_1', function(e){
					parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
					goTo("4_01.html?prost=1");
				});
		        break;

		    case "?prost=1":
				var html = '<div><button type="button" class="btn btn-full btn-white btn-text btn-22">Простой</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text btn-23">Состояние подготовки</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Раннее завершение&nbsp;литья</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Видимость Разрешений</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Тест&nbsp;режим включен</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Тест&nbsp;режим отключен</button></div><div class="top-8"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
				showModal('Control - /WAGTS1//HMI_AREA', html, 'w360',function(){
				});
		    	//wait next subtask
		        break;

		    case "?subtask=podgotovka": //id="02" text="'Состояние подготовки'"/>
				var html = '<div><button type="button" class="btn btn-full btn-white btn-text btn-22">Простой</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text btn-23">Состояние подготовки</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Раннее завершение&nbsp;литья</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Видимость Разрешений</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Тест&nbsp;режим включен</button></div><div class="top-8"><button type="button" class="btn btn-full btn-white btn-text">Тест&nbsp;режим отключен</button></div><div class="top-8"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
				showModal('Control - /WAGTS1//HMI_AREA', html, 'w360',function(){});
				highLightBttn('.btn-23');
				$(document).on('click', '.btn-23', function(e){ 
					goTo("4_01.html?podgo=1");
				});
		        break;

		    case "?podgo=1":
	    		$('.panel_2_1')[0].innerHTML = "ПОДГОТОВКА";
		    	//wait next subtask
		        break;

		    case "?subtask=svetofor": //id="03" text="Выберите поле 'Светофор
				highLightBttn('.ic_menu_03');
				$(document).on('click', '.ic_menu_03', function(e){
					goTo("4_02.html?svet=1");
				});
		        break;

		    default:
	    		console.log('unknown url');
		        break;
		}
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})

      // <subtask id="01" practiceText="Выберите поле 'Простой'." rightButton="01" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
      // <subtask id="02" practiceText="Выберите поле 'Состояние подготовки'." rightButton="02" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
      // <subtask id="03" practiceText="Выберите поле 'Светофор'." rightButton="03" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
      