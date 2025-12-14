import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PopService {
  iconBgClass: string;
  icon: string;
  title: string;
  hint: string;
  price: string;
}

@Component({
  selector: 'app-popular-service',
  imports: [CommonModule],
  templateUrl: './popular-service.html',
  styleUrl: './popular-service.css',
})
export class PopularService {
  services: PopService[] = [
    {
      iconBgClass: 'sBg-1',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'YouTube Views',
      hint: 'Real views from active users worldwide',
      price: '1.20',
    },
    {
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook-f',
      title: 'Facebook Likes',
      hint: 'Instant delivery with lifetime guarantee',
      price: '3.00',
    },
    {
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-tiktok',
      title: 'TikTok Followers',
      hint: 'Premium followers with high retention',
      price: '4.50',
    },
    {
      iconBgClass: 'sBg-5',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Followers',
      hint: 'Boost engagement with real Followers',
      price: '2.80',
    },
    {
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Likes',
      hint: 'Instant likes from real active accounts',
      price: '1.50',
    },
  ];
}
