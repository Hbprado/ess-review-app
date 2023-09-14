import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '@prisma/client';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  addFollower(userId: number, followerId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/${userId}/followers/${followerId}`, {});
  }

  removeFollower(userId: number, followerId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${userId}/followers/${followerId}`);
  }

  getFollowers(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}/followers`);
  }

  getFollowing(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}/following`);
  }

  isFollowing(userId: number, followerId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/users/${userId}/is-following/${followerId}`);
  }

  getFollowersCount(userId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/users/${userId}/followers/count`);
  }

  getFollowingCount(userId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/users/${userId}/following/count`);
  }

}
