$(function(){
    var ready;
    ready = function() {


      switch(window.location.search) {

      case "?psel=1": //link in task_4_02.js
         //wait next subtask
         break;

      case "?subtask=centrovka": //id="10" practiceText="Подтвердите центровку кристаллизаторов. Для этого выберите иконку с галочкой в поле 'Выравнивание' и подтвердите выбор во всплывающем окне."
         highLightBttn('.action_btn');
         $(document).on('click', '.action_btn', function(e){
            // window.location.href = document.location.hostname + "/html/" + "task_4_04" + ".html" + "?" + "centrovka" + "=" + "1"; 
            goTo("4_04.html?cent=1");
         });
         break;

      case "?cent=1":
         var html = '<div><button type="button" class="btn btn-white turn_up"><i class="ic ic_turn_on"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
         showModal('',html,'', function(){})
         highLightBttn('.turn_up');
         $(document).on('click', '.turn_up', function(e){
            // window.location.href = document.location.hostname + "/html/" + "task_4_04" + ".html" + "?" + "centrovka" + "=" + "2"; 
            goTo("4_04.html?cent=2");
         });
         break;

      case "?cent=2":
         //wait next subtask
         break;  

      case "?subtask=position": //id="10" practiceText="Подтвердите центровку кристаллизаторов. Для этого выберите иконку с галочкой в поле 'Выравнивание' и подтвердите выбор во всплывающем окне."
         highLightBttn('.action_btn_2');
         $(document).on('click', '.action_btn_2', function(e){
            // window.location.href = document.location.hostname + "/html/" + "task_4_04" + ".html" + "?" + "position" + "=" + "1"; 
            goTo("4_04.html?pos=1");
         });
         break;

      case "?pos=1":
         var html = '<div><button type="button" class="btn btn-white turn_up"><i class="ic ic_turn_on"></i></button></div><div class="top-24"><button type="button" class="btn btn-min btn-white close_modal"><i class="ic ic_window_3"></i></button></div>';
         showModal('',html,'', function(){})
         highLightBttn('.turn_up');
         $(document).on('click', '.turn_up', function(e){
            // window.location.href = document.location.hostname + "/html/" + "task_4_04" + ".html" + "?" + "position" + "=" + "2"; 
            goTo("4_04.html?pos=2");
         });
         break;

      case "?pos=2":
         makeLinesBlack();
         //wait next subtask
         break;  

      case "?subtask=svetofor"://id="12" practiceText="Выберите поле 'Светофор'.
         makeLinesBlack();
         highLightBttn('.ic_menu_03');
         $(document).on('click', '.ic_menu_03', function(e){
            // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "svetofor" + "=" + "3"; 
            goTo("4_02.html?svet=3");
         });
         break;


         // BREAK TO 4_02

      default:
         console.log('unknown url');
         break;

      }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})


function makeLinesBlack() {
   for (i = 0; i < $('.text-block').children().length; i++) { 
      $('.text-block').children()[i].setAttribute("class", "font-16 top-12");
   }
   // $('.text-block').children()[0].setAttribute("class", "font-16 top-12 font-red");
}



// <subtask id="10" practiceText="Подтвердите центровку кристаллизаторов. Для этого выберите иконку с галочкой в поле 'Выравнивание' и подтвердите выбор во всплывающем окне." rightButton="10" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
// <subtask id="11" practiceText="Подтвердите позиционирование платформы. Для этого выберите иконку с галочкой в поле 'Платформа позицион-е' и подтвердите выбор во всплывающем окне." rightButton="11" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
// <subtask id="12" practiceText="Выберите поле 'Светофор'." rightButton="12" rightInstrument="" rightObject="controlledAnimation" type="commonAnimation"/>
