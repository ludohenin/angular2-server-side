import {Injectable} from 'angular2/angular2';
import {UserService} from './user_service';
import {UserModel} from './user_model';

@Injectable()
export class Di {
  constructor(userSerice: UserService) {
    console.log(`Di:userService:name ${userSerice.user.name}`);
    userSerice.name = 'Bod';
  }
}


export const PROVIDERS = [
  // bind(UserService).toValue(new UserService())
  UserService,
  UserModel,
  Di
];
