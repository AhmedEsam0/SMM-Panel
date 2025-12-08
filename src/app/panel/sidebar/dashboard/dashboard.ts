import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Stat {
  icon: string;
  iconBgColor: string;
  hintBgColor: string;
  hintTextColor: string;
  hintText: string;
  title: string;
  data: string;
}

interface Btn {
  title: string;
  hint: string;
}

interface Service {
  iconBgClass: string;
  icon: string;
  title: string;
  hint: string;
  price: string;
}

interface Tool {
  iconBg: string;
  icon: string;
  checkBg: string;
  isActive: boolean;
  title: string;
  hint: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats: Stat[] = [
    {
      icon: 'fa-solid fa-cart-shopping',
      iconBgColor: 'rBg-1',
      hintBgColor: 'hintBg-1',
      hintTextColor: 'hint-1',
      hintText: '+12.5%',
      title: 'Total Orders',
      data: '2,847',
    },
    {
      icon: 'fa-solid fa-wallet',
      iconBgColor: 'rBg-2',
      hintBgColor: 'hintBg-2',
      hintTextColor: 'hint-2',
      hintText: '$2,450',
      title: 'Balance',
      data: '$8,524.00',
    },
    {
      icon: 'fa-solid fa-chart-line',
      iconBgColor: 'rBg-3',
      hintBgColor: 'hintBg-3',
      hintTextColor: 'hint-3',
      hintText: 'Active',
      title: 'Active Services',
      data: '156',
    },
    {
      icon: 'fa-solid fa-headset',
      iconBgColor: 'rBg-4',
      hintBgColor: 'hintBg-4',
      hintTextColor: 'hint-4',
      hintText: '3 Open',
      title: 'Support Tickets',
      data: '12',
    },
  ];
  btns: Btn[] = [
    {
      title: 'Place New Order',
      hint: 'Start boosting your social media now',
    },
    {
      title: 'Add Funds',
      hint: 'Top up your wallet balance',
    },
  ];
  services: Service[] = [
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
      icon: 'fa-brands fa-twitter',
      title: 'Twitter Retweets',
      hint: 'Boost engagement with real retweets',
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

  tools: Tool[] = [
    {
      iconBg: 'rBg-1',
      icon: 'fas fa-magic',
      checkBg: 'checkBg-1',
      isActive: false,
      title: 'AI Post Suggestions',
      hint: 'Get AI-powered content ideas for posting',
    },
    {
      iconBg: 'rBg-2',
      icon: 'fa-solid fa-hashtag',
      checkBg: 'checkBg-2',
      isActive: false,
      title: 'Trending Hashtags',
      hint: 'Discover trending hashtags in your niche',
    },
    {
      iconBg: 'rBg-2',
      icon: 'fa-solid fa-closed-captioning',
      checkBg: 'checkBg-3',
      isActive: false,
      title: 'Auto Captions',
      hint: 'Generate engaging captions automatically',
    },
  ];

  toggleChechBox(tool: Tool) {
    tool.isActive = !tool.isActive;
  }
}
