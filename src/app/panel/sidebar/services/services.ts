import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopService, PopularService } from './popular-service/popular-service';

type Platform = 'facebook' | 'instagram' | 'youtube' | 'tiktok' | 'whatsapp';
interface Service extends PopService {
  platform: Platform;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, PopularService],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  selectedFilterPlatform: string = 'All';
  icons: Platform[] = ['facebook', 'instagram', 'tiktok', 'youtube', 'whatsapp'];


  services: Service[] = [
    // Facebook
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Likes',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Shares',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Comments',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Sponsor',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Friends',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'facebook',
      iconBgClass: 'sBg-3',
      icon: 'fa-brands fa-facebook',
      title: 'Facebook Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },

    // Instagram
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Likes',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Shares',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Comments',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Sponsor',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Friends',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'instagram',
      iconBgClass: 'sBg-6',
      icon: 'fa-brands fa-instagram',
      title: 'Instagram Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },

    // Tiktok
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Likes',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Shares',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Comments',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Sponsor',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Friends',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'tiktok',
      iconBgClass: 'sBg-4',
      icon: 'fa-brands fa-instagram',
      title: 'Tiktok Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },

    // Youtube

    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Likes',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Subscribers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Shares',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Comments',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Sponsor',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Views',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },
    {
      platform: 'youtube',
      iconBgClass: 'sBg-2',
      icon: 'fa-brands fa-youtube',
      title: 'Youtube Followers',
      hint: 'High quality followers with fast delivery',
      price: '2.50',
    },







  ];
}
