$(function(){
   var ready;
    ready = function() {
      
      // removeAllBttnsColors();

      switch(window.location.search) {

         case "?svet=1": //start
            //wait next subtask
            colorSomeButtons(); // do each page start
            break;

         case "?subtask=num_select": //id="04" Введите номер плавки.
            highLightBttn('.show_num_modal');
            $(document).on('click', '.show_num_modal', function(e){
               goTo("4_02.html?nsel=1");
            });
            colorSomeButtons(); // do each page start
            break;

         case "?nsel=1":
            highLightBttn('.accept_number');
            var html = '<div class="row"><div class="col-9 font-16 alignleft">Please enter Case Number (No Duplicates Allowed)!</div><div class="col-3"><div><button type="button" class="system_btn accept_number">OK</button></div><div class="top-8"><button type="button" class="system_btn"">Cancel</button></div></div></div><div class="top-16"><input type="text" value="071884" readonly /></div>';
            showModal('Wagst aff',html,'w500', function(){})
            //wait next subtask
            colorSomeButtons(); // do each page start
            break;

         case "?subtask=num_accept": //id="05" Подтвердите номер плавки.
            var html = '<div class="row"><div class="col-9 font-16 alignleft">Please enter Case Number (No Duplicates Allowed)!</div><div class="col-3"><div><button type="button" class="system_btn accept_number">OK</button></div><div class="top-8"><button type="button" class="system_btn"">Cancel</button></div></div></div><div class="top-16"><input type="text" value="071884" readonly /></div>';
            showModal('Wagst aff',html,'w500', function(){})
            highLightBttn('.accept_number');
            $(document).on('click', '.accept_number', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_02" + ".html" + "?" + "num_accept" + "=" + "1";
               goTo("4_02.html?nacc=1");
            });
            colorSomeButtons(); // do each page start
            break;

         case "?nacc=1":
            setNumber("071884");
            // $('.number_pl')[0].innerHTML = "071884";
            //wait next subtask
            colorSomeButtons(); // do each page start
            break;

         case "?subtask=recipe_select": //id="06" Выберите поле с рецептами.
            setNumber("071884");
            highLightBttn('.ic_body_26');
            $(document).on('click', '.ic_body_26', function(e){ 
               // window.location.href = document.location.hostname + "/html/" + "task_4_03" + ".html" + "?" + "recipe_select" + "=" + "1"; 
               goTo("4_03.html?rsel=1");
            });
            colorSomeButtons(); // do each page start
            break;
//BREAK go to task_4_03.js------------------------------------------------

//BREAK link in task_4_03.js------------------------------------------------
         // case "?recipe_select=1":
            //wait next subtask
            // break;

         case "?svet=2":// return from task_4_03 id="08" practiceText="Выберите поле 'Светофор' (//При этом рамка на поле с рецептами перекрашивается с красного на черный)
            setNumber("071884");
            makeAllBttnsRed(); $('.ic_body_26').parent().removeClass('red'); $('.ic_body_26').parent().addClass('black');
            //wait next subtask
            break;

         case "?subtask=platform_select": //id="09" practiceText="Выберите поле 'Платформа'
            setNumber("071884");
            makeAllBttnsRed(); $('.ic_body_26').parent().removeClass('red'); $('.ic_body_26').parent().addClass('black');
            highLightBttn('.ic_body_27');
            $(document).on('click', '.ic_body_27', function(e){
               goTo("4_04.html?psel=1");
            });
            break;
//BREAK go to task_4_04.js------------------------------------------------


//BREAK link in task_4_04.js------------------------------------------------
         case "?svet=3": // 
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            //wait next subtask
            break;

         case "?subtask=cooling": //id="14" practiceText="Выберите поле 'Охлаждение'."
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            highLightBttn('.ic_body_30');
            $(document).on('click', '.ic_body_30', function(e){
               // window.location.href = document.location.hostname + "/html/" + "task_4_05" + ".html" + "?" + "cooling" + "=" + "1"; 
               goTo("4_05.html?cool=1");
            });
            break;
//BREAK go to task_4_05.js------------------------------------------------

//BREAK link in task_4_05.js------------------------------------------------
         case "?svet=4": // Поле охлаждение становится черным
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            makeBttnBlack('.ic_body_30');
            //wait next subtask
            break;

         case "?subtask=calibrate": // id="18" practiceText="Выберите поле 'Калибровка лазеров'."
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            makeBttnBlack('.ic_body_30');
            highLightBttn('.ic_body_31');
            $(document).on('click', '.ic_body_31', function(e){ 
               // window.location.href = document.location.hostname + "/html/" + "task_4_06" + ".html" + "?" + "calibrate" + "=" + "1"; 
               goTo("4_06.html?calib=1");
            });
            break;
//BREAK go to in task_4_06.js------------------------------------------------

//BREAK link in task_4_06.js------------------------------------------------
         case "?svet=5": // Поле охлаждение становится черным
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            makeBttnBlack('.ic_body_30');
            makeBttnBlack('.ic_body_31');
            //wait next subtask
            break;

         case "?subtask=crystallizer": // id="22" practiceText="Выберите поле 'Кристаллизатор'
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            makeBttnBlack('.ic_body_30');
            makeBttnBlack('.ic_body_31');
            highLightBttn('.ic_body_32');
            $(document).on('click', '.ic_body_32', function(e){ 
               // window.location.href = document.location.hostname + "/html/" + "task_4_07" + ".html" + "?" + "crystallizer" + "=" + "1"; 
               goTo("4_07.html?cryst=1");
            });
            break;
            

//BREAK go to  task_4_07.js------------------------------------------------

//BREAK link in task_4_07.js------------------------------------------------
         case "?svet=6":
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            makeBttnBlack('.ic_body_30');
            makeBttnBlack('.ic_body_31');
            makeBttnBlack('.ic_body_32');
            //wait next subtask
            break;

         case "?subtask=kum": // id="25" practiceText="Выберите поле 'Тест КУМов'."
            setNumber("071884");
            makeAllBttnsRed();
            makeBttnBlack('.ic_body_26');
            makeBttnBlack('.ic_body_27');
            makeBttnBlack('.ic_body_30');
            makeBttnBlack('.ic_body_31');
            makeBttnBlack('.ic_body_32');
            highLightBttn('.ic_body_29');
            $(document).on('click', '.ic_body_29', function(e){ 
               // window.location.href = document.location.hostname + "/html/" + "task_4_08" + ".html" + "?" + "kum" + "=" + "1"; 
               goTo("4_08.html?kum=1");
            });
            break;
//BREAK go to  task_4_08.js------------------------------------------------
//BREAK link in task_4_08.js------------------------------------------------
         case "?svet=7":
            setNumber("071884");
            makeBttnRed('.ic_body_37');
            //wait next subtask
            break;

         case "?subtask=litie_ready": //id="32" practiceText="Выберите поле 'Меню готовности машины к литью'. Все позиции кроме этого поля выделеным черным цветом."
            setNumber("071884");
            makeBttnRed('.ic_body_37');
            highLightBttn('.ic_body_37');
            $(document).on('click', '.ic_body_37', function(e){ 
               // window.location.href = document.location.hostname + "/html/" + "task_4_09" + ".html" + "?" + "litie_ready" + "=" + "1"; 
               goTo("4_09.html?lit=1");
            });
            break;
//BREAK go to  task_4_09.js------------------------------------------------
//BREAK link in task_4_09.js------------------------------------------------
         case "?tacc=1":
            // После нажатия, возвращаемся на экран с
            // квадратами.
            // Все они горят черным цветом, а рамка с
            // текстом в углу исчезает.
            // Надпись ПОДГОТОВКА меняется на
            // "ГОТОВНОСТЬ К ЛИТЬЮ
            
            setNumber("071884");
            $('.panel_2_1')[0].innerHTML = "ГОТОВНОСТЬ К ЛИТЬЮ";
            $('.text-block').remove();
            //wait next subtask
            break;

//BREAK go to  task_4_10.js------------------------------------------------


         default:
            console.log('unknown url');
            break;
      }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);

})


