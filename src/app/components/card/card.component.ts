import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: string[] = []
  menuType: string = ""

  constructor() {
    this.products = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.products.push("luan")
  }

  remover(index: number) {
    alert(index)
    this.products.splice(index,1)
  }
}
