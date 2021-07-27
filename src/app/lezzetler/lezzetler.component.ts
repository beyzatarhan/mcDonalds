import { Component, OnInit } from '@angular/core';
import { Lezzetler } from './lezzetler';

@Component({
  selector: 'app-lezzetler',
  templateUrl: './lezzetler.component.html',
  styleUrls: ['./lezzetler.component.css']
})
export class LezzetlerComponent implements OnInit {

  constructor() { }
  lezzetler : Lezzetler[] = [
    {name:"SANDVİÇLER", imgUrl:"assets/photos/sandviches.png"},
    {name:"ATIŞTIRMALIKLAR", imgUrl:"assets/photos/atistirmalik.png"},
    {name:"HAPPY MEAL", imgUrl:"assets/photos/happymeal.png"},
    {name:"SALATALAR", imgUrl:"assets/photos/salata.png"},
    {name:"TATLILAR & MILKSHAKE'LER", imgUrl:"assets/photos/tatlı.png"},
    {name:"McD CAFE", imgUrl:"assets/photos/mcdcafe.png"},
    {name:"KAHVALTILIKLAR", imgUrl:"assets/photos/kahvalti.png"},
    {name:"İÇECEKLER", imgUrl:"assets/photos/içecekler.png"},
    {name:"SOSLAR", imgUrl:"assets/photos/sos.png"}
  ];
  ngOnInit() {
  }

}
