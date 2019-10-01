import { UserBusiness } from '../model/business/user.business';
import { UserDTO } from '../model/userDTO.interface';

export class UserConverter {

  static toDTO(user: UserBusiness): UserDTO {

    return new UserDTO(

      user.name,
      user.email

    );
  }

  public static fromDTO(user: UserDTO): UserBusiness {
    return new UserBusiness(

      user.username,
      user.email

    );
  }

  public static fromDTOArray(usersList: UserDTO[]): UserBusiness[] {

      return usersList.map((user: UserDTO) => UserConverter.fromDTO(user));
  }
}
