import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module'


import { FooterComponent } from './component/footer/footer.component';
import { NewComponent } from './component/new/new.component';
import { FixtureComponent } from './component/fixture/fixture.component';
import { ResultComponent } from './component/result/result.component';
import { AnalyzeComponent } from './component/analyze/analyze.component';
import { TableComponent } from './component/table/table.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { PremierComponent } from './component/premierleague/premier/premier.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'new', component: NewComponent},
  {path: 'analyze', component: AnalyzeComponent},
  {path: 'fixture', component: FixtureComponent},
  {path: 'result', component: ResultComponent},
  {path: 'table', component: TableComponent},
  {path: 'menu', component: MenuComponent},


  {path: 'premier', component: PremierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
