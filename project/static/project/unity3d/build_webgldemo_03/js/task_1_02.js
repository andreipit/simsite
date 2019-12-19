$(function(){

	var ready;
    ready = function() {
		switch(window.location.search) {


		    case "?subtask=centrovka":
            	highLightBttn('.ic_body_20');
				$(document).on('click', '.ic_body_20', function(e){
					var el = $(e.target);
					var html = '<div><button type="button" class="btn btn-white turn_on"><i class="ic ic_turn_on"></i></button></div><div class="top-24"><button type="button" class="btn btn-white turn_off"><i class="ic ic_turn_off"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
            		lowLightBttn('.ic_body_20');
					showModal('', html, '',function(){
						$(document).on('click', '.turn_on',function(){
    						parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
							hideModal();
							goTo("1_02.html?turnUp=1");
						})
					});
            		highLightBttn('.turn_on');
				});
		        break;

		    case "?turnUp=1": 
		    	//wait next subtask
		        break;

		    case "?subtask=fix": // "Произвести фиксацию кристаллизаторов прижимными шайбами."
            	highLightBttn('.ic_body_18');
				$(document).on('click', '.ic_body_18', function(e){
					var el = $(e.target);
					var html = '<div><button type="button" class="btn btn-white turn_on"><i class="ic ic_turn_on"></i></button></div><div class="top-24"><button type="button" class="btn btn-white turn_off"><i class="ic ic_turn_off"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
            		lowLightBttn('.ic_body_18');
					showModal('', html, '',function(){
						$(document).on('click', '.turn_on',function(){
    						parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
							hideModal();
							goTo("1_02.html?turnUp=2");
						})
					});
            		highLightBttn('.turn_on');
				});
		        break;

		    case "?turnUp=2":
		    	//wait next subtask
		        break;

		    case "?subtask=downup": // Опустить-поднять лоток литейной оснастки
            	highLightBttn('.ic_body_23');
				$(document).on('click', '.ic_body_23', function(e){
					var el = $(e.target);
					var html = '<div><button type="button" class="btn btn-white turn_up"><i class="ic ic_window_1"></i></button></div><div class="top-24"><button type="button" class="btn btn-white turn_down"><i class="ic ic_window_2 ready"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
            		lowLightBttn('.ic_body_23');
					showModal('', html, '',function(){
						$(document).on('click', '.turn_up',function(){
    						parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
            				lowLightBttn('.button_action');
							goTo("1_02.html?height=1");
						});
						$(document).on('click', '.turn_down',function(){
            				lowLightBttn('.button_action');
            				highLightBttn('.turn_up');
						})
					});
            		highLightBttn('.turn_down');
				});
		        break;

		    case "?height=1":
		    	//wait next subtask
		        break;

		    case "?subtask=down": // "Опустить лоток."
				highLightBttn('.ic_body_23');
				$(document).on('click', '.ic_body_23', function(e){
					var el = $(e.target);
					var html = '<div><button type="button" class="btn btn-white turn_up"><i class="ic ic_window_1"></i></button></div><div class="top-24"><button type="button" class="btn btn-white turn_down"><i class="ic ic_window_2 ready"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
    				lowLightBttn('.button_action');
					showModal('', html, '',function(){
						$(document).on('click', '.turn_down',function(){
    						parent.document.getElementById("WScreen").dispatchEvent(parent.event2);
    						lowLightBttn('.button_action');
							highLightBttn('.turn_up');
							goTo("1_02.html?height=0");
						})
					});
            		highLightBttn('.turn_down');
				});
		        break;

    	    // case "?channelHeight=0":
    	    case "?height=0":
		    	//wait next subtask
		        break;

		    default:
	    		console.log("unknown url");
		}
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})