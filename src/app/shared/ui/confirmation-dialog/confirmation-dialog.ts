import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirmation-dialog',
  styleUrl: './confirmation-dialog.css',
  templateUrl: './confirmation-dialog.html',
})
export class ConfirmationDialog {
  @Input() isOpen = false;
  @Input() title = 'Are you sure?';
  @Input() message = 'Do you want to continue with this action?';
  @Input() confirmText = 'Confirm';
  @Input() cancelText = 'Cancel';
  @Input() isDanger = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm(): void {
    this.confirmed.emit();
    this.closeDialog();
  }

  onCancel(): void {
    this.cancelled.emit();
    this.closeDialog();
  }

  private closeDialog(): void {
    this.isOpen = false;
  }
}
