

$(function(){
	var ready;
    ready = function() {
		switch(window.location.search) {

			case "":
		    	//wait next subtask
		        break;

		    case "?subtask=lifting"://case 11: //Поднять распределительный желоб (выбрать соответствующую функцию на мониторе управления литейной остаткой).
				highLightBttn('.ic_body_11');
				$(document).on('click', '.ic_body_11', function(e){
					// window.location.href = document.location.hostname + "/html/" + "task_3_02" + ".html" + "?" + "subtask" + "=" + "lifting";
					parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
					goTo("3_02.html?subtask=lifting");
				});
		        break;

		    default:
	    		console.log("unknown url");
		}
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})