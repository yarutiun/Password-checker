import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {PasswordStrengthComponent} from "./password-strength.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PasswordStrengthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PasswordStrengthComponent]
})
export class AppModule { }
