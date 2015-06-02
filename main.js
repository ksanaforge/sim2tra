//create simplified to traditional mapping table, multiple target store as array
//干=[榦,幹,乾]
//if you want 干 to be one of the candidates,
//add "干":"干"  in table.js
var buildtable=function(){
	var s2t={};
	for (var tra in t2s) {
		var sim=t2s[tra];
		if (s2t[sim]) {
			if (typeof s2t[sim]=="string") {
				s2t[sim]=[s2t[sim]];
			}
			s2t[sim].push(tra);
		} else {
			s2t[sim]=tra;
		}
	}
	return s2t;
}

var s2t=buildtable();
window.convert=function(e){ //todo , deal with surrogate pair
	var ip=input.value;
	var o="";
	for (var i=0;i<ip.length;i++) {
		var t=s2t[ip[i]];
		if (typeof t=="string") {
			o+=t;
		} else if (typeof t=="object") {
			o+="["+t.join(",")+"]";
		} else {
			o+=ip[i];//as it is
		}
	}
	output.value=o;
}