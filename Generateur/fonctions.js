
		function boxfilliere() { 
		
		//Mettre tous les rectangles en classe Hiden
			
			elem = document.querySelectorAll("rect"); //Selection des rectangles
			
			for (var i=0; i < elem.length; i++) {
				elem[i].setAttribute("class", "hiden");  //Changer la classe to hiden
			}

		//Puis on traite case par case pour mettre a activ
			
			//pour le telecom
			var name;
			if (telecombox.checked){ //si la case est coché
				for (var i=0; i < nb_etp; i++) {						// on parcours toute les entreprises
					if(listeEtp[i].filiereRecherchee.includes('telecom')){     //Pour vérifier si elle vérifie la propriété
						listeEtp[i].ipb.setAttribute("class", "activ");  	//Puis on prend son placement et on change sa classe à activ
					}
				}
			}
		  
		  //Pour les elec
		  if (elecbox.checked){ 
				for (var i=0; i < nb_etp; i++) {
					if(listeEtp[i].filiereRecherchee.includes('elec')){
						listeEtp[i].ipb.setAttribute("class", "activ");
					}
				}
		  }
		  
		  //Pour les mmk
		  if (mmkbox.checked){
				for (var i=0; i < nb_etp; i++) {
					if(listeEtp[i].filiereRecherchee.includes('mmk')){
						listeEtp[i].ipb.setAttribute("class", "activ");
					}
				}
		  }
		  
		  //Pour les infos
		  if (infobox.checked){
				for (var i=0; i < nb_etp; i++) {
					if(listeEtp[i].filiereRecherchee.includes('info')){
						listeEtp[i].ipb.setAttribute("class", "activ");
					}
				}
		  }

		}
		
		function domaines() {
			
			var domaines = ["aero", "recherche", "sante","robot"];	//liste des domaines possible
			
			//On sépare en 2 cas

			// Si il y à une fillière selectionné. (on prend les cases déjà activ et on passe en hiden celles qui ne vérifient PAS la/les propriétés)
			if (telecombox.checked || elecbox.checked || mmkbox.checked || infobox.checked){
				
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
					ipbstr=(stand.id).split('');				//On récupère le placement
					i=ipbstr[1]-1; 							//Pour avoir le numéro qui indique le numéro entreprise (pour avoir les infos)
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

//Boucle pour associer les noms.
for (var i=1; i < nb_etp; i++) {
	eval("E"+i+".innerHTML=listeEtp[i-1].nom");
}	

//Boucle pour associer les liens.
for (var i=1; i < nb_etp; i++) {
	eval("E"+i+".innerHTML=listeEtp[i-1].nom");
	eval("lien"+i+".href = listeEtp[i-1].lien");
}




