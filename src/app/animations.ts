import { transition, style, animate, trigger, keyframes, query, stagger, animateChild, group, state } from "@angular/animations"


export const preview = trigger('preview', [
    transition(':enter',[
        style({
          top: '{{top}}',
          left: '{{left}}',
          width: '{{width}}',
          height: '{{height}}',
          transform: 'scale(1.1)'
        }),
      
        animate('300ms ease-in-out',
            style({
                top: '*',
                left: '*',
                width: '*',
                height: '*',
                transform: '*'
                
            })      
        ),
        query('@button', animateChild(), {optional: true})
      ],
      { params: { width: '', height: '', top: '', left: '' } }
    ),
        
  transition(':leave', [
      style({
        top: '*',
        left: '*',
        width: '*',
        height: '*',
        transform: 'scale(1)'

      }),
      query('@button', animateChild(), {optional: true}),
      animate(
        '300ms ease-out',
        style({
          top: '{{top}}',
          left: '{{left}}',
          width: '{{width}}',
          height: '{{height}}',
          transform: 'scale(1.1)'
        })
      ),
    ]),
  ]);

  export const backdrop = trigger('backdrop', [
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate(
        '500ms 100ms ease',
        style({
          opacity: 1,
        })
      ),
    ]),

    transition(':leave', [
      animate(
        '500ms 100ms ease',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]);

export const show = trigger('show', [
    transition(':enter', [
      query('app-preview', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        
        stagger('30ms', [
          animate('500ms 100ms ease')
        ])
       ], {optional: true})  
    ])
  ])


export const button = trigger('button', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(150%)'
    }),
    animate('500ms 100ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'

    }))
  ]),

  transition(':leave', [
    animate('100ms', style({
      opacity: 0
    }))
  ])
])



export const description = trigger('description', [
  transition(':enter', [
    query('app-show-preview', [
          style({transform: 'scale(0.5) translateX(0%)', 'z-index': 3, opacity: 0.2}),
          animate('1200ms ease', keyframes([
            style({transform: 'scale(0.5) translateX(0%)', offset: 0.1}),
            style({transform: 'scale(0.6) translateX(-45%)', 'z-index': 4, opacity: 0.5, offset: 0.8}),
            style({transform: 'scale(1) translateX(0%)', opacity: 1, offset: 1}),
          ])),
     ], {optional: true}),
    query('@button', animateChild(), {optional: true}),   
    query('@details', animateChild(), {optional: true}),   
  ]),
  
  
  transition(':leave', [
    query('app-show-preview', [
       animate('1200ms ease', keyframes([
       style({transform: 'translateX(0%) scale(1)', opacity: 1, offset: 0.1}),
        style({transform: 'translateX(-30%) scale(0.6)', opacity: 0.5, 'z-index': 2, offset: 0.8}),
        style({transform: 'translateX(0%) scale(0.5)', opacity: 0.2, offset: 1}),
     ]))
     ], {optional: true})
     
   ])
  
]);
  





export const onDescription = trigger('onDescription', [
  state('behind',style({transform: 'translateX(0%) scale(0.5)', opacity: 0.2, 'z-index': 3})
  ),

  state('front', style({transform: 'translateX(0%) scale(1)', opacity: 1})),

  transition('* => behind', [
    animate('1200ms ease', keyframes([
        style({transform: 'translateX(0%) scale(1)', opacity: 1, offset: 0.1}),
        style({transform: 'translateX(40%) scale(0.6)', opacity: 0.5, 'z-index': 3, offset: 0.8}),
        style({transform: 'translateX(0%) scale(0.5)', opacity: 0.2,  offset: 1})
    ]))
       
  ]),

  transition('behind => front', [
    animate('1200ms ease', keyframes([
       style({transform: 'translateX(0%) scale(0.5)', opacity: 0.2, offset: 0.1}),
       style({transform: 'translateX(30%) scale(0.6)', opacity: 0.5, offset: 0.8}),
       style({transform: 'translateX(0%) scale(1)', opacity: 1, offset: 1})
    ]))
  ])
]);



export const details = trigger('details', [
  transition(':enter', [
    query('h2', [
    style({
      opacity: 0,
      transform: 'translateY(-80%)'
    })
  ], {optional: true}),
  query('p', [
    style({
      opacity: 0,
      transform: 'translateY(30%)'
    })
  ], { optional: true }),
  
  group([
    query('h2, p', [
      animate('800ms ease', style({
        opacity: 1,
        transform: 'translateY(0%)'
      }))
    ], {optional: true}),
  ])
  ])
])



export const header = trigger('header', [
  transition(':enter', [
    query(':self, h1, p', [
      style({
        opacity: 0,
        transform: 'translateY(40%)'
        })
    ], { optional: true }),
    
    group([
      query(':self', [
        animate('800ms ease', style({
          opacity: 1,
          transform: 'translateY(0%)'
        }))
      ]),
      query('h1', [
        animate('800ms 200ms ease', style({
          opacity: 1,
          transform: 'translateY(0%)'
        }))
      ], {optional: true}),
      query('p', [
        animate('800ms 400ms ease', style({
          opacity: 1, 
          transform: 'translateY(0%)'
        }))
      ], {optional: true})
    ])
  ])
])

export const background = trigger('background', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('600ms ease', style({
      opacity: 1
    }))
  ])
])


export const media = trigger('media', [
  transition(':enter', [
    query('app-preview', [
      style({
        opacity: 0,
        transform: 'translateY(50%)'
      })
    ], { optional: true }),
    
    query('app-preview', [
      stagger('100ms', animate('800ms 500ms ease', style({
        opacity: 1,
        transform: 'translateY(0%)'
      })))
    ], {optional: true})
  ])
])