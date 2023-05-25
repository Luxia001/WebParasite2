import { Component, OnInit } from '@angular/core';
import { PredictApiService } from '../services/api/predict-api.service';
import { PredictResultModel } from '../models/result_model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit{
  constructor(private predictAPI: PredictApiService) {}

  fd = new FormData();

  image = '';
  isSelect = false;
  showResult = false;

  predictResult: PredictResultModel = {
    result: []
  };

  ngOnInit(): void {
    // this.initGraph();
  }


  openUploadFile() {
    document.getElementById('image_upload')?.click();
  }

  reset() {
    this.isSelect = false;
    this.showResult = false;
    this.image = '';
  }

  selectImage(event: any) {
    this.fd = new FormData();
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }

    let reader = new FileReader();
    let file = event.target.files[0];

    this.fd.append('image', file);

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result != null) {
        this.isSelect = true;
        this.image = reader.result.toString();
      }
    };

    console.log(this.image)
  }

  graphModel1() {
    const data = {
      labels: ['พยาธิตัวกลม', 'พยาธิตัวตืด', 'พยาธิใบไม้'],
      datasets: [
        {
          label: 'Model 1',
          data: [this.predictResult.result[0].RoundWorms, this.predictResult.result[0].TapeWorms, this.predictResult.result[0].Fluke],
          backgroundColor: ["#129183", "#129183", "#129183"],
        }
      ]
    };

    let ctx: any = document.getElementById("chart1") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      },
      data: data,
    });
  }

  graphModel2() {
    const data = {
      labels: ['พยาธิตัวกลม', 'พยาธิตัวตืด', 'พยาธิใบไม้'],
      datasets: [
        {
          label: 'Model 2',
          data: [this.predictResult.result[1].RoundWorms, this.predictResult.result[1].TapeWorms, this.predictResult.result[1].Fluke],
          backgroundColor: ["#129183", "#129183", "#129183"],
        }
      ]
    };

    let ctx: any = document.getElementById("chart2") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      },
      data: data,
    });
  }

  graphModel3() {
    const data = {
      labels: ['พยาธิตัวกลม', 'พยาธิตัวตืด', 'พยาธิใบไม้'],
      datasets: [
        {
          label: 'Model 3',
          data: [this.predictResult.result[2].RoundWorms, this.predictResult.result[2].TapeWorms, this.predictResult.result[2].Fluke],
          backgroundColor: ["#129183", "#129183", "#129183"],
        }
      ]
    };

    let ctx: any = document.getElementById("chart3") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      },
      data: data,
    });
  }


  submit() {
    console.log(this.fd);
    this.predictAPI.predict(this.fd).subscribe((data) => {
      this.predictResult = data;
      this.showResult = true;
      this.graphModel1();
      this.graphModel2();
      this.graphModel3();
    });
  }



}
