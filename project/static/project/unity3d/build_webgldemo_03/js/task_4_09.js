$(function(){
   var ready;
    ready = function() {
      
      // removeAllBttnsColors();

      switch(window.location.search) {
//BREAK link in task_4_02.js------------------------------------------------

         case "?lit=1": 
            //wait next subtask
            break;

 
         case "?subtask=test_accept": //id="33" practiceText="Подтвердите готовность теста машины. Все строки на экране выделены черным цветом."
            highLightBttn('.action_btn_to_next');
            $(document).on('click', '.action_btn_to_next', function(e){ 
              // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "test_accept" + "=" + "1"; 
               goTo("4_02.html?tacc=1");
            });
            break;

//BREAK go to in task_4_02.js------------------------------------------------



         default:
            console.log('unknown url');
            break;
      }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})



// <subtask id="33" practiceText="Подтвердите готовность теста машины. Все строки на экране выделены черным цветом." rightButton="33" rightInstrument="rags" rightObject="wagstaff_screen" type="controlledAnimation"/>
