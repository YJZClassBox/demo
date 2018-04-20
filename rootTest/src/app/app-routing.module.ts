import {ExtraOptions, RouterModule, Route, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './pages/login/login.component';
import {SystemUserComponent} from './pages/system-user/system-user.component';

const routes: Routes = [
  {path: 'views', loadChildren: './views/views.module#ViewsModule'},
  {path: '', redirectTo: 'views', pathMatch: 'full'},
  {path: '**', redirectTo: 'views'}
];
const config: ExtraOptions = {
  useHash: true
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
