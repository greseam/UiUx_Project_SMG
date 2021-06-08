/*
    Author: Sean Gregor

    The use of 2 or more user-defined functions
    The use of the document.addEventListener() method
    The use of an array
    The use of decision making logic (if statements, switch statements)
    Use of at least one document object method that targets element(s). Ex.  getElementsById(), getElementsByClass(), getElementsByTagName(), document.querySelector() etc...
    Use of at least one document object property.  Ex. innerHTML, images, head, links, activeElement, etc...


*/

/* !Order, Javascript functionality  */
const buttonArray = document.querySelectorAll(".item");
const x = document.getElementById("productList");
console.log(buttonArray);
for (i = 0; i < buttonArray.length; i++) {
    buttonArray[i].onclick = function(event){
        var option = document.createElement("option");
        option.text = event.target.value;
        x.add(option);
    }
}

function remove(){
    var x = document.getElementById("productList");
    alert(x[x.selectedIndex].value + " will Be removed from order!")
    x.remove(x.selectedIndex);

}

function inform(){
    alert("The Button doesn't go any where, but would go to the provider for gift cards")
}

function orderNow(){
    location.replace("html/order.html");
}

function submitOrder(){
    var person = prompt("Please enter a name for your ticket.");
    var x = document.getElementById("productList");
    var y = "";
    for ( i = 0; i < x.length; i++) {
        var element = x[i].value;
        y= y+" | "+element+" | ";
    }
    alert("Hello "+ person +", your order will be finished shortly"+"\n"+"------------------------"+"\n Order:"+y+"\n\nIf this site was fully functional this data would be sent to the coffee shop as an order");

}

/* EOS*/





