import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
})
export class DeleteEmployeeComponent implements OnInit {
  @ViewChild('delete', { static: true }) formElement: NgForm;
  eid: number;
  constructor(private appService: AppService) {}

  ngOnInit(): void {}
  onDelete() {
    this.appService
      .deleteEmployee(this.eid)
      .subscribe((data) => alert(data.message));
  }
}
