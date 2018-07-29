import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextNotesService {
	notesArray = [];

  constructor() { }
  createNote(note) {
  	this.notesArray.push(note);
  	return this.notesArray;;

  }
  
}
