import { Component ,ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private view : ViewContainerRef){}
  title = 'routing';
  async loadUserList(){
    this.view.clear();
    const {UserlistComponent}=await import('./userlist/userlist.component');
    this.view.createComponent(
      UserlistComponent
    );
  }
  async loadAdminList(){
    this.view.clear();
    const {AdminlistComponent}=await import('./adminlist/adminlist.component');
    this.view.createComponent(
      AdminlistComponent
    );
  }
}
