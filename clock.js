/* This entire function is for the clock */
function startTime() {
/* This section is in order to get time */
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds(); 
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    /* these are meant to display "AM" of "PM" depending on the time*/
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    
    /* This is to put the zeros next to the time when they are single digits */
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
   
   /* The id for the clock date */
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    /* This section of variables are for getting the months and days */
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+", "+curYear;
    document.getElementById("date").innerHTML = date;
        
    var time = setTimeout(function(){ startTime() }, 500);
    

/* This function is meant to put a zero next to the number on the clock*/

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


/* This is meant to be use as the variable for the time domains */
t = (h*60+m)

/* This variable is meant to replace how much time is remaining during the end of school*/
k = "No"



window.setInterval(function (){

/* This is the schedule domains, with their variables to show what block it is and how 
much time is left*/

	if (t < 505 && t >= 0) {b = "School Will Soon Open"; n = 505-t;}
	if (505 <= t && t < 510){b = "Warning Bell"; n = 510-t;}
	if (510 <= t && t < 585){b = "First Block"; n = 585-t;}
	if (585 <= t && t < 595){b = "Break"; n = 595-t;}
	if (595 <= t && t < 600){b = "Second Block Is Starting"; n = 600-t;}
	if (600 <= t && t < 675){b = "Second Block"; n = 675-t;}
	if (675 <= t && t < 680){b = "Third block Is Starting"; n = 680-t;}
	if (680 <= t && t < 760){b = "Third Block"; n = 760-t;}
	if (760 <= t && t < 800){b = "Lunch"; n = 800-t;}
	if (800 <= t && t < 805){b = "Fourth Block Is Starting"; n = 805-t;}
	if (805 <= t && t < 885){b = "Fourth Block"; n = 885-t;}
	if (885 <= t && t <= 1440) {b = "School Is Closed"; n = k;}

           
	if (t < 505 && t >= 0) {v = "School Will Soon Open"; n2 = 505-t;}
	if (505 <= t && t < 510){v = "Warning Bell"; n2 = 510-t;}
	if (510 <= t && t < 575){v = "First Block"; n2 = 575-t;}
	if (575 <= t && t < 585){v = "Break"; n2 = 585-t;}
	if (585 <= t && t < 590){v = "Second Block Is Starting"; n2 = 590-t;}
	if (590 <= t && t < 655){v = "Second Block"; n2 = 655-t;}
	if (655 <= t && t < 660){v = "Third block Is Starting"; n2 = 660-t;}
	if (660 <= t && t < 725){v = "Third Block"; n2 = 725-t;}
	if (725 <= t && t < 765){v = "Lunch"; n2 = 765-t;}
	if (765 <= t && t < 770){v = "Fourth Block Is Starting"; n2 = 770-t;}
	if (770 <= t && t < 835){v = "Fourth Block"; n2 = 835-t;}
	if (835 <= t && t < 840){v = "Advisory Is Starting"; n2 = 840-t;}
	if (840 <= t && t < 885){v = "Advisory"; n2 = 885-t;}
	if (885 <= t && t <= 1440){v = "School Is Closed"; n2 = k;}
    
    
    if (t < 575 && t >= 0) { i = "School Will Soon Open"; n3 = 575-t;}
	if (575 <= t && t < 580){i = "Warning Bell"; n3 = 580-t;}
	if (580 <= t && t < 640){i = "First Block"; n3 = 640-t;}
	if (640 <= t && t < 650){i = "Break"; n3 = 650-t;}
	if (650 <= t && t < 655){i = "Second Block Is Starting"; n3 = 655-t;}
	if (655 <= t && t < 715){i = "Second Block"; n3 = 715-t;}
	if (715 <= t && t < 755){i = "Lunch"; n3 = 755-t;}
	if (755 <= t && t < 760){i = "Third Block Is Starting"; n3 = 760-t;}
	if (760 <= t && t < 820){i = "Third Block"; n3 = 820-t;}
	if (820 <= t && t < 825){i = "Fourth Block Is Starting"; n3 = 825-t;}
	if (825 <= t && t < 885){i = "Fourth Block"; n3 = 885-t;}
	if (885 <= t && t <= 1440){i = "School Is Closed"; n3 = k;}
	
	
	if (t < 505 && t >= 0) { c = "School Will Soon Open"; n4 = 505-t;}
	if (505 <= t && t < 510){c = "Warning Bell"; n4 = 510-t;}
	if (510 <= t && t < 570){c = "First Block"; n4 = 570-t;}
	if (570 <= t && t < 575){c = "Second Block Is Starting"; n4 = 575-t;}
	if (575 <= t && t < 635){c = "Second Block"; n4 = 635-t;}
	if (635 <= t && t < 645){c = "Break"; n4 = 645-t;}
	if (645 <= t && t < 650){c = "Third block Is Starting"; n4 = 650-t;}
	if (650 <= t && t < 710){c = "Third Block"; n4 = 710-t;}
	if (710 <= t && t < 715){c = "Fourth Block Is Starting"; n4 = 715-t;}
	if (715 <= t && t < 775){c = "Fourth Block"; n4 = 775-t;}
	if (775 <= t && t <= 1440){c = "School Is Closed"; n4 = k;}
	
	
	if (t < 505 && t >= 0) { o = "School Will Soon Open"; n5 = 505-t;}
	if (505 <= t && t < 510){o = "Warning Bell"; n5 = 510-t;}
	if (510 <= t && t < 570){o = "First Block"; n5 = 570-t;}
	if (570 <= t && t < 580){o = "Break"; n5 = 580-t;}
	if (580 <= t && t < 585){o = "Second Block Is Starting"; n5 = 585-t;}
	if (585 <= t && t < 645){o = "Second Block"; n5 = 645-t;}
	if (645 <= t && t < 720){o = "Mass"; n5 = 720-t;}
	if (720 <= t && t < 765){o = "Lunch"; n5 = 765-t;}
	if (765 <= t && t < 770){o = "Third block Is Starting"; n5 = 770-t;}
	if (770 <= t && t < 825){o = "Third Block"; n5 = 825-t;}
	if (825 <= t && t < 830){o = "Fourth Block Is Starting"; n5 = 830-t;}
	if (830 <= t && t < 885){o = "Fourth Block"; n5 = 885-t;}
	if (885 <= t && t <= 1440){o = "School Is Closed"; n5 = k;}

    
    
    if (540 <= t && t < 600){p = "Classes Will Start Soon"; n6 = 600-t;}
	if (600 <= t && t < 630){p = "First Block"; n6 = 630-t;}
	if (630 <= t && t < 660){p = "First Break"; n6 = 660-t;}
	if (660 <= t && t < 690){p = "Second Block"; n6 = 690-t;}
	if (690 <= t && t < 780){p = "Lunch"; n6 = 780-t;}
	if (780 <= t && t < 810){p = "Third Block"; n6 = 810-t;}
	if (810 <= t && t < 840){p = "Second Break"; n6 = 840-t;}
	if (840 <= t && t < 870){p = "Fourth Block"; n6 = 870-t;}
	if (870 <= t && t < 1440){p = "School Is Closed"; n6 = k;}}
    , 100);
 	
 	/* These are the call ids that show the schedules and minutes remaining*/
 	
 	document.getElementById("blocks").innerHTML = b
 	document.getElementById("blocks2").innerHTML = v
    document.getElementById("blocks3").innerHTML = i
  	document.getElementById("blocks4").innerHTML = c
	document.getElementById("blocks5").innerHTML = o
	document.getElementById("blocks6").innerHTML = p
	
	document.getElementById("blockss").innerHTML = n+ " " +"Minutes Remaining"
	document.getElementById("blockss2").innerHTML = n2+ " " +"Minutes Remaining"
    document.getElementById("blockss3").innerHTML = n3+ " " +"Minutes Remaining"
    document.getElementById("blockss4").innerHTML = n4+ " " +"Minutes Remaining"
    document.getElementById("blockss5").innerHTML = n5+ " " +"Minutes Remaining"
    document.getElementById("blockss6").innerHTML = n6+ " " +"Minutes Remaining"
    
    
}

