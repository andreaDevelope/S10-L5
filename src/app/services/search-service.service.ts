import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  private searchTerm = new BehaviorSubject<string>(''); // Usare BehaviorSubject per mantenere il valore

  updateSearchTerm(term: string) {
    this.searchTerm.next(term); // Aggiorna il valore della ricerca
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable(); // Ritorna un observable
  }
}
