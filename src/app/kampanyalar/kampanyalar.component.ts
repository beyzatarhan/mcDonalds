import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';

@Component({
  selector: 'app-kampanyalar',
  templateUrl: './kampanyalar.component.html',
  styleUrls: ['./kampanyalar.component.css']
})
export class KampanyalarComponent implements OnInit {

  constructor() { }
  restaurants : Restaurant[] = [
    {name:"Milli Burger Menü",imgUrl:"assets/photos/r-1.jpg"},
    {name:"McDonald’s’ta fırsat ye ye bitmez",imgUrl:"assets/photos/r-2.jpg"},
    {name:"McDonald’s’ta İyi Kahve İyi Fiyata",imgUrl:"assets/photos/r-3.jpg"},
    {name:"McDonald’s’tan 2 Kişilik Fırsat Menüsü",imgUrl:"assets/photos/r-4.jpg"},
    {name:"Gel Al",imgUrl:"assets/photos/r-5.jpg"},
    {name:" KIRMIZI - BEYAZ AŞKINA MİLYONLARCA BEDAVA!",imgUrl:"assets/photos/r-6.jpg"},
    {name:"Külahıma anlat !",imgUrl:"assets/photos/r-7.jpg"},
    {name:"Kitap mı? Oyuncak mı?",imgUrl:"assets/photos/r-8.jpg"},
    {name:"Chai Tea Latte şimdi McD Cafe’de!",imgUrl:"assets/photos/r-9.jpg"}
  ]
  ngOnInit() {
  }

}
