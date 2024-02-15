import { Component } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class ViewGlossary {
  glossary = [
    { term: 'Angular', definition: 'Framework JavaScript développé par Google.' },
    { term: 'React', definition: 'Bibliothèque JavaScript pour la construction d\'interfaces utilisateur.' },
    { term: 'Vue.js', definition: 'Framework JavaScript progressif pour la construction d\'interfaces utilisateur.' },
    { term: 'Mot', definition: 'Tous les objets que l’on a pu construire nécessite également de l’énergie pour fonctionner. Soit au travers de l’action humaine (une hache par exemple ne sert à rien si l’Homme ne lui fournit pas d’énergie pour la soulever et l’abattre sur le bois), soit au travers d’une autre source d’énergie (une voiture ne peut pas avancer sans l’énergie fournit par l’essence). Ainsi, notre société fonctionne uniquement grâce à des échanges d’énergies. Les énergies sont à la base de toutes actions et sont donc primordiales pour notre survie.' },
    { term: 'React', definition: 'Bibliothèque JavaScript pour la construction d\'interfaces utilisateur.' },
    { term: 'Vue.js', definition: 'Framework JavaScript progressif pour la construction d\'interfaces utilisateur.' },
    
    // Ajoutez d'autres termes et leurs définitions
  ];

  filteredGlossary = this.glossary; // Liste filtrée de termes initialement identique au glossaire

  applyFilter(filterValue: string): void {
    if (!filterValue) {
      this.filteredGlossary = this.glossary; // Si la barre de recherche est vide, affichez tous les termes
      return;
    }

    this.filteredGlossary = this.glossary.filter(item =>
      item.term.toLowerCase().includes(filterValue.toLowerCase())
    ); // Filtrer les termes en fonction du texte de recherche
  }
}
