import { Directive, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
    selector: '[mask-input-document]'
})
export class MaskInputDocumentDirective implements OnInit {

    constructor(public formControlName: FormControlName) { }

    ngOnInit() {
        this.formControlName.control.valueChanges
            .pipe(distinctUntilChanged())
            .subscribe(value => {
                if (value.length > 0) {
                    this.formControlName.control.setValue(value.replace(/[^0-9,*]/g, ''), { emitEvent: false });
                }
            });
    }
}
