import { EventEmitter, Injectable } from '@angular/core';
import { PromptAsk } from './response.type';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private _response: EventEmitter<boolean>;
  private readonly _ask: EventEmitter<PromptAsk> = new EventEmitter();

  public ask(): EventEmitter<PromptAsk> {
    return this._ask;
  }

  public responsePub(): EventEmitter<boolean> {
    return this._response;
  }

  public confirm(message: string): EventEmitter<boolean> {
    this._ask.emit({message, type: 'confirm'});
    this._response = new EventEmitter();
    return this._response;
  }

  public alert(message: string): EventEmitter<boolean> {
    this._ask.emit({message, type: 'alert'});
    this._response = new EventEmitter();
    return this._response;
  }
}
