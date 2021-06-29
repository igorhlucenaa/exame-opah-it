import { TableComponent } from "./components/table/table.component";
import { FormComponent } from "./components/form/form.component";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { Ng2Webstorage } from "ngx-webstorage";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import ptBr from "@angular/common/locales/pt";
import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG,
} from "ng2-currency-mask";
registerLocaleData(ptBr);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
};

@NgModule({
  declarations: [AppComponent, FormComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
