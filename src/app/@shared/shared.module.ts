import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArabicDatePipe } from './Pipes/arabic-date.pipe';
import { ArabicNumberPipe } from './Pipes/arabic-number.pipe';
import { SplitNameByCommaPipe } from './Pipes/split-name-by-comma.pipe';
import { HeaderComponent } from './components/header/header.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FilterComponent } from './components/filter/filter.component';
import { CardDragAndDropComponent } from './components/card-drag-and-drop/card-drag-and-drop.component';


@NgModule({
  declarations: [
    ArabicDatePipe,
    ArabicNumberPipe,
    SplitNameByCommaPipe,
    HeaderComponent,
    FilterComponent,
    CardDragAndDropComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MdbCheckboxModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }),
    FormsModule,
    MdbCollapseModule,

  ],
  providers: [],
  exports: [
    ArabicDatePipe, 
    ArabicNumberPipe,
    SplitNameByCommaPipe,
    HeaderComponent,
    CardDragAndDropComponent,
    FilterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
