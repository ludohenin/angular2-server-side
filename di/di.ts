import {Injectable, } from 'angular2/angular2';
import {UserService} from './user_service';
import {UserModel} from './user_model';
import {ClassProviders} from '../lib';


// export const DI_PROVIDERS = [
//   bind(UserService).toValue(new UserService())
//   UserService,
//   UserModel
// ];


@Injectable()
@ClassProviders([
  UserService,
  UserModel
])
export class Di {
  constructor(userSerice: UserService) {
    console.log(`Di:userService:name ${userSerice.user.name}`);
    userSerice.name = 'Bod';
  }
}
