import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameInterface } from '../model/game.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../model/responseDto.interface';
import { UserInterface } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

constructor(private http: HttpClient) {

}
getAllGames(): Observable<GameInterface[]> {
  return this.http.get<ResponseDto<GameInterface[]>>(`${environment.baseUrl}videogame/all`)
    .pipe(map(response => response.payload));
  }
  getAllUser(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('api/user');
  }
}

