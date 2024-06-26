import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isSlideOut=true;
  constructor(private route :Router){}
  toggleSlideOut():void{
    this.isSlideOut=!this.isSlideOut;
  }

  onDash(){
    this.route.navigate(['/budget-planner/dashboard']);
  }
  onProfile(){
    this.route.navigate(['/budget-planner/profile']);
  }
  onHistory(){
    this.route.navigate(['/budget-planner/history']);
  }
  onLogout(){
    this.route.navigate(['/budget-planner/login']);
  }


}
