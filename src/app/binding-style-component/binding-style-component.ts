import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  styleUrl: './binding-style-component.css',
  templateUrl: './binding-style-component.html',
})
export class BindingStyleComponent {
  // Change this value to test the 10 configured percentage ranges.
  progressValue = 75;
  statusColor = 'red';

  // 0–10, 11–20, …, 91–100. Every level has its own color.
  private readonly progressColors = [
    '#7c3aed', // 0–10
    '#2563eb', // 11–20
    '#0891b2', // 21–30
    '#0d9488', // 31–40
    '#16a34a', // 41–50
    '#65a30d', // 51–60
    '#ca8a04', // 61–70
    '#008000', // 71–80
    '#ea580c', // 81–90
    '#dc2626', // 91–100
  ];

  get progressColor(): string {
    const value = Math.min(100, Math.max(0, this.progressValue));
    const level = Math.max(0, Math.ceil((value - 10) / 10));
    return this.progressColors[level];
  }

  setProgress(value: string): void {
    const parsedValue = Number(value);
    this.progressValue = Number.isFinite(parsedValue)
      ? Math.min(100, Math.max(0, parsedValue))
      : 0;
  }
}
