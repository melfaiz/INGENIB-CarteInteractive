
		function boxfilliere() {

		//Mettre tous les rectangles en classe Hiden

			elem = document.querySelectorAll("rect"); //Selection des rectangles

			for (var i=0; i < elem.length; i++) {
				elem[i].setAttribute("class", "hiden");  //Changer la classe to hiden
			}

		//Puis on traite case par case pour mettre a activ
		filliere=['info','telecom','rsi','mmk','elec','see','cognitif'];
		filliere.sort();

		filliere.forEach(function(item){ //Pour tous les filliere
			if (eval(""+item+"box.checked")){   //On regarde si la case est coché
				for (var i=0; i < nb_etp; i++) {						// on parcours toute les entreprises
					if(eval("listeEtp[i].filiereRecherchee.includes('"+item+"')")){     //Pour vérifier si elle vérifie la propriété
						listeEtp[i].ipb.setAttribute("class", "activ");  	//Puis on prend son placement et on change sa classe à activ
					}
				}
			}
		});

		}

function actietp() {

	var domaines = ["tourisme","recherche", "ferroviaire", "comm", "logistique", "cyberdefense", "reseau" , "mecanique","datascience","devweb","webanalytics","jeux","intarti","mode","hautetech","militaire","energie","finance","programmation","editlogi","defense","aero","automobile","ecommerce","telecommuication","sante","services","log3d","indu","conseil","transport","microelec"];

			//On sépare en 2 cas

			// Si il y à une fillière selectionné. (on prend les cases déjà activ et on passe en hiden celles qui ne vérifient PAS la/les propriétés)
			if (telecombox.checked || elecbox.checked || mmkbox.checked || infobox.checked || cognitifbox.ckecked){

				//variables
				var ipbstr;
				var i;
				var check =0 ;
				var props=[];

				boxfilliere(); //On refait cette opération si jamais il y à eu des changements entres temps

				//on regarde toute les cases qui vont devoir être traitées (qui sont activ à cause de la filiere)
				var stands = document.querySelectorAll(".activ");

				//On regarde tous les domaines qui vont devoir être traitées (parce que la checkbox est cochée)
				domaines.forEach(function(item){ //Pour tous les domaines
					if (eval(""+item+"box.checked")){   //On regarde si la case est coché
						props.push(item);//on stock toute les propriété à vérifier.
						check = 1;
					}
				});

				//Si il y a au moins une checkbox domaines coché uniquement
				if(check==1){

				stands.forEach(function(stand){				//Pour toute les cases 'activ'
					ipbstr=(stand.id).split('');		                  	//On récupère le placement
					if(ipbstr.length==2){
						i=ipbstr[1]-1; 							//Pour avoir le numéro qui indique le numéro entreprise (pour avoir les infos
					}
					else{
						i=ipbstr[1]+ipbstr[2]-1;
					}
					ver=0;
					props.forEach(function(item){			//Pour toute les propriétés cochées, on regarde si elle est vérifié
						if(listeEtp[i].activite.includes(item)){
							ver=ver+1;

						}
					});
					//Si l'entreprise ne vérifie aucune des propriétés coché, alors on changesa classe a hiden
					if(ver==0){
						listeEtp[i].ipb.setAttribute("class", "hiden"); //Si non, alors on passe ça classe à  hiden
					}

				});

				}

			}

			//Si aucune fillière n'est coché
			else {
				//Mettre tous les rectangles en classe Hiden

				elem = document.querySelectorAll("rect");
				for (var i=0; i < elem.length; i++) {
					elem[i].setAttribute("class", "hiden");  //Changer la classe to hiden
				}

				//Puis on passe a activ toute les entrepriss qui vérifie la/les proprété cochées
				domaines.forEach(function(item){
						if (eval(""+item+"box.checked")){
							for (var i=0; i < nb_etp; i++) {
								if(listeEtp[i].activite.includes(item)){
									listeEtp[i].ipb.setAttribute("class", "activ");
								}

							}
						}

					});
			}
		}


function rechercheetp(){
	for (var i=0; i < nb_etp-1; i++) {
		if(listeEtp[i].nom==choixept.value){
				elem = document.querySelectorAll("rect");
				for (var j=0; j < elem.length; j++) {
					elem[j].setAttribute("class", "hiden");  //Changer la classe to hiden
				}
				listeEtp[i].ipb.setAttribute("class", "activ");
				if (i<10) {
					affichenb();
				}
				if (i>9 & i<35) {
					afficherue();
				}
				if (i>34 & i<60) {
					affichess1();
				}
				if (i>59 & i<79) {
					affichess2();
				}
				if(i>78){
					affichenbrdc();
				}

		}
	}

}

