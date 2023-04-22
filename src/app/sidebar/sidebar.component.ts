import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = true;
  dropdown1 = false;
  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown1() {
    this.dropdown1 = !this.dropdown1;
  }
}
