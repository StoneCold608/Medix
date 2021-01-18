
 <script type="text/javascript">
	 // business logic
         // business logic
		 
        //Javascript Object
		 //var dicloxacilin
	//{
	//	name:dicloxacilin
	//	price:2800
	//	type: capsule
	//	delivery:home
	//}
		 
        //dicloxacilin.name
	var result = document.getElementById("result-integumentary")
	
        var addcartbtn  = document.getElementById("add-cart")
        addcartbtn.addEventListener("click",function()
	{ 
		var med = [{name:dicloxacilin price:2800 type: capsule delivery:home},{name:dicloxacilin price:2300 type:syrup delivery:home}]
		render-output(med)
	
	});
		 
	//JSON(Javascript Object Notaion)
	       
		 
		 function render-output(data)
		 {
			 var htmlString = "";
			 for (i=0;i<data.length;i++)
			 {
				 htmlString+="<p>"+ data[i].name +"."+"</p>"
			 }
			 result.insertAdjacentHTML("before-end",htmlString);
		 }
	 
        
		 
	$('#med-selector option').each(function()
	{
		
		sum += Number($(this).val());		
		optionValues.push($(this).val());
	});
	
		$('#result').html(sum);
		$( ".med-selector" ).val();
		
var add = function(number1, number2) 
{
return number1 + number2;
};
var subtract = function(number1, number2)
{
return number1 - number2;
};
var multiply = function(number1, number2)
{
return number1 * number2;
};
var divide = function(number1, number2)
{
return number1 / number2;
};

$(document).ready(function()
 {
$("form#add").submit(function(event)
 {
event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
var result = add(number1, number2);
$("#output").text(result);
});
});

var a = document.getElementById("");
var ausgangss = a.options[a.selectedIndex].value;

		
   
</script>
