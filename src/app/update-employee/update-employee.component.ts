import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      eid: new FormControl(null, Validators.required),
      ename: new FormControl('', Validators.required),
      salary: new FormControl(null, Validators.required),
    });
  }

  onUpdate() {
    const data = {
      eid: this.updateForm.get('eid').value,
      ename: this.updateForm.get('ename').value,
      salary: this.updateForm.get('salary').value,
    };
    this.appService.updateEmployee(data).subscribe((response) => {
      alert(response.message);
    });
  }
}
