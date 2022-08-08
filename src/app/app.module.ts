import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormAnswerComponent } from './form-answer/form-answer.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { FormBuildComponent } from './form-build/form-build.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormAnswerComponent,
    AddNewQuestionComponent,
    FormBuildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
