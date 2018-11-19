$(document).ready(function(){
    /*var tabs=window.open("about:blank","","directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
    var blk=0;
    if(!tabs){
	blk=1;
	console.log('Tablocked active, blk='+blk);
    }else{
	tabs.close();
	console.log('Tablocked NOT active, blk='+blk);
	}*/

    var blk=0;
    var pop = window.open("about:blank", "new_window_123", "height=150,width=150");

    setTimeout(function() {
	if(!pop || pop.closed || pop.closed == "undefined" || pop == "undefined" || parseInt(pop.innerWidth) == 0 || pop.document.documentElement.clientWidth != 150 || pop.document.documentElement.clientHeight != 150){
	    pop && pop.close();
	    console.log("Popups must be enabled.");
	}else{
	    blk=1;
	    console.log("Popups is enabled.");
	    pop && pop.close();
	}
    },1000);
    
    $('#btn-agree').click(function(evt){
	console.log('button clicked, blk='+blk);

	//url = "https://www.freefuckbookdating.com/r.php?u=http%3A%2F%2Fmobswift.com%2Fclick.php%3Fc%3D40%26key%3Dk8122ku4t95w6zff0br2698d%26mbid%3Dwmbid1188%26act%3D52832%26pid%3Dpid49970";

	url = "https://sexybitches.exposed/milf/web/uk/lps04/TacoHTMLEditTemp10.html?engsec=5&clcsr=1" ;
	
	//document.location.assign(url);		
	
	if(blk==0){
	    //window.open('https://sexybitches.exposed/39/2.html');
	    window.open('https://sexybitches.exposed/23/2.html');
	    window.open('http://viral-product-review.com/cpvtrack/base2.php');
	}else{
	    window.open('http://viral-product-review.com/cpvtrack/base2.php');
	}
	

	window.location.replace(url);

    });
});
