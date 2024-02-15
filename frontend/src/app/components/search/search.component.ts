import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() inputChanged = new EventEmitter<string>(); // Événement émis lorsque le texte de recherche change

  onSearchInput(event: any): void {
    const searchText = event.target.value.trim(); // Récupère le texte de recherche en supprimant les espaces inutiles
    this.inputChanged.emit(searchText); // Émet l'événement avec le texte de recherche
  }
}
