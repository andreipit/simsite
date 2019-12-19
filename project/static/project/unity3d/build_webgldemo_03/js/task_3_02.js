

$(function(){
	var ready;
    ready = function() {
		switch(window.location.search) {

		    case "?subtask=lifting"://case 11: //Поднять распределительный желоб (выбрать соответствующую функцию на мониторе управления литейной остаткой).
				highLightBttn('.ic_body_23');
				$(document).on('click', '.ic_body_23', function(e){
					goTo("3_03.html?subtask=lifting");
				});
		        break;

		    case "?subtask=descent"://case 11: //Поднять распределительный желоб (выбрать соответствующую функцию на мониторе управления литейной остаткой).
				highLightBttn('.ic_body_23');
				$(document).on('click', '.ic_body_23', function(e){
					goTo("3_03.html?subtask=descent");
				});
		        break;

		    default:
	    		console.log("unknown url");
		}
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})

