import { UserBusiness } from '../model/business/user.business';
import { UserInterface } from '../model/user.interface';

export class UserConverter {

  public static fromDTO(user: UserInterface): UserBusiness {
    return new UserBusiness(

      user.name,
      user.email

    );
  }

  public static fromDTOArray(usersList: UserInterface[]): UserBusiness[] {

      return usersList.map((user: UserInterface) => UserConverter.fromDTO(user));
  }
}
