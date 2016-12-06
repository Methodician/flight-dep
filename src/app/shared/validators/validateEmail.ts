import { FormControl } from '@angular/forms';

export function validateEmail(ctrl: FormControl) {

    const email = ctrl.value;

    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    return valid ? null : {
        validEmail: {
            valid: false
        }
    };
}