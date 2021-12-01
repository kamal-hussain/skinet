import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeadderComponent } from './components/paging-headder/paging-headder.component';
import { PagerComponent } from './components/pager/pager.component';



@NgModule({
  declarations: [
    PagingHeadderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeadderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
