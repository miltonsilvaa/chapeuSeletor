import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-grifinoria',
  templateUrl: './page-grifinoria.page.html',
  styleUrls: ['./page-grifinoria.page.scss'],
})
export class PageGrifinoriaPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Inicializando página Grifinória...');
  }
}
