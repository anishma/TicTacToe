/**
 * Created by anishma on 1/22/2017.
 */
 $(document).ready(function () {
     var id; var x=0; var xwins=0; var owins=0;
     $(".btn-default").on("click",function() {
         var e = window.event;
         var btn = e.target || e.srcElement;
         id=(btn.id);
         if(($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o')) ||
             ($("#4").hasClass('o') && $("#5").hasClass('o') && $("#6").hasClass('o')) ||
             ($("#7").hasClass('o') && $("#8").hasClass('o') && $("#9").hasClass('o')) ||
             ($("#1").hasClass('o') && $("#4").hasClass('o') && $("#7").hasClass('o')) ||
             ($("#2").hasClass('o') && $("#5").hasClass('o') && $("#8").hasClass('o')) ||
             ($("#3").hasClass('o') && $("#6").hasClass('o') && $("#9").hasClass('o')) ||
             ($("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o')) ||
             ($("#3").hasClass('o') && $("#5").hasClass('o') && $("#7").hasClass('o'))){
             owins++;
             document.getElementById("o").value=owins;
             x=0;
             $('.btn-default').text("+");
             $('.btn-default').removeClass('o x disable');
             $('.btn-default').removeAttr('disabled');
             alert("Player O has won the game");

         }
        else if(($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x')) ||
             ($("#4").hasClass('x') && $("#5").hasClass('x') && $("#6").hasClass('x')) ||
             ($("#7").hasClass('x') && $("#8").hasClass('x') && $("#9").hasClass('x')) ||
             ($("#1").hasClass('x') && $("#4").hasClass('x') && $("#7").hasClass('x')) ||
             ($("#2").hasClass('x') && $("#5").hasClass('x') && $("#8").hasClass('x')) ||
             ($("#3").hasClass('x') && $("#6").hasClass('x') && $("#9").hasClass('x')) ||
             ($("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x')) ||
             ($("#3").hasClass('x') && $("#5").hasClass('x') && $("#7").hasClass('x'))){
             xwins++;
             document.getElementById("x").value=xwins;
             x=0;
             $('.btn-default').text("+");
             $('.btn-default').removeClass('o x disable');
             $('.btn-default').removeAttr('disabled');
             alert("Player x has won the game");
         }
        else if(x==8)
         {
             alert("It's a tie. It will restart.");
             x=0;
             $('.btn-default').text("+");
             $('.btn-default').removeClass('o x disable');
             $('.btn-default').removeAttr('disabled');
         }
        else if($(this).hasClass('disable')){
             alert("Already selected. Please select a new tile");
         }
        else if(x%2==0)
         {
             $(this).addClass("o disable");
             document.getElementById(id).innerHTML="O";
             $(this).attr("disabled","disabled");
             x=x+1;
             if(($("#1").hasClass('o') && $("#2").hasClass('o') && $("#3").hasClass('o')) ||
                 ($("#4").hasClass('o') && $("#5").hasClass('o') && $("#6").hasClass('o')) ||
                 ($("#7").hasClass('o') && $("#8").hasClass('o') && $("#9").hasClass('o')) ||
                 ($("#1").hasClass('o') && $("#4").hasClass('o') && $("#7").hasClass('o')) ||
                 ($("#2").hasClass('o') && $("#5").hasClass('o') && $("#8").hasClass('o')) ||
                 ($("#3").hasClass('o') && $("#6").hasClass('o') && $("#9").hasClass('o')) ||
                 ($("#1").hasClass('o') && $("#5").hasClass('o') && $("#9").hasClass('o')) ||
                 ($("#3").hasClass('o') && $("#5").hasClass('o') && $("#7").hasClass('o'))){
                 owins++;
                 document.getElementById("o").value=owins;
                 x=0;
                 $('.btn-default').text("+");
                 $('.btn-default').removeClass('o x disable');
                 $('.btn-default').removeAttr('disabled');
                 alert("Player O has won the game");

             }
         }
         else
         {

             $(this).addClass("x disable");
             document.getElementById(id).innerHTML="X";
             $(this).attr("disabled","disabled");
             x=x+1;
             if(($("#1").hasClass('x') && $("#2").hasClass('x') && $("#3").hasClass('x')) ||
                 ($("#4").hasClass('x') && $("#5").hasClass('x') && $("#6").hasClass('x')) ||
                 ($("#7").hasClass('x') && $("#8").hasClass('x') && $("#9").hasClass('x')) ||
                 ($("#1").hasClass('x') && $("#4").hasClass('x') && $("#7").hasClass('x')) ||
                 ($("#2").hasClass('x') && $("#5").hasClass('x') && $("#8").hasClass('x')) ||
                 ($("#3").hasClass('x') && $("#6").hasClass('x') && $("#9").hasClass('x')) ||
                 ($("#1").hasClass('x') && $("#5").hasClass('x') && $("#9").hasClass('x')) ||
                 ($("#3").hasClass('x') && $("#5").hasClass('x') && $("#7").hasClass('x'))){
                 xwins++;
                 document.getElementById("x").value=xwins;
                 x=0;
                 $('.btn-default').text("+");
                 $('.btn-default').removeClass('o x disable');
                 $('.btn-default').removeAttr('disabled');
                 alert("Player x has won the game");

             }
         }
     });
     $("#res").click(function () {
         $('.btn-default').text("+");
         $('.btn-default').removeClass('o x disable');
         xwins,owins=0;x=0;
         document.getElementById("o").value="0 times";
         document.getElementById("x").value="0 times";
         $('.btn-default').removeAttr('disabled');

     });


 });
   

