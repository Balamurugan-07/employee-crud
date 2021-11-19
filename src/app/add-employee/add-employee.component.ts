import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  insertForm: FormGroup;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.insertForm = new FormGroup({
      eid: new FormControl(null, Validators.required),
      ename: new FormControl('', Validators.required),
      salary: new FormControl(null, Validators.required),
    });
  }

  onInsert() {
    const data = {
      eid: this.insertForm.get('eid').value,
      ename: this.insertForm.get('ename').value,
      salary: this.insertForm.get('salary').value,
    };
    this.appService.insertEmployee(data).subscribe((response) => {
      alert(response.message);
    });
  }
}
