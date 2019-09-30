import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameInterface } from '../model/game.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../model/responseDto.interface';
import { GameBusiness } from '../model/business/game.business';
import { GameConverter } from '../utils/game.converter';

@Injectable({
  providedIn: 'root'
})
export class GameService {

constructor(private http: HttpClient) {

}
getAllGames(): Observable<GameBusiness[]> {
  return this.http.get<ResponseDto<GameInterface[]>>(`${environment.baseUrl}videogame/all`)
    .pipe(map((response: ResponseDto<GameInterface[]>) => GameConverter.fromDTOArray(response.payload)));
  }

  // TODO Pas oublier de changer l'interface en business
}

