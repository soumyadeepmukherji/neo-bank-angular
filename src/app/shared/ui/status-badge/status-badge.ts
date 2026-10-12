import { Component, Input } from '@angular/core';
export type NeoBankStatus = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
@Component({
  imports: [],
  selector: 'app-status-badge',
  styleUrl: './status-badge.css',
  templateUrl: './status-badge.html',
})
export class StatusBadge {
  @Input() label = 'Unknown';
  @Input() status: NeoBankStatus = 'neutral';
  @Input() showDot = true;
}
