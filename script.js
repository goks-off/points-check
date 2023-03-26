function myFunction(){
    //document.getElementById("gg").innerHTML = "Johnny Bravo";
    var mail=document.getElementById("email").value;
    var xmlhttp = new XMLHttpRequest();
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    //document.getElementById('gg').innerHTML = dd;
    
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var text=this.responseText;
        if(text=='0'){
            window.alert("Please enter valid email ID");

        }
        else{
		 var obj = eval('(' + text + ')');
            var res = [];
            for(var i in obj)
                res.push(obj[i]);
		for(var i in res){
		//document.getElementById('gg').innerHTML = ;
        document.getElementById('name').innerHTML = res[0].name;
		document.getElementById('amount').innerHTML = res[0].amount;
        if(dd=="24"){
            document.getElementById('points').innerHTML = res[0].day2points;
        }
        if(dd=="25"){
            document.getElementById('points').innerHTML = res[0].day3points;
        }
        document.getElementById('Totalpoints').innerHTML = res[0].points;
		document.getElementById('college').innerHTML = res[0].college;
        }
		}
    }
    // else{
    //     alert("Please enter valid email ID");
    // }
}
xmlhttp.open("GET", "Scorecheck.php?q="+mail+"", true);
xmlhttp.send();
}
