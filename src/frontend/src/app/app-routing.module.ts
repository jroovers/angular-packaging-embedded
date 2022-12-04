import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./component/user/user.component";
import {MainComponent} from "./component/main/main.component";
import {UserDetailComponent} from "./component/user-detail/user-detail.component";

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user/:uuid', component: UserDetailComponent},
  {path: '', component: MainComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
