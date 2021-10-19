var products = "apple blackberry banana tomato brocoli pumpkin";

var whatToDo = prompt("Type '1' to check if a product is available\n Type '2' to list all products\n Type anything to quit");

if(whatToDo === '2'){
	document.write("<p class = "info"> The products are available: " + products + "</p>");
} else if(whatToDo === '1'){
	var product = prompt("Enter the name of the product to see if it's available");
	if(products.indexOf(product) === -1){
		document.write("<p class = "error">Sorry, the product is not available.</p>");	
	} else {
		document.write("<p class = "success">The product is available.</p>")
	}
} else {
	document.write("<p class = "info">Refresh the page if you want to look for a product or list all the products</p>");
}