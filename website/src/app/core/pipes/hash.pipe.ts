import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "hash",
})
export class HashPipe implements PipeTransform {
  transform(value: string): string {
    let hash = 0;
    if (value.length === 0) return hash.toString();
    for (let i = 0; i < value.length; i++) {
      let chr = value.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
  }
}
