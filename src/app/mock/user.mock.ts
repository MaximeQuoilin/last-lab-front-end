
import { HttpResponse, HttpRequest } from '@angular/common/http';
import { UserInterface } from '../gamify/model/user.interface';
import { ResponseDto } from '../gamify/model/responseDto.interface';


const userList: UserInterface[] = [
  {
    username: 'Ticus',
    email: 'ticuspoulo@ticus.com'

  },
  {
    username: 'Maximus',
    email: 'maximus@coliseum.com'
  }
];

const responseWithUserList: ResponseDto<UserInterface[]> = {
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
