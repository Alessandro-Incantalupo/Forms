import {Component} from "@angular/core";
import {FormBuilder, FormGroup,} from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.scss"]
})
export class ReactiveFormsComponent {
  myForm: FormGroup;

  // At a high level, Dependency Injection is a way to tell Angular what
  // dependencies this component needs to function properly.

  // During injection an instance of FormBuilder will be created
  // we assign it to the fb variable (in the constructor). We then use the FormBuilder to create a FormGroup instance and assign it to the myform variable.
  // The FormGroup instance is created with a single control named sku. The value of the control is set to ABC123.
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      "sku": [""],
      "surname": [""],
      "test": [""],
    });
  }

  onSubmit(value: string): void {
    console.log("you submitted value: ", value);
  }

}
