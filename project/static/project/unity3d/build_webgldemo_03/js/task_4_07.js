$(function(){
   var ready;
    ready = function() {
      
      // removeAllBttnsColors();

      switch(window.location.search) {
//BREAK link in task_4_02.js------------------------------------------------

         case "?cryst=1": 
            //wait next subtask
            break;


         case "?subtask=smazka": //id="23" practiceText="В поле 'Имп смазка' переключите тумблер в положение ВКЛ, задайте время и количество импульсов."
            highLightBttn('.action_btn');
            $(document).on('click', '.action_btn', function(e){ 
                // window.location.href = document.location.hostname + "/html/" + "task_4_07" + ".html" + "?" + "smazka" + "=" + "1"; 
               goTo("4_07.html?smaz=1");
            });
            break;

         case "?smaz=1": 
            makeTextBlack();
            rotateTumbler();
            //wait next subtask
            break;

         case "?subtask=svetofor"://id="24" practiceText="Выберите поле 'Светофор'.
            makeTextBlack();
            rotateTumbler();
            highLightBttn('.ic_menu_03');
            $(document).on('click', '.ic_menu_03', function(e){
                // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "svetofor" + "=" + "6"; 
               goTo("4_02.html?svet=6");
            });
            break;



//BREAK go to in task_4_02.js------------------------------------------------

function rotateTumbler() {
     $('.action_btn').children()[0].setAttribute("class", "ic ic_body_75");

}

function makeTextBlack() {
    var rows = $('.text-block').children();
    for (i = 0; i < rows.length; i++) { 
         rows[i].setAttribute("class", "font-16 top-12");
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



 // <subtask id="23" practiceText="В поле 'Имп смазка' переключите тумблер в положение ВКЛ, задайте время и количество импульсов." rightButton="23" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
   // <subtask id="24" practiceText="Выберите поле 'Светофор'." rightButton="24" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/> 
   