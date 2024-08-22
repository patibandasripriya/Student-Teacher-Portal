import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'students', component: StudentComponent },
  { path: 'teachers', component: TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
