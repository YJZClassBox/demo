import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewsRoutingModule} from './views-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SystemUserComponent} from '../pages/system-user/system-user.component';
import {AppIndexComponent} from '../pages/app-index/app-index.component';
import {ViewsComponent} from './views.component';

@NgModule({
  imports: [
    CommonModule, ViewsRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ViewsComponent, SystemUserComponent, AppIndexComponent]
})
export class ViewsModule { }
