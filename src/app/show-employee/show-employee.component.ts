import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
})
export class ShowEmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .showEmployees()
      .subscribe((response) => (this.employees = response.obj));
  }
}
