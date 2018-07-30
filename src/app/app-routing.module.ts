import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
    { path: '', redirectTo: '/appComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
