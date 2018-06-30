// import { ActivatedRoute, Data } from '@angular/router';
// import { Component } from '@angular/core';
// import { inject, TestBed } from '@angular/core/testing';
//
// /**
//  * Load the implementations that should be tested.
//  */
// import { TeamComponent } from './about.component';
//
// describe('About', () => {
//   /**
//    * Provide our implementations or mocks to the dependency injector
//    */
//   beforeEach(() => TestBed.configureTestingModule({
//     providers: [
//       /**
//        * Provide a better mock.
//        */
//       {
//         provide: ActivatedRoute,
//         useValue: {
//           data: {
//             subscribe: (fn: (value: Data) => void) => fn({
//               yourData: 'yolo'
//             })
//           }
//         }
//       },
//       TeamComponent
//     ]
//   }));
//
//   it('should log ngOnInit', inject([TeamComponent], (about: TeamComponent) => {
//     spyOn(console, 'log');
//     expect(console.log).not.toHaveBeenCalled();
//
//     about.ngOnInit();
//     expect(console.log).toHaveBeenCalled();
//   }));
//
// });
