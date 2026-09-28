import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  hsa: number = 0;
  hsb: number = 0;
  hsc: number = 0;
  result: string = '';

  doSolution(): void {
    if (this.hsa === 0) {
      this.result = 'Vô số nghiệm';
    } else if (this.hsb === 0 && this.hsc !== 0) {
      this.result = 'Vô nghiệm';
    } else if (this.hsb === 0 && this.hsc === 0) {
      this.result = 'Phương trình có nghiệm x = 0';
    } else {
      const delta = Math.pow(this.hsb, 2) - 4 * this.hsa * this.hsc;

      if (delta < 0) {
        this.result = '<font color="red">Vô nghiệm</font>';
      } else if (delta === 0) {
        this.result = 'Có nghiệm kép x1=x2=' + (-this.hsb / (2 * this.hsa));
      } else {
        this.result =
          'Có 2 nghiệm phân biệt x1=' +
          ((-this.hsb + Math.sqrt(delta)) / (2 * this.hsa)) +
          ' và x2=' +
          ((-this.hsb - Math.sqrt(delta)) / (2 * this.hsa));
      }
    }
  }

  clearSolution(): void {
    this.hsa = 0;
    this.hsb = 0;
    this.hsc = 0;
    this.result = '';
  }
}