function afficherue(){
	if (screen.width>800) {
	document.getElementById("AncienBatiment").style.removeProperty( 'display' );
	document.getElementById("SousSol").style.display = "none";
	document.getElementById("SousSolDeux").style.display = "none";
	document.getElementById("lamaparelever").style.display = "none";
	document.getElementById("RDCnouvBat").style.display = "none";
	document.getElementById("RDCnouvBat").style.display = "none";
	}
	else{
		document.getElementById("ABMobile").style.removeProperty( 'display' );
		document.getElementById("SousSolMobile").style.display = "none";
		document.getElementById("SousSolDeuxMobile").style.display = "none";
		document.getElementById("NBMobile").style.display = "none";
		document.getElementById("RDCnbMobile").style.display = "none";
	}
	bouton3.setAttribute("class", "boutonactif");
	bouton2.setAttribute("class", "lesboutons");
	bouton1.setAttribute("class", "lesboutons");
	bouton4.setAttribute("class", "lesboutons");
	bouton5.setAttribute("class", "lesboutons");
}

function affichenb(){
	if (screen.width>800) {
	document.getElementById("lamaparelever").style.removeProperty( 'display' );
	document.getElementById("SousSol").style.display = "none";
	document.getElementById("SousSolDeux").style.display = "none";
	document.getElementById("AncienBatiment").style.display = "none";
	document.getElementById("RDCnouvBat").style.display = "none";
}
else{
	document.getElementById("NBMobile").style.removeProperty( 'display' );
	document.getElementById("SousSolDeuxMobile").style.display = "none";
	document.getElementById("SousSolMobile").style.display = "none";
	document.getElementById("ABMobile").style.display = "none";
	document.getElementById("RDCnbMobile").style.display = "none";
}
bouton1.setAttribute("class", "boutonactif");
bouton2.setAttribute("class", "lesboutons");
bouton3.setAttribute("class", "lesboutons");
bouton4.setAttribute("class", "lesboutons");
bouton5.setAttribute("class", "lesboutons");
}

function affichessl(){
	if (screen.width>800) {
	document.getElementById("SousSol").style.removeProperty( 'display' );
	document.getElementById("lamaparelever").style.display = "none";
	document.getElementById("SousSolDeux").style.display = "none";
	document.getElementById("AncienBatiment").style.display = "none";
	document.getElementById("RDCnouvBat").style.display = "none";
}
else{
	document.getElementById("SousSolMobile").style.removeProperty( 'display' );
	document.getElementById("SousSolDeuxMobile").style.display = "none";
	document.getElementById("NBMobile").style.display = "none";
	document.getElementById("ABMobile").style.display = "none";
	document.getElementById("RDCnbMobile").style.display = "none";
}
bouton4.setAttribute("class", "boutonactif");
bouton2.setAttribute("class", "lesboutons");
bouton3.setAttribute("class", "lesboutons");
bouton1.setAttribute("class", "lesboutons");
bouton5.setAttribute("class", "lesboutons");
}

function affichess2(){
	if (screen.width>800) {
	document.getElementById("SousSolDeux").style.removeProperty( 'display' );
	document.getElementById("SousSol").style.display = "none";
	document.getElementById("lamaparelever").style.display = "none";
	document.getElementById("AncienBatiment").style.display = "none";
	document.getElementById("RDCnouvBat").style.display = "none";
}
else{
	document.getElementById("SousSolDeuxMobile").style.removeProperty( 'display' );
	document.getElementById("SousSolMobile").style.display = "none";
	document.getElementById("NBMobile").style.display = "none";
	document.getElementById("ABMobile").style.display = "none";
	document.getElementById("RDCnbMobile").style.display = "none";
}
bouton5.setAttribute("class", "boutonactif");
bouton2.setAttribute("class", "lesboutons");
bouton3.setAttribute("class", "lesboutons");
bouton4.setAttribute("class", "lesboutons");
bouton1.setAttribute("class", "lesboutons");
}

function affichenbrdc(){
	if (screen.width>800) {
	document.getElementById("RDCnouvBat").style.removeProperty( 'display' );
	document.getElementById("SousSol").style.display = "none";
	document.getElementById("lamaparelever").style.display = "none";
	document.getElementById("AncienBatiment").style.display = "none";
	document.getElementById("SousSolDeux").style.display = "none";
}
else{
	document.getElementById("RDCnbMobile").style.removeProperty( 'display' );
	document.getElementById("SousSolDeuxMobile").style.display = "none";
	document.getElementById("SousSolMobile").style.display = "none";
	document.getElementById("NBMobile").style.display = "none";
	document.getElementById("ABMobile").style.display = "none";
}
bouton2.setAttribute("class", "boutonactif");
bouton1.setAttribute("class", "lesboutons");
bouton3.setAttribute("class", "lesboutons");
bouton4.setAttribute("class", "lesboutons");
bouton5.setAttribute("class", "lesboutons");
}
