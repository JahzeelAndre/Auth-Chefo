import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionPageRoutingModule } from './introduction-page-routing.module';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    LoginComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    IntroductionPageRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class IntroductionPageModule { }
