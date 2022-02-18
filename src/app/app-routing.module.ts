import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'teacher',loadChildren:()=>import('./teacher/teacher.module').then(mod=>mod.TeacherModule)},
  {path : 'student',loadChildren:()=>import('./student/student.module').then(mod=>mod.StudentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
