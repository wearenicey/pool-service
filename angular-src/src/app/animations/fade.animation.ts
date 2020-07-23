import {trigger, animate, transition, style, query} from '@angular/animations';

export const fadeAnimation =

  trigger('fadeAnimation', [

    transition('* => *', [

      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ])

    ])

  ]);
