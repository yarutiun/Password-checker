import {Component} from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  isMediumStrength: boolean = false;
  isStrongStrength: boolean = false;

  checkPasswordStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.isMediumStrength = false;
      this.isStrongStrength = false;
    }
    else if (length < 8) {
      this.isMediumStrength = false;
      this.isStrongStrength = false;
    }
    else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.isMediumStrength = false;
        this.isStrongStrength = true;
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.isMediumStrength = true;
        this.isStrongStrength = false;
      } else {
        this.isMediumStrength = false;
        this.isStrongStrength = false;
      }
    }
  }
}
