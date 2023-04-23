import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  fd = new FormData();
  image = "";
  isSelect = false;

  openUploadFile() {
    document.getElementById("image_upload")?.click();
  }

  selectImage(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }

    let reader = new FileReader();
    let file = event.target.files[0];

    this.fd.append('files', file)

    

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != null) {
        this.isSelect = true;
        this.image = reader.result.toString();
        this.fd = new FormData;
      }
    };

  }

}
