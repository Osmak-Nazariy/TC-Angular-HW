import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService} from './search.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  pageOfItems: Array<any>;
  items = [];
  subscription;
  constructor(private httpService: SearchService) { }

  ngOnInit() {
  this.httpService.getData().subscribe(data => this.items = data);

  this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
 
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
    }
}
