import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TextNotesComponent } from './text-notes/text-notes.component';
import { ArticleNotesComponent } from './article-notes/article-notes.component';
import { PictureNotesComponent } from './picture-notes/picture-notes.component';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { TextCreateComponent } from './text-notes/create/create.component';
 
import { PictureCreateComponent } from './picture-notes/create/create.component';

import { ArticleCreateComponent } from './article-notes/create/create.component';

const routes:Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: SigninComponent},
  {path:'register', component: SignupComponent},
  {path:'text-notes', component: TextNotesComponent,
   children:[
   {path:'', component: TextCreateComponent}
   
   ]
},
  {path:'article-notes', component: ArticleNotesComponent,
  children:[
   {path:'create', component: ArticleCreateComponent}
   ]
},
  {path:'picture-notes', component: PictureNotesComponent,
  children:[
   {path:'create', component: PictureCreateComponent}
   ]
},
  {path:'document-notes', component: DocumentNotesComponent},
  ];
@NgModule({
  imports: [
  RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
