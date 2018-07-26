import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  months = [];
  model: any = {
    shipment_id: String,
    start_date: Date,
    month: String,
    end_date: Date,
    num_of_Stops: Number,
    truck_number: String,
    driver_name: String,
    total_weight: Number,
    volume: Number,
    start_location: String,
    end_location: String
  }
  constructor() {
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }

  onSubmitHome(homeForm: NgForm) {
    console.log("Form Data" + homeForm.value);
  }
  getSelectedAddress(month: String) {
    console.log("Form month" + month);
  }
}
