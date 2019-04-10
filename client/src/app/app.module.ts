import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconsModule,
    PickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
