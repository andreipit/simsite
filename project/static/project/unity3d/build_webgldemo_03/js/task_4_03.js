$(function(){
   var ready;
    ready = function() {


      switch(window.location.search) {

         case "?rsel=1": //start
            //wait next subtask
            break;

         // case "": //start
         case "?subtask=litie_accept": // id="07" practiceText="Проверьте и подтвердите параметры литья. Убедитесь в подтверждении рецепта, все строчки должны быть обозначены черным цветом."
            highLightBttn('.ic_body_39');
            $(document).on('click', '.ic_body_39', function(e){
               window.location.href = document.location.hostname + "/html/" + "task_4_03" + ".html" + "?" + "litie_accept" + "=" + "1";
               goTo("4_03.html?lacc=1");
            });
            break;

         case "?lacc=1":
            makeLinesBlack();
            //wait next subtask
            break;

          case "?subtask=svetofor": //id="08" practiceText="Выберите поле 'Светофор'." Попадаем на общий экран. //При этом рамка на поле с рецептами перекрашивается с красного на черный
            makeLinesBlack();
            highLightBttn('.ic_menu_03');
            $(document).on('click', '.ic_menu_03', function(e){
              // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "svetofor" + "=" + "2"; 
               goTo("4_02.html?svet=2");
            });
            break;


         default:
            console.log('unknown url');
            break;

      }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})

function makeLinesBlack() {
   $('.text-block').children()[0].setAttribute("class", "font-black font-16 top-12");
   $('.text-block').children()[1].setAttribute("class", "font-black font-16 top-12");
   $('.text-block').children()[2].setAttribute("class", "font-black font-16 top-12");
}

// <subtask id="07" practiceText="Проверьте и подтвердите параметры литья. Убедитесь в подтверждении рецепта, все строчки должны быть обозначены черным цветом." rightButton="07" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
// <subtask id="08" practiceText="Выберите поле 'Светофор'." rightButton="08" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
