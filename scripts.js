function getResult(){
	var triangle = [side1, side2, side3];
	var side1 = parseFloat(document.getElementById('side1').value);
	var side2 = parseFloat(document.getElementById('side2').value);
	var side3 = parseFloat(document.getElementById('side3').value);
	
	if(side1 === side2 && side2 === side3){
		alert("This is an equilateral triangle ");
	window.location.href="eqlter.html";
	}
	else if(side1 === side2 || side1 === side3 || side2 === side3){
	alert("This is an isosceles triangle ");
	window.location.href="isoceles.html";
	}
	else if((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
	alert("Not a definite triangle");
	window.location.href="undefined-triangle.html";
	}
	else{
	alert("This is a scalene triangle");
	window.location.href="scalene.html";
	}
	}