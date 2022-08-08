import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.scss']
})
export class AddNewQuestionComponent {

  data: any;
  
  constructor(public dialogRef: MatDialogRef<AddNewQuestionComponent>) {
    this.data = {
      name: 'asdf',
      address: 'aaa'
    }
  }

}
