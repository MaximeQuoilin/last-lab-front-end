import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/userDTO.interface';
import { ResponseDto } from '../model/responseDto.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserBusiness } from '../model/business/user.business';
import { UserConverter } from '../utils/user.converter';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  postUser(user: UserBusiness): Observable<boolean> {

    return this.http.post<ResponseDto<void>>(`${environment.baseUrl}user`, UserConverter.toDTO(user))
    .pipe(map((response: ResponseDto<void>) => response.status === 'SUCCESS' ? true : false));

  }

  deleteUser(userId: number): Observable<boolean> {
    return this.http.delete<ResponseDto<void>>(`${environment.baseUrl}user/${userId}`)
    .pipe(map((response: ResponseDto<void>) => response.status === 'SUCCESS' ? true : false));
  }

  getAllUsers(): Observable<UserBusiness[]> {
    return this.http.get<ResponseDto<UserDTO[]>>(`${environment.baseUrl}user/all`)
      .pipe(map((response: ResponseDto<UserDTO[]>) => UserConverter.fromDTOArray(response.payload)));
  }
}
