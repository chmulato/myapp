import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [ PostsService ]
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
      this.name = 'Christian Vladimir Uhdre Mulato';
      this.email = 'chmulato@hotmail.com';
      this.address = {
        street: 'Rua Ari Manfron, 123',
        city: 'Curitiba',
        state: 'PR'
      }
      this.hobbies = ['Musics','Movies','Reading Books'];
      this.showHobbies = false;
      //console.log('constructor ran');

      this.postsService.getPosts().subscribe(posts => {
          this.posts = posts;
      })
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
        this.showHobbies = false;
    } else {
        this.showHobbies = true;
    }
     // console.log('show');
  }

  addHobby(hobby: string) {
      this.hobbies.push(hobby);
      //console.log(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

}

// this is a interface declaration type
interface address {
    street: string,
    city: string,
    state: string
}

interface Post {
    id: number,
    title: string,
    body: string
}