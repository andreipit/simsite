
$(function(){
	var pagename = "task_3_03";
	var ready;
    ready = function() {
		switch(window.location.search) {

			// case "":
		    	// wait next subtask
		        // break;

		    case "?subtask=lifting"://case 11: //Поднять распределительный желоб (выбрать соответствующую функцию на мониторе управления литейной остаткой).
				highLightBttn('.channel_up');
				$(document).on('click', '.channel_up', function(e){
					// window.location.href = document.location.hostname + "/html/" + "task_3_03" + ".html" + "?" + "channelHeight" + "=" + "1";
					parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
					goTo("3_03.html?height=1");
				});
		        break;

		    case "?height=1":
		    	// wait next subtask
		        break;

	    case "?subtask=descent"://case 11: //Поднять распределительный желоб (выбрать соответствующую функцию на мониторе управления литейной остаткой).
				highLightBttn('.channel_down');
				$(document).on('click', '.channel_down', function(e){
					parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
					goTo("3_03.html?height=0");
				});
		        break;

	        


	    	// case "?channelHeight=0":
	    	case "?height=0":
		    	// wait next subtask
		        break;
		        
		    default:
	    		console.log("unknown url");
		}
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})
