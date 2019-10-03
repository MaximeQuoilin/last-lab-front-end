import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameInterface } from '../model/game.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../model/responseDto.interface';
import { GameBusiness } from '../model/business/game.business';
import { GameConverter } from '../utils/game.converter';
import { UserDTO } from '../model/userDTO.interface';
import { UserConverter } from '../utils/user.converter';

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

  getBorrowerByGameId(gameId: number): Observable<any> {
    return this.http.get<ResponseDto<UserDTO>>(`${environment.baseUrl}user/${gameId}/owners`)
      .pipe(map((response: ResponseDto<UserDTO>) => UserConverter.fromDTO(response.payload)));
  }

}

