import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'game',
  styles: [`
  `],
  template: `
    
    <team></team>
    
    <team></team>
    
    
   
  
  
  `
})
export class GameComponent implements OnInit {

  public localState: any;
  goals =0;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data.yourData;
      });

    console.log('hello `About` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
