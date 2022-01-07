import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeadderComponent } from './components/paging-headder/paging-headder.component';
import { PagerComponent } from './components/pager/pager.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    PagingHeadderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()

  ],
  exports: [
    PaginationModule,
    PagingHeadderComponent,
    PagerComponent,
    CarouselModule
  ]
})
export class SharedModule { }
