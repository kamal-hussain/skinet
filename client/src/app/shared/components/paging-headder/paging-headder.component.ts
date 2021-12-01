import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-headder',
  templateUrl: './paging-headder.component.html',
  styleUrls: ['./paging-headder.component.scss']
})
export class PagingHeadderComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;  
  
    constructor() { }

  ngOnInit(): void {
  }

}
