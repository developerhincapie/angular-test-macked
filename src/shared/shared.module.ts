import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskInputDocumentDirective } from './directives/mask-input-document/mask-input.document';

@NgModule({
  declarations: [
    MaskInputDocumentDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MaskInputDocumentDirective]
})
export class SharedModule { }
