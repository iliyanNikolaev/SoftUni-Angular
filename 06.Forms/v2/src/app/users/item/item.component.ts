import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('user') user: User = {
    id: 1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '', 
      catchPhrase: '', 
      bs: ''
    }
  };
}
