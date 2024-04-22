import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  flag = false
  resultValidations = true
  validacionFallida(){
    let result;
    result= 1/0;
    return result;
  }
  validacionExitosa(){
    if (this.flag===false){
      return false;
    }
      return true;  
  }

}
