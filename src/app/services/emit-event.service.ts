import { Injectable, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
@Injectable({
  providedIn: "root",
})
export class EmitEventService {
  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  callFunction() {
    this.invokeFirstComponentFunction.emit();
  }
}
