import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [
    // EmployeeCardComponent,
    EmployeeListComponent,
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    // const itcorpoEmployeeCard = createCustomElement(EmployeeCardComponent, { injector });
    // customElements.define('itcorpo-employee-card', itcorpoEmployeeCard);

    const itcorpoEmployeeList = createCustomElement(EmployeeListComponent, { injector });
    customElements.define('itcorpo-employee-list', itcorpoEmployeeList);
  }

  ngDoBootstrap() { }
}
