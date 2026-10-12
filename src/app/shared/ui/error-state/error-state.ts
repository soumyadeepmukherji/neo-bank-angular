import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-error-state',
  styleUrl: './error-state.css',
  templateUrl: './error-state.html',
})
export class ErrorState {
  @Input() title = 'Something went wrong';
  @Input() message = 'We could not complete your request. Please try again.';
  @Input() retryLabel = 'Try Again';
  @Input() retrying = false;

  @Output() retry = new EventEmitter<void>();

  onRetry(): void {
    if (!this.retrying) {
      this.retry.emit();
    }
  }
}
