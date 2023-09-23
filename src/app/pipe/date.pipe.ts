import {Pipe , PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
@Pipe({
    name:'myCustomDate'
})

export class CustomDatePipe implements PipeTransform{
   
    constructor(private readonly datePipe: DatePipe) {}

    transform(date: string): string | null {
        if(!date)
            return 'value should not be empty'

        const result = this.datePipe.transform(date,'fullDate');    
        return result;
    }
}