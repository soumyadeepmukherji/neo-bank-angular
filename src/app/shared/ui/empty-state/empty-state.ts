import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-empty-state',
  styleUrl: './empty-state.css',
  templateUrl: './empty-state.html',
})
export class EmptyState {
  @Input() title = 'No data found';
  @Input() message = 'There is no data to display right now.';
  @Input() icon = '📭';
  @Input() actionLabel = '';

  @Output() action = new EventEmitter<void>();

  onAction(): void {
    this.action.emit();
  }
}
