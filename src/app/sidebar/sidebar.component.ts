import { Component, OnInit } from '@angular/core';
import { ParasiteApiService } from '../services/api/parasite-api.service';
import { ParasiteModel } from '../models/parasite';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  isCollapsed = true;
  dropdown1 = false;
  dropdown2 = false;
  paraModel: ParasiteModel[] = []

  constructor(private paraAPI: ParasiteApiService) {}

  ngOnInit(): void {
    this.paraAPI.getParasiteAll().subscribe((data) => {
      console.log(data)
      this.paraModel = data;
    })
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown1() {
    this.dropdown1 = !this.dropdown1;
  }


  toggleDropdown2() {
    this.dropdown2 = !this.dropdown2;
  }
}
