import {Pipe} from "@angular/core";

@Pipe({
  name: 'reverse'
})
export class ReversePipe1 {
  transform(value: string) {
    return value.split("").reverse().join("");
  }
}
