import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {SystemUserComponent} from '../pages/system-user/system-user.component';
import {AppIndexComponent} from '../pages/app-index/app-index.component';
import {LoginComponent} from '../pages/login/login.component';

const routes: Routes = [{
  path: '',
  component: SystemUserComponent,
  children: [
    {
      path: 'appuser',
      component: AppIndexComponent,
    },
    {
      path: 'applogin',
      component: LoginComponent,
    },
    {
      path: 'appIndex',
      component: AppIndexComponent,
    }
  ]
}]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ViewsRoutingModule { }
