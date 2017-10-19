$(document).ready(function()
{
   
  
    $("#smart").click(function()
    {
        var hsr_speed=$("#hsr_speed").val();
        var train_speed=$("#train_speed").val();
        var bus_speed=$("#bus_speed").val();
        var car_speed=$("#car_speed").val();
        var wi_one=$("#wi_one").val();

        var hsr_comfortable=$("#hsr_comfortable").val();
        var train_comfortable=$("#train_comfortable").val();
        var bus_comfortable=$("#bus_comfortable").val();
        var car_comfortable=$("#car_comfortable").val();
        var wi_two=$("#wi_two").val();

        var hsr_safety=$("#hsr_safety").val();
        var train_safety=$("#train_safety").val();
        var bus_safety=$("#bus_safety").val();
        var car_safety=$("#car_safety").val();
        var wi_three=$("#wi_three").val();
        
        var hsr_price=$("#hsr_price").val();
        var train_price=$("#train_price").val();
        var bus_price=$("#bus_price").val();
        var car_price=$("#car_price").val();
        var wi_four=$("#wi_four").val();

        var hsr_person=$("#hsr_person").val();
        var train_person=$("#train_person").val();
        var bus_person=$("#bus_person").val();
        var car_person=$("#car_person").val();
        var wi_five=$("#wi_five").val(); 

        var mul=$("#mul").val();

        if(hsr_speed !="" && train_speed !="" && bus_speed !="" && car_speed !="" && wi_one !="" 
           && hsr_comfortable !="" && train_comfortable !="" && bus_comfortable !="" && car_comfortable !="" && wi_two !=""
           && hsr_safety !="" && train_safety !="" && bus_safety !="" && car_safety !="" && wi_three !=""
           && hsr_price !="" && train_price !="" && bus_price !="" && car_price !="" && wi_four !=""
           && hsr_person !="" && train_person !="" && bus_person !="" && car_person !="" && wi_five !="" && mul !=""
         )
        { 
                //分母
             var wi_total=parseInt(wi_one)*mul+parseInt(wi_two)*mul+parseInt(wi_three)*mul+parseInt(wi_four)*mul+parseInt(wi_five)*mul;
             
             
             //*各項權重   公式>>使用者輸入的權重/分母=*各項權重
             var wi_speed=parseInt(wi_one)*mul/parseInt(wi_total);
             var wi_comfortable=parseInt(wi_two)*mul/parseInt(wi_total);
             var wi_safety=parseInt(wi_three)*mul/parseInt(wi_total);
             var wi_price=parseInt(wi_four)*mul/parseInt(wi_total);
             var wi_person=parseInt(wi_five)*mul/parseInt(wi_total);

             var hsr=parseInt(hsr_speed) * wi_speed +
                     parseInt(hsr_comfortable)*wi_comfortable +
                     parseInt(hsr_safety)*wi_safety +
                     parseInt(hsr_price)*wi_price +
                     parseInt(hsr_person)*wi_person ;

            var train=parseInt(train_speed) * wi_speed +
                     parseInt(train_comfortable)*wi_comfortable +
                     parseInt(train_safety)*wi_safety +
                     parseInt(train_price)*wi_price +
                     parseInt(train_person)*wi_person ;

            var bus=parseInt(bus_speed) * wi_speed +
                     parseInt(bus_comfortable)*wi_comfortable +
                     parseInt(bus_safety)*wi_safety +
                     parseInt(bus_price)*wi_price +
                     parseInt(bus_person)*wi_person ;

            var car=parseInt(car_speed) * wi_speed +
                     parseInt(car_comfortable)*wi_comfortable +
                     parseInt(car_safety)*wi_safety +
                     parseInt(car_price)*wi_price +
                     parseInt(car_person)*wi_person ;

            $("#hsr").html(hsr);
            $("#train").html(train);
            $("#bus").html(bus);
            $("#car").html(car);
                     
        }
        else
        {
            alert("請輸入完整");
        }       
    })
	
	
	
    $("#smarter").click(function(){
        
       var hsr_speed=$("#hsr_speed").val();
        var train_speed=$("#train_speed").val();
        var bus_speed=$("#bus_speed").val();
        var car_speed=$("#car_speed").val();
        var wi_one=$("#wi_one").val();

        var hsr_comfortable=$("#hsr_comfortable").val();
        var train_comfortable=$("#train_comfortable").val();
        var bus_comfortable=$("#bus_comfortable").val();
        var car_comfortable=$("#car_comfortable").val();
        var wi_two=$("#wi_two").val();

        var hsr_safety=$("#hsr_safety").val();
        var train_safety=$("#train_safety").val();
        var bus_safety=$("#bus_safety").val();
        var car_safety=$("#car_safety").val();
        var wi_three=$("#wi_three").val();
        
        var hsr_price=$("#hsr_price").val();
        var train_price=$("#train_price").val();
        var bus_price=$("#bus_price").val();
        var car_price=$("#car_price").val();
        var wi_four=$("#wi_four").val();

        var hsr_person=$("#hsr_person").val();
        var train_person=$("#train_person").val();
        var bus_person=$("#bus_person").val();
        var car_person=$("#car_person").val();
        var wi_five=$("#wi_five").val(); 
        if(hsr_speed !="" && train_speed !="" && bus_speed !="" && car_speed !="" && wi_one !="" 
           && hsr_comfortable !="" && train_comfortable !="" && bus_comfortable !="" && car_comfortable !="" && wi_two !=""
           && hsr_safety !="" && train_safety !="" && bus_safety !="" && car_safety !="" && wi_three !=""
           && hsr_price !="" && train_price !="" && bus_price !="" && car_price !="" && wi_four !=""
           && hsr_person !="" && train_person !="" && bus_person !="" && car_person !="" && wi_five !=""
         ){ 


             var wi_speed;
             var wi_comfortable;
             var wi_safety;
             var wi_price;
             var wi_person;
              if(wi_one=="1")
              {
                 wi_speed=0.4567;
              }
              else if(wi_one=="2")
              {
                 wi_speed=0.2567;
              }
              else if(wi_one=="3")
              {
                 wi_speed=0.1567;
              }
              else if(wi_one=="4")
              {
                 wi_speed=0.09;
              }
              else if(wi_one=="5")
              {
                 wi_speed=0.04;
              }

              if(wi_two=="1")
              {
                 wi_comfortable=0.4567;
              }
              else if(wi_two=="2")
              {
                 wi_comfortable=0.2567;
              }
              else if(wi_two=="3")
              {
                 wi_comfortable=0.1567;
              }
              else if(wi_two=="4")
              {
                 wi_comfortable=0.09;
              }
              else if(wi_two=="5")
              {
                 wi_comfortable=0.04;
              }

              if(wi_three=="1")
              {
                 wi_safety=0.4567;
              }
              else if(wi_three=="2")
              {
                 wi_safety=0.2567;
              }
              else if(wi_three=="3")
              {
                 wi_safety=0.1567;
              }
              else if(wi_three=="4")
              {
                 wi_safety=0.09;
              }
              else if(wi_three=="5")
              {
                 wi_safety=0.04;
              }

              if(wi_four=="1")
              {
                 wi_price=0.4567;
              }
              else if(wi_four=="2")
              {
                 wi_price=0.2567;
              }
              else if(wi_four=="3")
              {
                 wi_price=0.1567;
              }
              else if(wi_four=="4")
              {
                 wi_price=0.09;
              }
              else if(wi_four=="5")
              {
                 wi_price=0.04;
              }

              if(wi_five=="1")
              {
                 wi_person=0.4567;
              }
              else if(wi_five=="2")
              {
                 wi_person=0.2567;
              }
              else if(wi_five=="3")
              {
                 wi_person=0.1567;
              }
              else if(wi_five=="4")
              {
                 wi_person=0.09;
              }
              else if(wi_five=="5")
              {
                 wi_person=0.04;
              }

             var hsr=parseInt(hsr_speed) * wi_speed +
                     parseInt(hsr_comfortable)*wi_comfortable +
                     parseInt(hsr_safety)*wi_safety +
                     parseInt(hsr_price)*wi_price +
                     parseInt(hsr_person)*wi_person ;

            var train=parseInt(train_speed) * wi_speed +
                     parseInt(train_comfortable)*wi_comfortable +
                     parseInt(train_safety)*wi_safety +
                     parseInt(train_price)*wi_price +
                     parseInt(train_person)*wi_person ;

            var bus=parseInt(bus_speed) * wi_speed +
                     parseInt(bus_comfortable)*wi_comfortable +
                     parseInt(bus_safety)*wi_safety +
                     parseInt(bus_price)*wi_price +
                     parseInt(bus_person)*wi_person ;

            var car=parseInt(car_speed) * wi_speed +
                     parseInt(car_comfortable)*wi_comfortable +
                     parseInt(car_safety)*wi_safety +
                     parseInt(car_price)*wi_price +
                     parseInt(car_person)*wi_person ;

            $("#hsr").html(hsr);
            $("#train").html(train);
            $("#bus").html(bus);
            $("#car").html(car);
                     
        }
        else
        {
            alert("請輸入完整");
        }



    })
	
	
	$("#smarts").click(function(){
        var hsr_speed=$("#hsr_speed").val();
        var train_speed=$("#train_speed").val();
        var bus_speed=$("#bus_speed").val();
        var car_speed=$("#car_speed").val();
        var wi_one=$("#wi_one").val();

        var hsr_comfortable=$("#hsr_comfortable").val();
        var train_comfortable=$("#train_comfortable").val();
        var bus_comfortable=$("#bus_comfortable").val();
        var car_comfortable=$("#car_comfortable").val();
        var wi_two=$("#wi_two").val();

        var hsr_safety=$("#hsr_safety").val();
        var train_safety=$("#train_safety").val();
        var bus_safety=$("#bus_safety").val();
        var car_safety=$("#car_safety").val();
        var wi_three=$("#wi_three").val();
        
        var hsr_price=$("#hsr_price").val();
        var train_price=$("#train_price").val();
        var bus_price=$("#bus_price").val();
        var car_price=$("#car_price").val();
        var wi_four=$("#wi_four").val();

        var hsr_person=$("#hsr_person").val();
        var train_person=$("#train_person").val();
        var bus_person=$("#bus_person").val();
        var car_person=$("#car_person").val();
        var wi_five=$("#wi_five").val(); 
        if(hsr_speed !="" && train_speed !="" && bus_speed !="" && car_speed !="" && wi_one !="" 
           && hsr_comfortable !="" && train_comfortable !="" && bus_comfortable !="" && car_comfortable !="" && wi_two !=""
           && hsr_safety !="" && train_safety !="" && bus_safety !="" && car_safety !="" && wi_three !=""
           && hsr_price !="" && train_price !="" && bus_price !="" && car_price !="" && wi_four !=""
           && hsr_person !="" && train_person !="" && bus_person !="" && car_person !="" && wi_five !=""
         ){ 
                //分母
             var wi_total=parseInt(wi_one)+parseInt(wi_two)+parseInt(wi_three)+parseInt(wi_four)+parseInt(wi_five);
             
             //*各項權重   公式>>使用者輸入的權重/分母=*各項權重
             var wi_speed=parseInt(wi_one)/parseInt(wi_total);
             var wi_comfortable=parseInt(wi_two)/parseInt(wi_total);
             var wi_safety=parseInt(wi_three)/parseInt(wi_total);
             var wi_price=parseInt(wi_four)/parseInt(wi_total);
             var wi_person=parseInt(wi_five)/parseInt(wi_total);

             var hsr=parseInt(hsr_speed) * wi_speed +
                     parseInt(hsr_comfortable)*wi_comfortable +
                     parseInt(hsr_safety)*wi_safety +
                     parseInt(hsr_price)*wi_price +
                     parseInt(hsr_person)*wi_person ;

            var train=parseInt(train_speed) * wi_speed +
                     parseInt(train_comfortable)*wi_comfortable +
                     parseInt(train_safety)*wi_safety +
                     parseInt(train_price)*wi_price +
                     parseInt(train_person)*wi_person ;

            var bus=parseInt(bus_speed) * wi_speed +
                     parseInt(bus_comfortable)*wi_comfortable +
                     parseInt(bus_safety)*wi_safety +
                     parseInt(bus_price)*wi_price +
                     parseInt(bus_person)*wi_person ;

            var car=parseInt(car_speed) * wi_speed +
                     parseInt(car_comfortable)*wi_comfortable +
                     parseInt(car_safety)*wi_safety +
                     parseInt(car_price)*wi_price +
                     parseInt(car_person)*wi_person ;

            $("#hsr").html(hsr);
            $("#train").html(train);
            $("#bus").html(bus);
            $("#car").html(car);
                     
        }
        else
        {
            alert("請輸入完整");
        }

    })



//結束
})