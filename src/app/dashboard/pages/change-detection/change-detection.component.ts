import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
        //this.frameworkAsProperty.name = 'React';
        this.frameworkAsSignal.update( value => {
          value.name = 'React';

          return {...value};
        })

        console.log('Hecho');
    }, 3000);
  }

}
