import {FormControl} from '@angular/forms';

export class FilterManager<T> {

  private originItems: T[];
  private formControls: FormControl[];
  private predicates: ((item: T) => boolean)[];

  constructor (controls: FormControl[], predicates: ((item: T) => boolean)[], originItems: T[]) {
    this.formControls = controls;
    this.predicates = predicates;
    this.originItems = originItems;
  }

  public changeFilterSub(next: (items: T[]) => void): void {
    this.formControls.forEach(control => control.valueChanges
      .subscribe(value => next(this.originItems.filter(this.combinePredicates()))));
  }

  private combinePredicates(): (item: T) => boolean {
    return item => this.predicates.every(predicate => predicate(item));
  }
}
