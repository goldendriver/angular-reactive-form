import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuildComponent } from './form-build/form-build.component';
import { FormAnswerComponent } from './form-answer/form-answer.component';

const routes: Routes = [
  { path: 'form/build', component: FormBuildComponent },
  { path: 'form/answers', component: FormAnswerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
