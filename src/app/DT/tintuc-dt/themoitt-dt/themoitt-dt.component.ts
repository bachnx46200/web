import { Component,  OnInit } from "@angular/core";
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-themoitt-dt',
  templateUrl: './themoitt-dt.component.html',
  styleUrls: ['./themoitt-dt.component.scss']
})
export class ThemoittDTComponent implements OnInit  {

  name = 'Angular 6';
  htmlContent = '';

  constructor() { }

  ngOnInit(): void {
  }

 
  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
