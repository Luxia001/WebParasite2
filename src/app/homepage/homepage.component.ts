import { Component } from '@angular/core';
import { PredictApiService } from '../services/api/predict-api.service';
import { PredictResultModel } from '../models/result_model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private predictAPI: PredictApiService) {}

  fd = new FormData();
  image = "";
  isSelect = false;
  showResult = false;
  predictResult: PredictResultModel = {
    Fluke: 0,
    RoundWorms: 0,
    TapeWorms: 0,
    class: ""
  }

  openUploadFile() {
    document.getElementById("image_upload")?.click();
  }

  reset() {
    this.isSelect = false;
    this.showResult = false;
    this.image = "";
  }

  selectImage(event: any) {
    this.fd = new FormData();
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }

    let reader = new FileReader();
    let file = event.target.files[0];

    this.fd.append('image', file)

    

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != null) {
        this.isSelect = true;
        this.image = reader.result.toString();
      }
    };

  }

  submit() {
    console.log(this.fd)
    this.predictAPI.predict(this.fd).subscribe(data => {
      this.predictResult = data;
      this.showResult = true;
    })
  }

}
