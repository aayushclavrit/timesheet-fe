import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { NavbarComponent } from './essentials/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent,
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
  },
  {
    path: 'adminpage',
    component: AdminpageComponent,
  },
  {
    path: 'userpage',
    component: UserpageComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
