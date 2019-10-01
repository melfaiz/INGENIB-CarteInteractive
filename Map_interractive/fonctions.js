
		function boxfilliere() { 
		
		//Mettre tous les rectangles en classe Hiden
			
			elem = document.querySelectorAll("rect"); //Selection des rectangles
			
			for (var i=0; i < elem.length; i++) {
				elem[i].setAttribute("class", "hiden");  //Changer la classe to hiden
			}

		//Puis on traite case par case pour mettre a activ
		filliere=['info','telecom','rsi','mmk','elec','see','optique','eNsc'];
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
		
function fctdomaines() {
				
		var domaines = ["militaire","energie","informatique","finance","programmation","intsys","editlogi","defense","aero","automobile","ecommerce","telecommuication","startup","sante","services","banque","log3d","indu","conseil","entrepri","assurance","transport","microelec","moa","moe"];
			
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

		
function rechercheetp(){
	for (var i=1; i < nb_etp; i++) {
		if(listeEtp[i-1].nom==choixept.value){
				elem = document.querySelectorAll("rect"); 
				for (var j=0; j < elem.length; j++) {
					elem[j].setAttribute("class", "hiden");  //Changer la classe to hiden
				}
				listeEtp[i-1].ipb.setAttribute("class", "activ");
				
		}
	}
	
}
function resume(balise){

}	

//Boucle pour ecrire les checkboxs fillière
var domaines = ["militaire","energie","informatique","finance","programmation","intsys","editlogi","defense","aero","automobile","ecommerce","telecommuication","startup","sante","services","banque","log3d","indu","conseil","entrepri","assurance","transport","microelec","moa","moe"];
domaines.sort();
var LesNomsDesDomaines=["Militaire","Energie","Informatique","Finance","Programation","Infrastructure Système","Edition Logiciel","Defense","Aeronautique","Automobile","E-commerce","Telécommunication","Start-up","Santé","Services","Banque","Logiciel 3D","Industriel","Conseil","Entreprise","Assurance","Transport","Micro éléctronqiue","Moa","Moe"];
LesNomsDesDomaines.sort();
var str="";
for (var i=0; i < 25; i=i+8) {
	str="<tr>"
	for (var j=0; j < 8; j++) {
		if(i+j<25){
			str=str+"<td>"+LesNomsDesDomaines[i+j]+" <input type='checkbox' id='"+domaines[i+j]+"box' value='checkbox' onClick='fctdomaines()()'> </td>";
		}
	}
	str=str+"</tr>";
	lesdomaines.insertAdjacentHTML('beforeend', str);
}

//Boucle pour ecrire les checkboxs fillière
filliere=['info','telecom','rsi','mmk','elec','see','optique','eNsc'];
filliere.sort();
var LesNomsDesFilliere=["Informatique","Télécommunication","RSI","Math-méca","Electronique","SEE","Optique","ENSC"];
LesNomsDesFilliere.sort();
var str="";
str="<tr>"
for (var i=0; i < filliere.length; i++) {
	str=str+"<td>"+LesNomsDesFilliere[i]+" <input type='checkbox' id='"+filliere[i]+"box' value='checkbox' onClick='boxfilliere()'> </td>";
}
lesfillieres.insertAdjacentHTML('beforeend', str);
str="</tr>"	

//Boucle pour la recherche

var str=''; // variable to store the options
for (var i=1; i < nb_etp+1; i++) {
str += '<option value="'+listeEtp[i-1].nom+'" />'; // Storing options in variable
}
laliste.innerHTML = str;

//Boucle pour les maps

//Pour l'anciens bâtiement
var stands = [ '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="3.99872" y="96.1192" width="39.999814" height="72.000179" stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="33.999956" y="4.453103" width="74" height="41" stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="110.998486" y="4.452715" width="74" height="41" stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="199.998319" y="2.452715" width="74" height="41"  stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="275.998161" y="2.452715" width="74" height="41" stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="351.998008" y="2.452715" width="74" height="41" stroke="#000"',
						 '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="430.997856" y="2.452715" width="74" height="41" stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="507.997703" y="2.452721" width="74" height="41"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="596.99752" y="2.452715" width="74" height="41"  stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="672.997368" y="2.452717" width="74" height="41"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="748.997221" y="2.452715" width="74" height="41"  stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="313.998089" y="112.452502" width="74" height="41"  stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="390.997936" y="112.452502" width="74" height="41"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="34.998649" y="225.452285" width="74" height="41"  stroke="#000"',
						 '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="111.998497" y="226.452265" width="74" height="41"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="187.998344" y="226.452265" width="74" height="41"  stroke="#000"',
						 '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="264.998192" y="226.452271" width="74" height="41" stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="313.9981" y="271.452183" width="39.999811" height="111.000383"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="366.998466" y="379.99958" width="74" height="41" stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="448.997836" y="271.452193" width="39.999812" height="110.000386"  stroke="#000"',
						  '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="449.99782" y="225.452275" width="74" height="41"  stroke="#000"',
						 '<rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="524.997673" y="226.452271" width="74" height="41"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="600.997515" y="226.452265" width="74" height="41"  stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="676.997368" y="226.452265" width="74" height="41" stroke="#000"',
						 ' <rect fill="none" stroke-width="0" stroke-opacity="null" fill-opacity="null" opacity="0.5" x="752.997215" y="226.45228" width="74" height="41"  stroke="#000"'];

var str="";
offset=11;
for (var i=offset; i < stands.length+offset; i++) {
	str="<a id='lien"+i+"' href='"+listeEtp[1].lien+"'><title id='E"+i+"'>"+listeEtp[1].nom+"</title>"+stands[i-offset]+"+id=p"+i+"/></a>";
	AncienBatiment.insertAdjacentHTML('beforeend', str);
}
AncienBatiment.insertAdjacentHTML('beforeend', "</g>");


//Pour le sous sol 1
var stands = [  '<rect height="41" width="72" y="5.45313" x="136" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
							  '<rect  height="41" width="72" y="5.45313" x="239" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
							  '<rect height="41" width="72" y="6.45313" x="317" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
							  '<rect height="41" width="72" y="6.45313" x="399" stroke-width="0" stroke="#000" fill="none" opacity="0.5""',
							  '<rect stroke="#000" height="71" width="41" y="48.45313" x="476" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="71" width="41" y="129.45313" x="476" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="71" width="41" y="50.45313" x="10" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000"  height="71" width="41" y="128.45313" x="10" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="71" width="41" y="208.45313" x="9" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="212.45313" x="216" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="214.45313" x="294" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="213.45313" x="371" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000"  height="39" width="71" y="214.45313" x="449" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="213.45313" x="526" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="213.45313" x="602" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="213.45313" x="679" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000"  height="39" width="71" y="214.45313" x="756" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000"  height="39" width="71" y="402.45313" x="292" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000"  height="39" width="71" y="402.45313" x="369" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000"  height="39" width="71" y="401.45313" x="445" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="400.45313" x="523" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="401.45313" x="597" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="401.45313" x="676" stroke-width="0" fill="none" opacity="0.5"',
							  '<rect stroke="#000" height="39" width="71" y="402.45313" x="752" stroke-width="0" fill="none" opacity="0.5"',  
							  '<rect height="41" width="73" y="5.45313" x="57" stroke-width="0" fill="none" opacity="0.5" stroke="#000"'];

var str="";
offset=25;
for (var i=offset; i < stands.length+offset; i++) {
	str="<a id='lien"+i+"' href='"+listeEtp[1].lien+"'><title id='E"+i+"'>"+listeEtp[1].nom+"</title>"+stands[i-offset]+"+id=p"+i+"/></a>";
	SousSol.insertAdjacentHTML('beforeend', str);
}
SousSol.insertAdjacentHTML('beforeend', "</g>");



//Pour le sous sol 2
var stands = [ '<rect height="41" width="71" y="4.45313" x="6" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect stroke="#000" id="svg_4" height="41" width="125" y="6.45313" x="83" stroke-width="0" fill="none" opacity="0.5"',
						  '<rect  height="41" width="71" y="6.45313" x="214" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="5.45313" x="297" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect  height="41" width="71" y="5.45313" x="371" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect  height="41" width="71" y="5.45313" x="446" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect  height="41" width="71" y="4.45313" x="529" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="5.45313" x="602" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="5.45313" x="680" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="5.45313" x="753" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="185.45313" x="8" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="186.45313" x="165" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="186.45313" x="242" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="186.45313" x="312" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="186.45313" x="390" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="188.45313" x="567" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="188.45313" x="643" stroke-width="0" stroke="#000" fill="none" opacity="0.5"',
						  '<rect height="41" width="71" y="188.45313" x="718" stroke-width="0" stroke="#000" fill="none" opacity="0.5"'];

var str="";
offset=35;
for (var i=offset; i < stands.length+offset; i++)  {
	str="<a id='lien"+i+"' href='"+listeEtp[1].lien+"'><title id='E"+i+"'>"+listeEtp[1].nom+"</title>"+stands[i-offset]+"+id=p"+i+"/></a>";
	SousSolDeux.insertAdjacentHTML('beforeend', str);
}
SousSolDeux.insertAdjacentHTML('beforeend', "</g>");