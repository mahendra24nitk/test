import { Component, OnInit } from '@angular/core';
import { TextNotesService } from '../text-notes.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TextCreateComponent implements OnInit {
	 textList:any = [];

  constructor(private textNotesService: TextNotesService) { }

  ngOnInit() {
  }
  createNote(note): void {
  	console.log(note);
  	if(note){
  		 this.textList = this.textNotesService.createNote(note)
  	}
  }

}
