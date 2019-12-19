$(function(){
   var ready;
    ready = function() {
      
      // removeAllBttnsColors();

      switch(window.location.search) {
//BREAK link in task_4_02.js------------------------------------------------

         case "?kum=1": 
            //wait next subtask
            break;


         case "?subtask=kalibrate": //id="30" practiceText="Выберите поле 'Калибровка стержней' и подтвердите калибровку. Все позиции на экране горят зеленым цветом." 
            highLightBttn('.action_1');
            $(document).on('click', '.action_1', function(e){ 
                // window.location.href = document.location.hostname + "/html/" + "task_4_08" + ".html" + "?" + "kalibrate" + "=" + "1"; 
               goTo("4_08.html?kalib=1");
            });
            break;

         case "?kalib=1": 
            var html = '<div><button type="button" class="btn btn-white turn_up"><i class="ic ic_turn_on"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
            showModal('Control - /WAGTS1//HMI_AREA',html,'', function(){})
            $(document).on('click', '.turn_up', function(e){ 
                // window.location.href = document.location.hostname + "/html/" + "task_4_08" + ".html" + "?" + "kalibrate" + "=" + "2"; 
               goTo("4_08.html?kalib=2");
            });
            highLightBttn('.turn_up');
                
         //    // makeTextBlack();
         //    // rotateTumbler();
            //wait next subtask
            break;

         case "?kalib=2": 
            //После подтверждения все надписи должн быть черными, а лампочки все гореть зеленым
            makeTextBlack();
            break;

        case "?subtask=svetofor": //id="31" practiceText="Выберите поле 'Светофор'." 
            makeTextBlack();
            highLightBttn('.ic_menu_03');
            $(document).on('click', '.ic_menu_03', function(e){
                // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "svetofor" + "=" + "7"; 
               goTo("4_02.html?svet=7");
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

function makeTextBlack() {
    $('.action_block .led.gray').toggleClass('gray green');
    $('.action_block .font-red').removeClass('font-red');
}


// <subtask id="30" practiceText="Выберите поле 'Калибровка стержней' и подтвердите калибровку. Все позиции на экране горят зеленым цветом." rightButton="30" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/> 
// <subtask id="31" practiceText="Выберите поле 'Светофор'." rightButton="31" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>


