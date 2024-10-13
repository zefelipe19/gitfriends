import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  // templateUrl: './app.component.html',
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
    <app-footer />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
