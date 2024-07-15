import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeModule } from './prime/prime.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Post, PostsService } from './services/posts.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'deepak-project';
  inputSearch = new Subject<string>();
  loading = false;

  private postService = inject(PostsService);
  posts: Post[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.postService.posts().subscribe((resp) => {
      this.posts = resp;
      this.loading = false;
    });

    this.handelPostSearch('hi');
  }

  handelPostSearch(params: string) {
    this.loading = true;
    this.inputSearch.pipe(debounceTime(500)).subscribe((inputTitle) => {
      console.log(inputTitle);

      // if (!inputTitle) return;
      // search perform logic
      // this.posts = this.posts.filter((p) => p.title.includes(inputTitle));
      this.postService.posts().subscribe((resp) => {
        if (!inputTitle) {
          this.posts = resp;
          return;
        }
        this.posts = resp.filter((p) => p.title.includes(inputTitle));
        this.loading = false;
      });
    });
  }
  onSearchInputChange(searchTitle: string) {
    this.inputSearch.next(searchTitle);
  }
}
