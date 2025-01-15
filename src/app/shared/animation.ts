import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
]);

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(100%)' })),
  ]),
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
      optional: true,
    }),
    group([
      query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('300ms ease-in', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
