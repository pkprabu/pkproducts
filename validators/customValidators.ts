import {AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static firstCharShouldNotBeSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).charAt(0) === ' ') {
            return {
                firstCharShouldNotBeSpace: true
            };
        }
        return null;
    }
}
