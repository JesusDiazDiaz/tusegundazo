import {Component, OnInit} from '@angular/core';
import {Car, CarSummary} from "../cars";
import { CarsService } from "../cars.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = []
  summary: CarSummary[] = []

  constructor(private carService: CarsService) {}

  getCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.getTotal()
    });
  }

  getTotal() {
    let summary = new Map()

    for (const car of this.cars) {
      if (summary.has(car.marca)) {
        summary.set(car.marca, summary.get(car.marca) + 1)
      } else {
        summary.set(car.marca, 1)
      }
    }

    for (let [key, value] of summary) {
      this.summary.push({
        brand: key,
        total: value
      })
    }
  }

  ngOnInit(): void {
    this.getCars()
  }
}
