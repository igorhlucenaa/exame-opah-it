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
import { NgxMaskModule, IConfig } from "ngx-mask";
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
registerLocaleData(ptBr);
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [AppComponent, FormComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    Ng2Webstorage,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
