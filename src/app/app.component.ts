import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { EditStateService } from '../app/services/edit-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PayrollBook';
  environment = environment;
  constructor(
    private editStateService: EditStateService
  ) {
  }
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  getHost2(){
    return this.editStateService.getHost();
  }
  goToAbout() {
     // Logic to navigate to the About page
  }
}
