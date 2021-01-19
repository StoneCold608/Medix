<script>
var OrderNew = [];
	
function Med(medName,medType,medStrength,medDelivery, medQuantity) {
    this.medName=medName;
    this.medType= medType;
    this.medStrength=medStrength;
    this.medDelivery=medDelivery;
    this.medQuantity=medQuantity;
}
var medPrice= [900,600,400,]
Med.prototype.totalPrice = function(){
    return (this. medStrength+ this.medDelivery + this.) * this.medQuantity
};
Med.prototype.medN = function () {
    if (this.medType == 900) {
        return "Panadol"
        
    } else if (this.medType == 600) {
        return "Strepsils"
    } else if (this.medType == 400) {
        return "Brufen"
    }
}
Med.prototype.medS = function () {
    if (this.medStrength == 150) {
        return "Syrup"
        
    } else if (this.medStrength == 200) {
        return "Capsule"
    } else if (this.medStrength == 250) {
        return "Injection"
    }
}
Med.prototype.medD =function(){
    if (this.medDelivery == 150){
        return "Main Branch Pickup"
    }
    else if (this.medDelivery == 170){
        return " Sub Branch Pickup"
    }
    else if ( this.medDelivery == 200){
        return"Home Delivery"
    }
}

$("#checkout").click(function (event) {
    
    var MedName = $("#Name").val();
    
    var MedType = parseInt( $("#Type").val());
    
    var MedStrength = parseInt( $("#Strength").val());
    
    var MedDelivery =parseInt( $("#Delivery").val());
    
    var MedQuantity =parseInt( $("#Quantity").val());
    
    
    var newMed = new Med(MedName, MedType, MedStrength , MedDelivery, MedQuantity); 
    
    
    console.log(newMed)
    
    console.log(newMed.medName)
    OrderNew.push(newMed);
    console.log(OrderNew)
    
    $("#Name").val("");
    $("#Type").val("");
    $("#Strength").val("");
    $("#Delivery").val("");
    $("#Quantity").val("");
     
    totalAmount = 0
    for (let i = 0; i < OrderNew.length; i++ )
    {
        totalAmount += OrderNew[i].totalPrice();
        console.log(totalAmount)
    }
    
    $("#ordersTaken").append(
        "<tr>" +
        '<td scope="orderCalculation">' +
       newMed.medName +
        "</td>" +
        "<td>" +
        newMed.medT () +
        " @ " +
        newMed.medType + 
        "</td>" +
        "<td>" +
        newMed.medS () +
        " @ " +
        newMed.medStrength + 
        "</td>" +
        "<td>" +
        newMed.medD() +
        " @ " +
        newMed.medDelivery + 
        "</td>" +
        "<td>" +
        newMed.MedQuantity +
        "</td>" +
        "<td>" +
        newMed.totalPrice() +
        "</td>" +
        "</tr>"

    );
    
    $("#ordersTaken").append("");
    if (OrderNew.length > 0) {
        $("#form-heading").empty();
        $("#form-heading").append("Make A New Order");
    }
    $("#totalAmount").fadeIn();
    $("#Checkout").fadeIn();
    $("#orderPut").fadeIn();
    $("#totalAmount").empty();
    $("#totalAmount").append(totalAmount);
    $("#totalAmount").show();
});
$("#Checkout").click(function () {
$(".checkout-info").show();
});
$("#checkoutForm").submit(function (event) {
event.preventDefault();
var name = $("#name").val();
var deliveryOption = $("#OptionDelivery").val();
NameOfCustomer = name;
$("#name").val("");
$("#OptionDelivery").val("");
$(".checkout-info").hide();
$("#Checkout").hide();
$("#totalAmount").empty();
if (deliveryOption === "deliver") {
    $(".deliveryLocation").show();
    $(".deliveryCost").show();
    $("#totalAmount").empty();
    $("#delivery-cost").append(150);
    totalAmount += 150;
    $("#totalAmount").empty();
    $("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$(".TotalAmount").show();
} else {
    alert(+"Dear, "+ NameOfCustomer + ": Your total bill is Ksh. " + totalAmount + ".Collect your order in the next one hour." + " " + " Feel free to reach out to us anytime for questions peraining our products.");
}
});
$("#locationForm").submit(function (event) {
event.preventDefault();
var estateEntered = $("#estate").val();
var houseNumberEntered = $("#houseNumber").val();
estate = estateEntered;
houseNumber = houseNumberEntered;
$("#Checkout").hide();
$(".deliveryLocation").hide();
$("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$(".TotalAmount").show();
alert(+ "Dear " + NameOfCustomer + ": Your new total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hour." + " Make full payment on delivery." + "Feel free to reach out to us anytime for questions peraining our products and deliveries.");
});
</script>
 
