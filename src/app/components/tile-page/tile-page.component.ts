import { Component, OnInit } from '@angular/core';
import { ICity } from '../../models/citys';
import { citys as data } from '../../data/citys';

@Component({
  selector: 'app-tile-page',
  templateUrl: './tile-page.component.html',
  styleUrls: ['./tile-page.component.scss'],
})
export class TilePageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  citys: ICity[] = data;
}