function removeAllBttnsColors() {
   $('.ic_body_27').parent().removeClass('black');
   $('.ic_body_27').parent().removeClass('red');
   $('.ic_body_33').parent().removeClass('black');
   $('.ic_body_33').parent().removeClass('red');
   $('.ic_body_34').parent().removeClass('black');
   $('.ic_body_34').parent().removeClass('red');
   $('.ic_body_35').parent().removeClass('black');
   $('.ic_body_35').parent().removeClass('red');
   $('.ic_body_36').parent().removeClass('black');
   $('.ic_body_36').parent().removeClass('red');

   $('.ic_body_26').parent().removeClass('black');
   $('.ic_body_26').parent().removeClass('red');
   $('.ic_body_28').parent().removeClass('black');
   $('.ic_body_28').parent().removeClass('red');
   $('.ic_body_29').parent().removeClass('black');
   $('.ic_body_29').parent().removeClass('red');
   $('.ic_body_30').parent().removeClass('black');
   $('.ic_body_30').parent().removeClass('red');
   $('.ic_body_31').parent().removeClass('black');
   $('.ic_body_31').parent().removeClass('red');
   $('.ic_body_32').parent().removeClass('black');
   $('.ic_body_32').parent().removeClass('red');
   $('.ic_body_37').parent().removeClass('black');
   $('.ic_body_37').parent().removeClass('red');
}

