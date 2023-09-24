import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  // inputs:['isFavorite']
})
export class FavoriteComponent {
  // isFavorite:string|undefined
  @Input('is-favorite') isFavorite: string | undefined;
  
  @Input() users: any;

  @Input() getUser: any;
  @Output() change = new EventEmitter();
  @Input() tweet:any;
  @Output() click = new EventEmitter();
  
  course = [21,4];
  isSet:boolean = true;
  courses:any;

  constructor(){
  }
  
  public show(){
    console.log(this.getUser());
    this.change.emit({name:'CodeigSoft',age:5});

  }

  /**
   * childToParent
   */
  public childToParent() {
    
  }
  /**
   * likesCount
   */
  public likesCount() {
    this.click.emit(
      this.tweet={
        likes:!this.tweet.likes,
        likeCount:  this.tweet.likes ? 0: 1
      }
    )
  }

  onLoadCourse(){
    this.courses = [
      {
        id:1,
        name:'Angular'
      },
      {
        id:2,
        name:'Node Js'
      },
      {
        id:3,
        name:'Vue Js'
      }
    ]
  }
  /**
   * addNewCourse
   */
  public addNewCourse() {
    
    this.courses.push({id:4,name:"Javascript"})
  }

  courseLoad(index:number,course:any){
    course ? course.id: undefined
  }
  
  onDeleteCourse(course:any){
    let index = this.courses.indexOf(course);

    this.courses.splice(index,1);
  }
}
