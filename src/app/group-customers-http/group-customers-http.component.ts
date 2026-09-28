import { Component, signal } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http.service';

@Component({
  selector: 'app-group-customers-http',
  standalone: false,
  templateUrl: './group-customers-http.component.html',
  styleUrls: ['./group-customers-http.component.css'],
})
export class GroupCustomersHttpComponent {
  groups = signal<any[]>([]);

  constructor(private _service: CustomerHttpService) {}

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data) => {
        this.groups.set(data);
      },
      error: (err) => {
        alert('ERROR: ' + err.message);
      },
    });
  }
}
