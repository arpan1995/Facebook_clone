import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeModule } from './Components/home/home.module';
import { FacebookGuard } from './guards/facebook.guard';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
  path:'', component:HomeComponent,
  // loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule),
  canActivate:[FacebookGuard]
  },
  {
    path:'login', component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function m(value: typeof import("c:/Users/arpan/OneDrive/Desktop/Angular projects/Facebook_Clone/src/app/Components/home/home.module")): typeof import("c:/Users/arpan/OneDrive/Desktop/Angular projects/Facebook_Clone/src/app/Components/home/home.module") | PromiseLike<typeof import("c:/Users/arpan/OneDrive/Desktop/Angular projects/Facebook_Clone/src/app/Components/home/home.module")> {
  throw new Error('Function not implemented.');
}

