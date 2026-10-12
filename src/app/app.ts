import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingIndicator } from './shared/ui/loading-indicator/loading-indicator';
import { EmptyState } from './shared/ui/empty-state/empty-state';
import { ErrorState } from './shared/ui/error-state/error-state';
import { StatusBadge } from './shared/ui/status-badge/status-badge';
import { ConfirmationDialog } from './shared/ui/confirmation-dialog/confirmation-dialog';

@Component({
  imports: [RouterOutlet, LoadingIndicator, EmptyState, ErrorState, StatusBadge, ConfirmationDialog],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('neo-bank-angular');
}
