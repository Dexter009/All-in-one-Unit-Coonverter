var convertUnit;  //let's us decide which function to use for conversion
var sourceUnitIndex;
var targetUnitIndex;
//Left Navigation

var commonConverters = ["Angle", "Area", "Data Storage", "Data Transfer", "Length", "Shoe Size", "Temperature", "Time", "Volume", "Weight"];
var engineeringConverter = ["Acceleration", "Torque", "Electricity", "Energy", "Force", "Light", "Density & Mass capacity", "Power", "Pressure & Stress", "Velocity & Speed", "Viscosity"];
var financeConverters = ["Compund Interest", "Discount", "Simple Interest", "Tax", "EMI"];

$(document).ready(function(){

	//defaults
	unit[propertyIndex].forEach(function (index) {
    	let defaultcontent = '<li><button class = "unit">'+ index +'</button></li>';
    	let defaultcontent1 = '<li><button class = "unit-to">'+ index +'</button></li>';
    	$('#from-conv').append(defaultcontent);
    	$('#to-conv').append(defaultcontent1);
 	});

	$(".nav-element").on({
	    mouseenter: function () {
	        //stuff to do on mouse enter
	        let hov = $(this).text();
	        $(this).siblings('.options').css('display','block');
	        let newButtonns = new Array();
	        switch(hov){
	        	case 'Common Converter':
	        		commonConverters.forEach(function(index){
	        			newButtonns.push('<button class = "default-tabs">'+ index +'</button>');
	        			
	        		});
	        		console.log(newButtonns);	
	        		$(this).siblings('.options').html(newButtonns);
	        		break;
	        	case 'Finance Converter':
	        		financeConverters.forEach(function(index){
	        			newButtonns.push('<button class = "default-tabs">'+ index +'</button>');
	        			console.log(newButtonns);
	        				
	        		});
	        		$(this).siblings('.options').html(newButtonns);
	        		break;
        		case 'Engineering Converter':
        			engineeringConverter.forEach(function(index){
        				newButtonns.push('<button class = "default-tabs">'+ index +'</button>');
        				console.log(newButtonns);
        					
        			});
        			$(this).siblings('.options').html(newButtonns);
        			break;
	        }
	    },
	    mouseleave: function () {
	        //stuff to do on mouse leave
	        $(this).siblings('.options').css("display", "none");
	    }
	});
	$(".options").hover(
		function(){
			$(this).css("display", "block");
		},
		function(){
			$(this).css("display", "none");
		}
	);

	$("body").on('click',".default-tabs", function(e){
		let choice = $( this ).text();
		$(this).parent().siblings(".title.text").html(choice);
		propertyIndex = property.indexOf(choice);
		let content,content1;
		console.log(choice);
		console.log(propertyIndex);
        $('#from-conv').html("");
        $('#to-conv').html("");
        unit[propertyIndex].forEach(function (index) {
        	content = '<li><button class = "unit">'+ index +'<div class="triangle-h"></div></button></li>';
        	content1 = '<li><button class = "unit-to">'+ index +'<div class="triangle-h"></div></button></li>';
        	$('#from-conv').append(content);
        	$('#to-conv').append(content1);
     	});
         
	});
	
	$("body").on('click','.unit', function(e){
		$('.triangle-h').css("visibility","hidden");
		$( this ).children('.triangle-h').css("visibility","visible");
		convertUnit = $( this ).text();
		sourceUnitIndex = unit[propertyIndex].indexOf(convertUnit);
		let value = $("#quantity-from").val();
		let result = Convert(propertyIndex, sourceUnitIndex, targetUnitIndex, value);
		$("#quantity-to").val(result);
		
	});
	$("body").on('click','.unit-to', function(e){
		$('.triangle-h').css("visibility","hidden");
		$( this ).children('.triangle-h').css("visibility","visible");
		convertUnit = $( this ).text();
		targetUnitIndex = unit[propertyIndex].indexOf(convertUnit);
		let value = $("#quantity-from").val();
		let result = Convert(propertyIndex, sourceUnitIndex, targetUnitIndex, value);
		$("#quantity-to").val(result);
		
	});
	$("#quantity-from").keyup(function(){
		console.log(sourceUnitIndex);
		console.log(targetUnitIndex);
		let value = $("#quantity-from").val();
		let result = Convert(propertyIndex, sourceUnitIndex, targetUnitIndex, value);
		$("#quantity-to").val(result);
		console.log(result);
	});

});