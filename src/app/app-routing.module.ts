import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTesterComponent } from './api-tester/api-tester.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'api-tester',
    pathMatch:"full"
  },
  {
    path:'api-tester',
    component:ApiTesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
