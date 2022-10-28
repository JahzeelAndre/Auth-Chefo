import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/introduction-page/body/body.component';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import ('./pages/introduction-page/introduction-page.module')
    .then((m) => m.IntroductionPageModule),
  },
  {
    path: '**',
    redirectTo: 'introduction',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
