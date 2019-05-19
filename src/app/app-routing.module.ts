import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  //   data: { animation: 'home'}
  // },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: { animation: 'home'}
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
    data: { animation: 'about'}
  },
  // { path: 'todo',
  //   loadChildren: './todo/todo.module#TodoPageModule',
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule',
    data: { animation: 'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // <-- debugging purposes only
    preloadingStrategy: SelectivePreloadingStrategyService,
    }
  )],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
