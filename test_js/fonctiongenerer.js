function genere() { 

var domaines = ["aero", "recherche", "sante","robot"];
var LesActivite =[];
var LesFillere =[];


		if (telecombox.checked){ //si la case est coché
			LesFillere.push('telecom');
		}
		  
		//Pour les elec
		if (elecbox.checked){ 
			LesFillere.push('elec');
		}
	  
		//Pour les mmk
		if (mmkbox.checked){
			LesFillere.push('mmk');
		}
	  
		//Pour les infos
			if (infobox.checked){
		LesFillere.push('info');
		}



domaines.forEach(function(item){
	if (eval(""+item+"box.checked")){
		LesActivite.push(item);
	}
});

ligne1.innerHTML= "Etp_ ={";
ligne2.innerHTML= "nom: '___',";
ligne3.innerHTML= "lien: 'https://www.ingenib.fr',";
ligne4.innerHTML= "filiereRecherchee: ['__','__'],";
ligne5.innerHTML= "activite: ['__','__'],";
ligne6.innerHTML= "ipb: p5";
ligne7.innerHTML= "};   //generer auto";



}