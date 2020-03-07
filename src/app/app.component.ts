import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'newChallengeForm';
  userModel = new User('', '', null, '', '', '');
  submitData(){
    // console.log('SUBMITTTT');
  }
}
