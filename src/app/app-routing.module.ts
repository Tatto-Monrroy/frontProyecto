import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';


const ROUTES: Routes = [
    { path: '', redirectTo: '/userComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent },
    { path: 'userComponent', component: UserComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
