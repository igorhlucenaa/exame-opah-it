import { EmitEventService } from "./../../services/emit-event.service";
import { StorageService } from "./../../services/storage.service";
import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements AfterViewInit {
  transacaoForm = this.fb.group({
    tipo: ["", Validators.required],
    nomeMercadoria: ["", Validators.required],
    valor: ["", Validators.required],
  });
  constructor(
    private storage: StorageService,
    private fb: FormBuilder,
    private emitEvent: EmitEventService
  ) {}

  ngAfterViewInit() {}

  setData() {
    this.storage.setData(this.transacaoForm.value).subscribe((res) => {
      this.storage.getData().subscribe((res) => console.log(res));
      this.emitEvent.callFunction();
    });
  }
}
