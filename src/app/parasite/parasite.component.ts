import { Component, OnInit } from '@angular/core';
import { ParasiteApiService } from '../services/api/parasite-api.service';
import { ParasiteModel } from '../models/parasite';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parasite',
  templateUrl: './parasite.component.html',
  styleUrls: ['./parasite.component.css']
})
export class ParasiteComponent implements OnInit {
  constructor(private paraAPI: ParasiteApiService, private route: ActivatedRoute, ) {}

  paraModel: ParasiteModel = {
    _id: '',
    cure: '',
    description: '',
    infection: '',
    name: '',
    name_eng: '',
    nature: '',
    protection: '',
    symptom: '',
    type: ''
  }

  ngOnInit(): void {
    this.paraAPI.getParasite(this.route.snapshot.paramMap.get('id') || '').subscribe((data) => {
      this.paraModel = data;
    })
  }
}
