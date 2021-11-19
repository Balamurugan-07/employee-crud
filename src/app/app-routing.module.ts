import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'create', component: AddEmployeeComponent },
  { path: 'read', component: ShowEmployeeComponent },
  { path: 'update', component: UpdateEmployeeComponent },
  { path: 'delete', component: DeleteEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
