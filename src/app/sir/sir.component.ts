import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sir',
  templateUrl: './sir.component.html',
  styleUrls: ['./sir.component.css']
})
export class SirComponent implements OnInit {
  container = [
    {
      "title":"BESLENME",
      "img":"assets/photos/beslenme.jpg"
    },
    {
      "title":"KALİTE",
      "img":"assets/photos/kalite.jpg"
    },
    {
      "title":"MERAK ETTİĞİNİZ HER ŞEY",
      "img":"assets/photos/şey.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
