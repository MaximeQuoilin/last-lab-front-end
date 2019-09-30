
import { HttpResponse, HttpRequest } from '@angular/common/http';
import { UserInterface } from '../gamify/model/user.interface';


const userList: UserInterface[] = [
  {
    name: 'Ticus',
    email: 'ticuspoulo@ticus.com'

  },
  {
    name: 'Maximus',
    email: 'maximus@coliseum.com'
  }
];

const getUserList = (request: HttpRequest<any>): HttpResponse<any> => {
 return new HttpResponse(
       {
         status: 200,
         body: userList
      }
    );
};

export const listeners = [
  { url: 'api/user', methods: 'GET', name: 'getUserList', response: getUserList }
];
