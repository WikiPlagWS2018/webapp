import { Injectable } from '@angular/core';
import { JSZip } from 'jszip';
import { Docxtemplater } from 'docxtemplater';

@Injectable()
export class ParseDocxService {

  text: string;

  constructor() {}
  getText(file: File) {
    const  docX: Docxtemplater = new Docxtemplater();
    const zip = new JSZip(file);
    docX.loadZip(zip);
    return docX.getFullText();
  }
}
