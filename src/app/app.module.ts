import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import 'hammerjs';


import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { LocalstorageService } from './services/localstorage.service';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    EditUserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AsyncLocalStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxcHSDn_kHjgSbjMnxQxsiuGGtXdmnupI',
      libraries: ["places"]
    })
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
