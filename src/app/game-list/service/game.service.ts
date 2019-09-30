import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInterface } from '../model/game.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../model/responseDto.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<ResponseDto<GameInterface[]>> {
    return this.http.get<ResponseDto<GameInterface[]>>(`${environment.baseUrl}videogame/all`);
  }

}
