import MapArea from './MapArea';
import ActionsArea from './ActionsArea';
import ControlArea from './ControlArea';
import Ui from './Ui';

Ui.documentReady(function(){

	let mapArea = new MapArea();
	let actionsArea = new ActionsArea();
	let controlArea = new ControlArea();

	// On crer les type de jeux (voir les interfaces es6)
	// 		=> l'objectif à atteindre (suivant le type de jeux)
	// 		=> les inscrtruction (suiviant le type de jeux)
	// 
	// 2 idée de type de jeux
	// -> 1 - aller d'un poind A à un poind B
	// -> 2 - Aller chercher le maximun de resource
	// 
	// On crer un Niveau (un peu la config de la map - du robot)
	// 		=> la taille d'une case (carrée)
	// 		=> le tableau d'élement à positionner sur la map
	// 		=> te tableau qui servira à créer la map avec (hauteur, id element etc...)
	// 		=> le type de jeux
	// 		=> un tableau d'action possible
	// 		
	// 		-> Un element
	// 			-> un nom
	// 			-> un type
	// 			
	// 		-> Une action
	// 			-> un nom
	// 			-> un type
	// 
	// On crer une map
	//  	=> un niveau
	//  	
	// On crer un robot
	// 		=> un Niveau
	//  
	// On crer une mission
	//  	=> une map
	//  	=> un robot
	//  	=> le type de jeux
	//  
	//  On lance la mission
	//  	=> la carte s'afficher
	//  	=> le robot tombe à sa position
	//  	=> on affiche les actions possible
	//  	=> la timeline d'action est vide aussi
	//  	=> On affiche le bouton go
	//  	
	//  L'utilisateur selectionne ses actions (drag & drop)
	//  L'utilisateur appuit sur go
	//  On remplis alors le robot des actions choisis
	//  La mission se lance
	//  
	//  	=> on boucle sur le tableau des actions
	//  		=> si l'action n'existe pas
	//  			-> on annule la mission et on la recomence à zero
	//  		=> si le robot ne vas pas dans la bonne direction apres avoir fini les action
	//  			-> on annule la mission et on la recomence à zero
	//  		=> si le robot arrive au but de la mission
	//  			-> on recrer un niveau et on relance la boucle
	//

})