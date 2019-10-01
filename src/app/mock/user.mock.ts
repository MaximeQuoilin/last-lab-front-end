
import { HttpResponse, HttpRequest } from '@angular/common/http';
import { UserDTO } from '../gamify/model/userDTO.interface';
import { ResponseDto } from '../gamify/model/responseDto.interface';


const userList: UserDTO[] = [
  {
    username: 'Ticus',
    email: 'ticuspoulo@ticus.com'

  },
  {
    username: 'Maximus',
    email: 'maximus@coliseum.com'
  }
];

const responseWithUserList: ResponseDto<UserDTO[]> = {
  status: 'SUCCEED',
  message: 'the mock works, titi is awesome',
  payload: userList
};

const getUserListResponseMock = (request: HttpRequest<any>): HttpResponse<any> => {
 return new HttpResponse(
       {
         status: 200,
         body: responseWithUserList
      }
    );
};

export const listeners = [
  { url: 'user/all', methods: 'GET', name: 'getUserList', response: getUserListResponseMock }
];
