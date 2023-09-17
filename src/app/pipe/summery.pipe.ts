import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'summery'
})

export class SummeryPipe implements PipeTransform{
    private readonly DEFAULT_LIMIT = 20;
    transform(value: string,limit?:number) {
        if(!value) return null;
        
        limit = limit ?? this.DEFAULT_LIMIT;
        // limit = value.length > limit ? limit : value.length;
        return value = value.substring(0,limit) + (value.length > limit ? '....': '');
    }
}