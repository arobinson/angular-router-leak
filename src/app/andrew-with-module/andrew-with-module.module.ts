import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AndrewWithModuleComponent } from './andrew-with-module.component';

@NgModule({
  declarations: [AndrewWithModuleComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AndrewWithModuleComponent }])],
  exports: [AndrewWithModuleComponent]
})
export class AndrewWithModuleModule {}
