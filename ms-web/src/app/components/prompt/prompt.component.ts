import { Component, OnInit } from '@angular/core';
import { PromptService } from './prompt.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  public hidden = true;

  public type: 'confirm' | 'alert';
  public message: string;

  constructor(
    private readonly promptService: PromptService
  ) { }

  public ngOnInit(): void {
    this.askSub();
  }

  public askSub() {
    this.promptService.ask().subscribe(ask => {
      const {message, type} = ask;
      this.type = type;
      this.message = message;
      this.hidden = false;
    });
  }

  public response(response: boolean): void {
    this.promptService.responsePub().next(response);
    this.hidden = true;
  }

}
