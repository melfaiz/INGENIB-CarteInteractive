
var Etp1 ={
	nom: 'Spie',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['telecom','info'],
	activite: ['aero','militaire'],
	ipb: p1     //ici est stoké la balise d'id p1
};
var Etp2 ={
	nom: 'Ingelliance',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['info'],
	activite: ['aero','recherche'],
	ipb: p2
};

var Etp3 ={
	nom: 'Meretis',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['elec','info'],
	activite: ['sante'],
	ipb: p3
};

var Etp4 ={
	nom: 'Qucit',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['telecom','info','mmk'],
	activite: ['sante','robot'],
	ipb: p4
};

var Etp5 ={
	nom: 'Tehtis',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['mmk','elec'],
	activite: ['aero','robot'],
	ipb: p5
};

var Etp6 ={
	nom: 'CS Commu',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['mmk','elec'],
	activite: ['aero','robot'],
	ipb: p6
};

var Etp7 ={
	nom: 'NXP',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['mmk','elec'],
	activite: ['aero','robot'],
	ipb: p7
};

var Etp8 ={
	nom: 'Thalès',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['mmk','elec','telecom','info'],
	activite: ['aero','robot'],
	ipb: p8
};

var Etp9 ={
	nom: 'Ubisoft',
	lien: 'https://www.ingenib.fr/students/catalogue/diginext',
	filiereRecherchee: ['telecom','info'],
	activite: ['jeux','robot'],
	ipb: p9
};



var nb_etp=9;

listeEtp=[];
for (var i=1; i < nb_etp+1; i++)  {
	eval("listeEtp.push(Etp"+i+")");
}
