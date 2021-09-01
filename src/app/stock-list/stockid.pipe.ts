import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'ObjNgFor', pure: false })
export class ObjNgFor implements PipeTransform {
    transform(value: Object): Array<string> { return Object.keys(value); }
}