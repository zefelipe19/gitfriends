import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor() {}

  async getFriends(): Promise<any> {
    const response = await fetch('http://localhost:3000/friends');
    const data = await response.json();
    return data;
  }
}
