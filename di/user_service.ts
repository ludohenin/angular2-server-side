import {Injectable} from 'angular2/angular2';
import {UserModel} from './user_model';

@Injectable()
export class UserService {
  constructor(private _user: UserModel) {}
  get user(): UserModel { return this._user; }
  set name(val: string) {
    this._user.name = val;
    console.log(`UserService:update:user:name ${val}`);
  }
}
