import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('stylistsPage <=> servicesPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 32,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%'
          })
        ]),
        query(':enter', [
          style({ bottom: '-100%', opacity: 0 })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('400ms ease-out', style({ bottom: '100%', opacity: 0 }))
          ]),
          query(':enter', [
            animate('400ms ease-out', style({ bottom: '0%', opacity: 1 }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* <=> contactPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 32,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%'
          })
        ]),
        query(':enter', [
          style({ bottom: '-100%', opacity: 0 })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('400ms ease-out', style({ bottom: '100%', opacity: 0 }))
          ]),
          query(':enter', [
            animate('400ms ease-out', style({ bottom: '0%', opacity: 1 }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* <=> productsPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 32,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%'
          })
        ]),
        query(':enter', [
          style({ bottom: '-100%', opacity: 0 })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('550ms ease-out', style({ bottom: '100%', opacity: 0 }))
          ]),
          query(':enter', [
            animate('500ms ease-in', style({ bottom: '0%', opacity: 1 }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ])
  ]
})

export class MainComponent implements OnInit {

  title: string = 'Cowboys and Angels Salon, styling for Men and Women.';

  constructor(private router: Router, private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({name: 'description', content: 'Cowboys and Angels Salon'})
    this.metaTagService.addTag({content: 'https://www.linkedin.com/in/noland-shirley-759b451b8/', property: 'article.author'});
    this.metaTagService.addTag({property: 'og:url', content: 'cowboysandangelssalon.net'});
    this.metaTagService.addTag({property: 'og:description', content: 'Cowboys and Angels Salon offers a wide range of custom haircuts and styles for Men and Women.'});
    this.metaTagService.addTag({property: 'og:type', content: 'website'});
  }

  navigateInstagram () {
    window.location.href = "https://www.instagram.com/cowboys_and_angels274/";
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  isMobile() {
    return window.screen.width <= 380;
  }

  isNotMobile() {
    return window.screen.width >= 380;
  }


}
