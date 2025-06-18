import { CommonModule } from '@angular/common';
import { NgModule, provideAppInitializer } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';

import { defineCustomElements } from '@biggive/components/loader';

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    provideAppInitializer(() => {
        const initializerFn = (() => defineCustomElements)();
        return initializerFn();
      }),
  ],
})
export class ComponentsModule { }
