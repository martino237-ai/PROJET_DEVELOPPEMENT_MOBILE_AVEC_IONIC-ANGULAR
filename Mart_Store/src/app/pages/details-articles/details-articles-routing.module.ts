import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsArticlesPage } from './details-articles.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsArticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsArticlesPageRoutingModule {}
