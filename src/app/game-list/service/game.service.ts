import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInterface } from '../model/game.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

constructor(private http: HttpClient) {

}
getAllGames(): Observable<GameInterface[]> {

  return this.http.get<GameInterface[]>(`${environment.baseUrl}videogame/all`);

  }
}
