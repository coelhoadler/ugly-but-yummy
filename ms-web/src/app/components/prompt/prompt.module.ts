import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PromptComponent } from './prompt.component';
import { PromptService } from './prompt.service';

@NgModule({
  declarations: [PromptComponent],
  exports: [PromptComponent],
  imports: [CommonModule],
  providers: [PromptService]
})
export class PromptModule { }
