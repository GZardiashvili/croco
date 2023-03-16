import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserDetailsRoutingModule} from './user-details-routing.module';
import {UserDetailsComponent} from "./user-details.component";
import {MatCardModule} from "@angular/material/card";
import {ActivatedRoute, Router} from "@angular/router";


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatCardModule
  ]
})
export class UserDetailsModule {
}
