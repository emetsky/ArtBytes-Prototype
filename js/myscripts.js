
	function changeFromCity(new_city){
		document.getElementById("from_city").value = new_city;
	}
	function changeToCity(new_city){
		document.getElementById("to_city").value = new_city;
	}

	function change_time (){
		document.getElementById("depart").innerHTML = "Depart " + document.getElementById("from_city").value + "on " + document.getElementById("datepicker").value

	}

	function time(hour){
		document.getElementById("time-of-day").innerHTML =  hour + '<span class="caret"></span>';
		document.getElementById("table_time").innerHTML = hour;
		if (document.getElementById("table_time").innerHTML.indexOf('4:30am-10:30am') != -1){
			document.getElementById("table_time").innerHTML = "8:13am"
			document.getElementById("table_time-2").innerHTML = "8:13am"
		}
		if (document.getElementById("table_time").innerHTML.indexOf('10:30am-4:30pm') != -1){
			document.getElementById("table_time").innerHTML = "3:14pm"
			document.getElementById("table_time-2").innerHTML = "3:14pm"

		}
		if (document.getElementById("table_time").innerHTML.indexOf('4:30pm-10:30pm') != -1){
			document.getElementById("table_time").innerHTML = "5:15pm"
			document.getElementById("table_time-2").innerHTML = "5:15pm"
		}
		if (document.getElementById("table_time").innerHTML.indexOf('10:30pm-4:30am') != -1){
			document.getElementById("table_time").innerHTML = "2:33am"
			document.getElementById("table_time-2").innerHTML = "2:33am"
		}
	}

	function checkValid(){
		if (document.getElementById('from_city').value == ''){
			alert("You need to enter a location")
		}
		else if (document.getElementById('to_city').value == ''){
			alert("You need to enter a location")
		}
		else if (document.getElementById('datepicker').value == ''){
			alert("You need to enter a date")
		}
		else{
			hide('first_screen');
			show('second_screen', 'block')
		}
	}

	function showVal(newVal){
	  document.getElementById("price").innerHTML= "Under $" + newVal*12;
	  document.getElementById("table_price").innerHTML= "$" + newVal*12;
	   document.getElementById("table_price-2").innerHTML= "$" + newVal*12;
	  if (newVal == 100)
	  {
	  	document.getElementById("price").innerHTML= "Any";
	  	document.getElementById("table_price").innerHTML= "$432";
	  	document.getElementById("table_price-2").innerHTML= "$432";
	  }
	  if (newVal < 10){
	  	document.getElementById("price").innerHTML= "Under $100";
	  	document.getElementById("table_price").innerHTML= "$" + newVal*12+50;
	  	document.getElementById("table_price-2").innerHTML= "$" + newVal*12+50;

	  }
	}
	function changeStops(newStop)
	{
		document.getElementById("stops").innerHTML = newStop + ' <span class="caret"></span>'

	}


	function tickets (new_tickets){
		document.getElementById("tickets").innerHTML = new_tickets + ' <span class="caret"></span>'
		document.getElementById("table_tickets").innerHTML = new_tickets
		document.getElementById("table_tickets-2").innerHTML = new_tickets
		document.getElementById("tickets").style.color = "black"

	}

	function change_class(new_class){
		document.getElementById("class").innerHTML = new_class + ' <span class="caret"></span>'
		document.getElementById("table_class").innerHTML = new_class
		document.getElementById("table_class-2").innerHTML = new_class
	}

	function hide(target) { /*function taken from online to hide & show divs*/
		document.getElementById(target).style.display = 'none';

	}
	function show(target, display) {
		document.getElementById(target).style.display = display;
			
	}

