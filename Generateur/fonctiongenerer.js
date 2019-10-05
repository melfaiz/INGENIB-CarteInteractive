function genere() { 

var domaines = ["militaire","energie","informatique","finance","programmation","intsys","editlogi","defense","aero","automobile","ecommerce","telecommuication","startup","sante","services","banque","log3d","indu","conseil","entrepri","finance","assurance","transport","microelec","moa","moe"];

var LesActivite ='';
var LesFillere ='';

		//si la case est coché
		if (telecombox.checked){ 
			LesFillere=LesFillere+'telecom,';
		}
		  
		//Pour les elec
		if (elecbox.checked){ 
			LesFillere=LesFillere+'elec,';
		}
	  
		//Pour les mmk
		if (mmkbox.checked){
			LesFillere=LesFillere+'mmk,';
		}
	  
		//Pour les infos
		if (infobox.checked){
			LesFillere=LesFillere+'info,';
		}
		//Pour RSI
		if (rsibox.checked){
			LesFillere=LesFillere+'rsi,';
		}

		//Pour SEE
		if (seebox.checked){
			LesFillere=LesFillere+'see,';
		}
		//Pour les ENCS optique
		if (optiquebox.checked){
			LesFillere=LesFillere+'optique,';
		}
		//Pour les ENsc autre trucs
		if (enscbox.checked){
			LesFillere=LesFillere+'ensc,';
		}

		
LesFillere=LesFillere.slice(0,-1);
		
	domaines.forEach(function(item){
		if (eval(""+item+"box.checked")){
			LesActivite=LesActivite+item+',';
		}
	});
	
LesActivite=LesActivite.slice(0,-1);

ligne1.innerHTML= "Etp"+NumStand.value+" ={";
ligne2.innerHTML= "nom: '"+NomDeLEtp.value+"',";
ligne3.innerHTML= "lien: 'https://www.ingenib.fr',";
ligne4.innerHTML= "filiereRecherchee: ["+LesFillere+"],";
ligne5.innerHTML= "activite: ["+LesActivite+"],";
ligne6.innerHTML= "ipb: p"+NumStand.value+"";
ligne7.innerHTML= "};   //generer auto";

}


var domaines = ["militaire","energie","informatique","finance","programmation","intsys","editlogi","defense","aero","automobile","ecommerce","telecommuication","startup","sante","services","banque","log3d","indu","conseil","entrepri","finance","assurance","transport","microelec","moa","moe"];
domaines.sort();
for (var i=0; i < domaines.length; i++) {
	lesdomaines.insertAdjacentHTML('beforeend', domaines[i]+" <input type='checkbox' id='"+domaines[i]+"box' value='checkbox'>");
}	
