function genere() { 

var domaines = ["aero", "recherche", "sante","robot"];
var LesActivite ='';
var LesFillere ='';


		if (telecombox.checked){ //si la case est coché
			LesFillere='telecom,';
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

navigator.Clipboard.writeText("<presse-papiers vide>");

}
