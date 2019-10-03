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
import { UserBusiness } from '../model/business/user.business';

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

  getBorrowerByGame(gameId: number): Observable<UserBusiness> {
    return this.http.get<ResponseDto<UserDTO>>(`${environment.baseUrl}user/${gameId}/borrower`)
      .pipe(map((response: ResponseDto<UserDTO>) => {
        let userBiz = null;
        const userDTO = response.payload;
        if (userDTO) {
          userBiz = UserConverter.fromDTO(userDTO);
        }
        return userBiz;
      }));
  }

}

