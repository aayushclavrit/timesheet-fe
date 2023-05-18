import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EssentialsModule } from '../essentials/essentials.module';

@NgModule({
  declarations: [LoginpageComponent, UserpageComponent, AdminpageComponent],
  imports: [CommonModule, EssentialsModule],
  exports: [LoginpageComponent, UserpageComponent, AdminpageComponent],
})
export class ComponentsModule {}
