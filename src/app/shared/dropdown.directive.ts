import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit, OnChanges {
  @Input('appDropdown') isHiddenSelected!: boolean;
  @HostBinding('class.hidden') isHidden!: boolean;

  ngOnInit(): void {
    this.isHidden = this.isHiddenSelected;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isHidden = this.isHiddenSelected;
  }
}
