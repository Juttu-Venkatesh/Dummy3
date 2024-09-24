import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'twoWayBinding';
  
  name!: string;
  email!: string;
  phone!: number;
  
  submitted: boolean = false;

  updateDetails() {
    // Check if all fields are filled before displaying details
    if (this.name && this.email && this.phone) {
      this.submitted = true;
    } else {
      alert('Please fill all the fields');
    }
  }
}
