import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-reusable-button',
  standalone: true,
  imports: [],
  templateUrl: './reusable-button.html',
  styleUrl: './reusable-button.css',
})
export class ReusableButton {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled = false;
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}