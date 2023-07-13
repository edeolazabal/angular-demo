import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
