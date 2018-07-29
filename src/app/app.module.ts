import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RoutingModule } from './/routing.module';
import { TextNotesComponent } from './text-notes/text-notes.component';
import { ArticleNotesComponent } from './article-notes/article-notes.component';
import { PictureNotesComponent } from './picture-notes/picture-notes.component';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { TextCreateComponent } from './text-notes/create/create.component';
import { ArticleCreateComponent } from './article-notes/create/create.component';
import { PictureCreateComponent } from './picture-notes/create/create.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    SigninComponent,
    SignupComponent,
    TextNotesComponent,
    ArticleNotesComponent,
    PictureNotesComponent,
    DocumentNotesComponent,
    TextCreateComponent,
    ArticleCreateComponent,
    PictureCreateComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FormsModule, ReactiveFormsModule,
   
    RoutingModule

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
