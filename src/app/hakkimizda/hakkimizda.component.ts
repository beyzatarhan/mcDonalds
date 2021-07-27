import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hakkimizda',
  templateUrl: './hakkimizda.component.html',
  styleUrls: ['./hakkimizda.component.css']
})
export class HakkimizdaComponent implements OnInit {
  hakkimizda = [
    {
      "title":"TARİHÇE",
      "description":"1954’te başladığımız serüven devam ediyor. Zaman yolculuğuna ne dersiniz?",
      "img":"assets/photos/tarihce.jpg"
    },
    {
      "title":"McDONALD'S ÇOCUK VAKFI",
      "description":"1974’ten bu yana dünyanın dört bir yanında tedavi gören çocukların yanındayız.",
      "img":"assets/photos/cocuk-vakfi.jpg"
    }
  ]

  hakkimizda2 = [
    {
      "title":"İNSAN KAYNAKLARI",
      "description":"McDonald’s Ailesi’nin bir parçası olmaya ne dersiniz?",
      "img":"assets/photos/insan-kaynaklari.jpg"
    },
    {
      "title":"FRANCHISING",
      "description":"McDonald’s markası altında kendi işinizin sahibi olun!",
      "img":"assets/photos/franchising.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
