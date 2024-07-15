import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor() {}

  posts() {
    return this.http.get<Post[]>(this.postUrl);
  }
}
