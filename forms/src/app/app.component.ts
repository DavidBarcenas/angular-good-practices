import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

interface Technology {
  name: string;
  url: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  public title = inject(Title);
}
