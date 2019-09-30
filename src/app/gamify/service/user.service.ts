import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../model/user.interface';
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

  getAllUsers(): Observable<UserBusiness[]> {
    return this.http.get<ResponseDto<UserInterface[]>>(`${environment.baseUrl}user/all`)
      .pipe(map((response: ResponseDto<UserInterface[]>) => UserConverter.fromDTOArray(response.payload)));
  }
}
