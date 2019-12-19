$(function(){
   var ready;
    ready = function() {
      
      // removeAllBttnsColors();

      switch(window.location.search) {
//BREAK link in task_4_02.js------------------------------------------------

         case "?calib=1": 
            //wait next subtask
            break;

         case "?subtask=svetofor"://id="17" practiceText="Выберите поле 'Светофор'.
            makeTextBlack();
            $('.btn_6')[0].setAttribute("class", "btn btn-white btn_6 green_blinking");
            highLightBttn('.ic_menu_03');
            $(document).on('click', '.ic_menu_03', function(e){
              // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "svetofor" + "=" + "5"; 
              goTo("4_02.html?svet=5");
            });
            break;

         // case "?cooling=1": //start
         //    highLightBttn('.ic_menu_09');
         //    $(document).on('click', '.ic_menu_09', function(e){window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "subtask" + "=" + "calibrate"; });
         //    //wait next subtask
         //    break;

//BREAK go to in task_4_02.js------------------------------------------------


function makeTextBlack() {
  var cols = $($('.text-block').children()[0]).children();
   for (i = 0; i < cols.length; i++) { 
      var rows = $(cols).children();
      for (i = 0; i < rows.length; i++) { 
         rows[i].setAttribute("class", "font-16 top-12");
      }
   }
}




         default:
            console.log('unknown url');
            break;
      }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})


   // <subtask id="21" practiceText="При проведенной калибровке, все строки должны быть выделены черным, а шибера находится в нижнем положении. Выберите поле 'Светофор'." rightButton="21" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
 