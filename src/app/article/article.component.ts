import {Component, OnInit} from '@angular/core';
import { Article } from './article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    host: {
        class: 'row'
    }
})
export class ArticleComponent implements OnInit {
    article: Article;

    constructor() {
        this.article = new Article(
            'Angular 2',
            'http://angular.io',
            10
        );
    }

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }

    ngOnInit() {
    }

}
