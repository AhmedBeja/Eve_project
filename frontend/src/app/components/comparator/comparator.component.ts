import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './comparator.component.html',
    styleUrls: ['./comparator.component.scss']
  })

  export class ViewComparator {
    @ViewChild('energy1Select') energy1Select!: ElementRef;
  @ViewChild('energy2Select') energy2Select!: ElementRef;
  result: string = '';

  compare(): void {
    const energy1Value = this.energy1Select.nativeElement.value;
    const energy2Value = this.energy2Select.nativeElement.value;
    this.result = `Vous avez sélectionné : ${energy1Value} et ${energy2Value}`;
    console.log(this.result);
  }
  }