/* This is to allow the radio function to show the schedule */

 function ShowHideDiv() {
        var reg = document.getElementById("reg");
        var s1 = document.getElementById("blocks");
        var s11 = document.getElementById("blockss");
        s1.style.display = reg.checked ? "block" : "none";
        s11.style.display = reg.checked ? "block" : "none";

        var ad = document.getElementById("ad");
        var s2 = document.getElementById("blocks2");
        var s22 = document.getElementById("blockss2");
        s2.style.display = ad.checked ? "block" : "none";
        s22.style.display = ad.checked ? "block" : "none";
        
        var late = document.getElementById("late");
        var s3 = document.getElementById("blocks3");
        var s33 = document.getElementById("blockss3");
        s3.style.display = late.checked ? "block" : "none";
        s33.style.display = late.checked ? "block" : "none";
        
        var ed = document.getElementById("ed");
        var s4 = document.getElementById("blocks4");
        var s44 = document.getElementById("blockss4");
        s4.style.display = ed.checked ? "block" : "none";
        s44.style.display = ed.checked ? "block" : "none";
        
        var ma = document.getElementById("ma");
        var s5 = document.getElementById("blocks5");
        var s55 = document.getElementById("blockss5");
        s5.style.display = ma.checked ? "block" : "none";
        s55.style.display = ma.checked ? "block" : "none";
        
        var qa = document.getElementById("qa");
        var s6 = document.getElementById("blocks6");
        var s66 = document.getElementById("blockss6");
        s6.style.display = qa.checked ? "block" : "none";
        s66.style.display = qa.checked ? "block" : "none";
    }
    
    
    
    
 /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



