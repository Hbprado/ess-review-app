import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@prisma/client';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.css']
})
export class FollowersListComponent implements OnInit {
    @Input() currentUser: User = {} as User

    following$: Observable<User[]> = of([]);

  constructor(private userService: UserService) {}

  ngOnInit() {
    const userId = this.currentUser.id; // Suponhamos que você tenha o ID do usuário atual
  // Recupere a lista de seguidores usando o serviço e o ID do usuário
  this.following$ = this.userService.getFollowing(userId);
}
  }