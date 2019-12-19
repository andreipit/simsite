$(function(){
   var ready;
    ready = function() {
      
      // removeAllBttnsColors();

      switch(window.location.search) {
//BREAK link in task_4_02.js------------------------------------------------

         case "?cool=1": //start
            //wait next subtask
            break;

         case "?subtask=filter_error": //id="15" practiceText="Выполните подтверждение теста при выдачи ошибки 'Фильтр воды'"
            highLightBttn('.btn_2');
            $(document).on('click', '.btn_2', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_05" + ".html" + "?" + "filter_error" + "=" + "1"; 
               goTo("4_05.html?ferr=1");
            });
            break;

         case "?ferr=1": // show popup
            if (practice) $('.btn_2 ').addClass('blinking green_blinking ');
            var html = '<div><button type="button" class="btn btn-white turn_up"><i class="ic ic_turn_on"></i></button></div><div class="top-24"><button type="button" class="btn btn-white turn_off"><i class="ic ic_turn_off"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
            showModal('Control - /WAGTS1//HMI_AREA',html,'', function(){});
            highLightBttn('.turn_up');
            $(document).on('click', '.ic_turn_on', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_05" + ".html" + "?" + "filter_error" + "=" + "2"; 
               goTo("4_05.html?ferr=2");
            });
            break;

         case "?ferr=2": // close popup
            //wait next subtask
            break;

         case "?subtask=clapan_error": //id="16" practiceText="Выполните повторный тест при выдачи ошибки 'Клапан воды'. Все позиции в рамке должны быть стать черными."
            $('.btn_6')[0].setAttribute("class", "btn btn-white btn_6 red_blinking");
            highLightBttn('.btn_6');
            $(document).on('click', '.btn_6', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_05" + ".html" + "?" + "clapan_error" + "=" + "1"; 
               goTo("4_05.html?cerr=1");
            });
            break;

         case "?cerr=1": // open popup
            var html = '<div><button type="button" class="btn btn-white"><i class="ic ic_body_54"></i></button></div><div class="top-24"><button type="button" class="btn btn-white"><i class="ic ic_body_55"></i></button></div><div class="top-24"><button type="button" class="btn btn-white action_3"><i class="ic ic_body_56"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
            showModal('Control - /WAGTS1//HMI_AREA',html,'', function(){});
            highLightBttn('.action_3');
            $(document).on('click', '.action_3', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_05" + ".html" + "?" + "clapan_error" + "=" + "2"; 
               goTo("4_05.html?cerr=2");
            });
            break;

         case "?cerr=2": // close popup //После нажатия, текст в рамке становится полностью черным, а красная точка в иконке мигает зеленым.
            $('.btn_6')[0].setAttribute("class", "btn btn-white btn_6 green_blinking");
            makeTextBlack();
            break;
            
         case "?subtask=svetofor"://id="17" practiceText="Выберите поле 'Светофор'.
            makeTextBlack();
            $('.btn_6')[0].setAttribute("class", "btn btn-white btn_6 green_blinking");
            highLightBttn('.ic_menu_03');
            $(document).on('click', '.ic_menu_03', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "svetofor" + "=" + "4"; 
               goTo("4_02.html?svet=4");
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
  var cols = $($('.text-block').children()[0]).children();
   for (i = 0; i < cols.length; i++) { 
      var rows = $(cols).children();
      for (i = 0; i < rows.length; i++) { 
         rows[i].setAttribute("class", "font-16 top-12");
      }
   }
}



// <subtask id="15" practiceText="Выполните подтверждение теста при выдачи ошибки 'Фильтр воды'" rightButton="15" rightInstrument="" rightObject="controlledAnimation" type="commonAnimation"/>
   // <subtask id="16" practiceText="Выполните повторный тест при выдачи ошибки 'Клапан воды'. Все позиции в рамке должны быть стать черными." rightButton="16" rightInstrument="wagstaff_screen" rightObject="filter_box" type="controlledAnimation"/>
   // <subtask id="17" practiceText="Выберите поле 'Светофор'." rightButton="17" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>

