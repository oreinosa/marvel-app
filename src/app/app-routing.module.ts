import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
  { path: 'comics', loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule) },
  { path: 'stories', loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule) },
  { path: 'bookmarks', loadChildren: () => import('./bookmarks/bookmarks.module').then(m => m.BookmarksModule) },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
