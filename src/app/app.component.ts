import { Component, Input } from '@angular/core';

class Article {
   public publishedAt: Date;
   constructor(
      public title: string,
      public description: string,
      public votes?: number //we need to make it optional, in typescript we use ? to do this
   ) {
      this.votes = votes || 0;
      this.publishedAt = new Date();
   }

   public voteUp(): void {
      this.votes = this.votes + 1;
   }

   public voteDown(): void {
      this.votes = this.votes - 1;
   }
}

@Component({
  selector: 'app-sidebar',
  template: `
   <div id="sidebar">
    Sidebar will go here.
   </div>
  `
})
export class SidebarComponent {}

   @Component({
     selector: 'app-article',
     template: `
      <div class="image">
         <img src='https://placekitten.com/g/400/300'>
      </div>
      <div class="content">
         <div class="header">
            {{ article.header }}
         </div>
         <div class="meta">
            <span class="ui blue small label">
               <i class="heart icon"></i>
               <div class="detail">
                  {{ article.votes }}
               </div>
            </span>
            <span class="ui right floated">
               <a
               (click)="upvote()"
               class="ui small label">
                  <i class="arrow up icon"></i>
                  Upvote
               </a>
               <a
               (click)="downvote()"
                class="ui small label">
                  <i class="arrow down icon"></i>
                  Downvote
               </a>
            </span>
         </div>
         <div class="meta date">
            {{ article.publishedAt | date }}
         </div>
         <div class="meta-description">
            <p>{{ article.description }}</p>
         </div>
         <div class="extra">
            <a
               href='#'
               target='_blank'
               class='ui right floated button primary'
               >Read More
               <i class='right chevron icon'></i>
            </a>
         </div>
      </div>
     `
   })
   export class ArticleComponent {
      @Input( ) article: Article;

      upvote() {
         this.article.voteUp();
      }

      downvote() {
         this.article.voteDown();
      }
   }

@Component({
  selector: 'app-root',
  template: `
       <div class="ui container">
          <app-sidebar></app-sidebar>
          <div class="ui divided items">
            <app-article
            *ngFor="let article of articles"
               [article]="article"
               class='item'></app-article>
          </div>
       </div>
  `
})

export class AppComponent {
  articles: Article[];

  constructor() {
      this.articles = [
         new Article(
            'The Angular 2 Screencast',
            'The easiest way to learn Angular 2 is with fullstack.io!',
            10
         ),
         new Article(
            'Fullstack React',
            'Want to learn React too?'
         ),
         new Article(
            'Vue is new',
            'And pretty cool syntax to!'
         ),
         new Article(
            'The Angular 2 Screencast',
            'The easiest way to learn Angular 2 is with fullstack.io!'
         ),
         new Article(
            'But what about Elm',
            'Everybody likes Elm...right?'
        )
     ];
  }
}
