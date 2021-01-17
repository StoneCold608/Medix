// business logic
// business logic

function Shop(first)
{
  this.firstName = first;
  
  Shop.prototype.fullName= function()
	{
		return this.firstName;
	}

}

Shop.prototype.fullName= function()
{
	return this.firstName;
}

// user interface logic
$(document).ready(function()
	{
		$("form#new-contact").submit(function(event)
			{
				event.preventDefault();
				var inputtedFirstName = $("input#new-first-name").val();
				
				var newShop = new Shop(inputtedFirstName);
				$("ul#shops").append("<li><span class='contact'>" + newShop.firstName + "</span></li>");
				
				$(".contact").last().click(function()
					{
						$("#show-contact").show();     
						$("#show-contact h2").text(newShop.firstName);
                                              $(".first-name").text(newShop.firstName);
                                    	     
					});

				$("input#new-first-name").val("");
				

				});
		}); 
		

	
	 //Define a JSON(Javascript Object Notation).A JSON consists of an array which enclosures multiple objects
	var myArray = 
	[
	    {'product':'Sugar','quantity':'30','buyingprice':'Ksh.50','sellingprice':'Ksh.90'},
	    {'product':'Kerosene','quantity':'30','buyingprice':'Ksh.50','sellingprice':'Ksh.90'},
	   
	]
	
	buildTable(myArray)



	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].product}</td>
							<td>${data[i].quantity}</td>
							<td>${data[i].buyingprice}</td>
							<td>${data[i].sellingprice}</td>
					  </tr>`
			table.innerHTML += row


		}
	}
	
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