function colorSomeButtons() {
   removeAllBttnsColors();

   $('.ic_body_27').parent().addClass('black');
   $('.ic_body_33').parent().addClass('black');
   $('.ic_body_34').parent().addClass('black');
   $('.ic_body_35').parent().addClass('black');
   $('.ic_body_36').parent().addClass('black');

   $('.ic_body_26').parent().addClass('red');
   $('.ic_body_28').parent().addClass('red');
   $('.ic_body_29').parent().addClass('red');
   $('.ic_body_30').parent().addClass('red');
   $('.ic_body_31').parent().addClass('red');
   $('.ic_body_32').parent().addClass('red');
   $('.ic_body_37').parent().addClass('red');
}

function makeAllBttnsRed() {
   removeAllBttnsColors();

   $('.ic_body_27').parent().addClass('red');
   $('.ic_body_33').parent().addClass('red');
   $('.ic_body_34').parent().addClass('red');
   $('.ic_body_35').parent().addClass('red');
   $('.ic_body_36').parent().addClass('red');

   $('.ic_body_26').parent().addClass('red');
   $('.ic_body_28').parent().addClass('red');
   $('.ic_body_29').parent().addClass('red');
   $('.ic_body_30').parent().addClass('red');
   $('.ic_body_31').parent().addClass('red');
   $('.ic_body_32').parent().addClass('red');
   $('.ic_body_37').parent().addClass('red');
}


function makeBttnBlack(name) {
   $(name).parent().removeClass('red');
   $(name).parent().addClass('black');
}

function makeBttnRed(name) {
   $(name).parent().removeClass('black');
   $(name).parent().addClass('red');
}


function setNumber(num)
{
   $('.number_pl')[0].innerHTML = num;
}

   // <subtask id="04" practiceText="Введите номер плавки." rightButton="04" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
   // <subtask id="05" practiceText="Подтвердите номер плавки." rightButton="05" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
   // <subtask id="06" practiceText="Выберите поле с рецептами." rightButton="06" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>

   // <subtask id="09" practiceText="Выберите поле 'Платформа'." rightButton="09" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>

   
   // <subtask id="14" practiceText="Выберите поле 'Охлаждение'." rightButton="14" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
   


   // <subtask id="18" practiceText="Выберите поле 'Калибровка лазеров'." rightButton="18" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
 
   // <subtask id="22" practiceText="Выберите поле 'Кристаллизатор'." rightButton="22" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
   

// <subtask id="25" practiceText="Выберите поле 'Тест КУМов'." rightButton="25" rightInstrument="" rightObject="wagstaff_controller" type="controlledAnimation"/>

// <subtask id="32" practiceText="Выберите поле 'Меню готовности машины к литью'. Все позиции кроме этого поля выделеным черным цветом." rightButton="32" rightInstrument="" rightObject="wagstaff_screen" type="controlledAnimation"/>
//  </task>