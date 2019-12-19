$(function(){
   var ready;
    ready = function() {
      switch(window.location.search) {
         case "?jet=1": 
            highLightBttn('.right_tumbler');
            $(document).on('click', '.right_tumbler', function(e){ goTo("12_03.html?jet=2"); });
            break;
      }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})

// <button hiddenInSubtask="" id="25" text="Подключить Split jet"/>
// <subtask id="25" practiceText="Произвести в соответствии с требованиями ТС, ТР подключение системы Split jet. Для проверки работы системы охлаждения и системы Split jet включить подачу воды с помощью переключателей 'Вправо' на мониторе управления. Показания должны достигнуть цифровых значений рецепта." rightButton="25" rightInstrument="" rightObject="wagstaff_screen" rightPanel="25" type="controlPanel"/>

