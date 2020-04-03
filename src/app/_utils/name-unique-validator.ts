import { Injectable, Directive, forwardRef } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FindByNameGQL } from 'src/app/generated/graphql';

@Injectable({ providedIn: 'root' })
export class NameUniqueValidator implements AsyncValidator {

  constructor(private service: FindByNameGQL) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return this.service.fetch({
      name: ctrl.value
    }, {
      fetchPolicy: 'network-only'
    }).pipe(
      map(rs => ((rs.data.fundraisers?.length > 0) ? { unique: true} : null)),
      catchError(() => of(null))
    );
  }
}

@Directive({
  selector: '[appNameUniqueValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => NameUniqueValidator),
      multi: true
    }
  ]
})
export class NameUniqueValidatorDirective {
  constructor(private validator: NameUniqueValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
