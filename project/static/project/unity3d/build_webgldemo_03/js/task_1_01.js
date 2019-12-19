
$(function(){

	var ready;
    ready = function() {
    	highLightBttn('.ic_body_11');
		$(document).on('click', '.ic_body_11', function(e){ goTo("1_02.html?subtask=centrovka"); });
		
		switch(window.location.search) {

			case "":
		    	//wait next subtask
		        break;

		    case "?subtask=centrovka"://"Провести центровку кристаллизаторов относительно поддонов."
            	highLightBttn('.ic_body_11');
				$(document).on('click', '.ic_body_11', function(e){ goTo("1_02.html?subtask=centrovka"); });
		        break;

		}
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})