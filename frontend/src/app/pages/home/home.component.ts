import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [RestService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private readonly Rest: RestService) {}
  friends: any;
  async ngOnInit(): Promise<void> {
    this.friends = await this.Rest.getFriends();
  }
}
