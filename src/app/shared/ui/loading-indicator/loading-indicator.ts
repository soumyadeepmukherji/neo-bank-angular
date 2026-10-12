import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-loading-indicator',
  styleUrl: './loading-indicator.css',
  templateUrl: './loading-indicator.html',
})
export class LoadingIndicator {
  @Input() message = 'Loading...';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
