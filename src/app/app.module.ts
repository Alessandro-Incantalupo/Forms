import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {FormComponent} from "./shared/form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormsComponent } from './shared/reactive-forms/reactive-forms.component';
import { ValidatorsComponent } from './shared/validators/validators.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormComponent,
    ReactiveFormsComponent,
    ValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
