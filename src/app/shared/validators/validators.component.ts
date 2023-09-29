import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-validators",
  templateUrl: "./validators.component.html",
  styleUrls: ["./validators.component.scss"]
})
export class ValidatorsComponent {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      "sku": ["", Validators.required],
      "surname": ["", Validators.compose([Validators.required, this.validateSurname])],
    });
  }

  onSubmit(value: string, event: Event): void {
    console.log("your submitted values: ", value);
  }

  validateSurname(control: FormControl): { [p: string]: boolean } | null {
    if (!control.value.match(/^123/)) {
      return {invalidSurname: true};
    }
    return null;


  }

}
