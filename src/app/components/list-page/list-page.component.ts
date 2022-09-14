import { Component, OnInit } from '@angular/core';
import { ICity } from '../../models/citys';
import { citys as data } from '../../data/citys';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  ngOnInit() {
    console.log('hire me pls');
  }
  citys: ICity[] = data;
}
