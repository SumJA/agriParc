import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Users } from 'app/models/users';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    public user: Users;
    public errorMessage: string = null;

    constructor(private _userService: UsersService) {
        this._userService.updateUserInfo();
    }

    ngOnInit() {
        
    }

    public get userService(): UsersService {
        return this._userService;
    }
}
