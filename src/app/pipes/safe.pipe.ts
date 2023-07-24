import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({name: 'safe'})
export class SafePipe {
  constructor(private sanitizer: DomSanitizer){
  }

  transform(style: string) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
