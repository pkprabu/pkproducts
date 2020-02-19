import { style, state, trigger, transition, animate, keyframes } from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    //Instead of void => *, * => void i have used alias.
    /* transition(':enter, :leave', [
        animate('1000ms', keyframes([
            style({offset: .2, opacity: 0, transform: 'translateY(100%)'}),
            style({offset: .5, opacity: .5, transform: 'translateY(-10%)'}),
            style({offset: 1, opacity: 1, transform: 'translateY(0%)'})
        ]))
    ]) */
    transition(':enter, :leave', [
        animate(1000)
    ])
])