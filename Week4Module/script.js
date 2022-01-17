var egnames=[9];
egnames[0]="John";
egnames[1]="Jen";
egnames[2]="jason";
egnames[3]="paul";
egnames[4]="frank";
egnames[5]="larry";
egnames[6]="paula";
egnames[7]="laura";
egnames[8]="jim";


for (var i = 0; i < egnames.length; i++) {
	if(egnames[i].charAt(0)=='J'|| egnames[i].charAt(0)=='j'){
        console.log("Goodbye "+ egnames[i]);
	}
	else{
		console.log("Hello "+ egnames[i]);
	}
}