import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeModule } from './prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'deepak-project';
  inputSearch = '';
}
