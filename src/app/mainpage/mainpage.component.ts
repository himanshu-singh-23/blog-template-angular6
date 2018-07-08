import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  blogs = Array<any>();
  ngOnInit() {
    this.blogs = [
    {
      title: 'Blog',
      content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      likes : Math.floor(Math.random() * 100),
      image: 'http://image3.mouthshut.com/images/Restaurant/Photo/-23359_7308.jpg',
      showMore : false
    },
      {
      title: 'Blog',
      content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      likes: Math.floor(Math.random() * 100),
      image: 'http://ste.india.com/sites/default/files/Khandala_0.jpg',
      showMore: false
    },
      {
        title: 'Blog',
        content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
        likes: Math.floor(Math.random() * 100),
        image: 'https://c2.staticflickr.com/8/7333/14145350391_3417fb7ef4_b.jpg',
        showMore: false
      },
    {
      title: 'Blog',
      content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      likes : Math.floor(Math.random() * 100),
      image: 'http://image3.mouthshut.com/images/Restaurant/Photo/-23359_7308.jpg',
      showMore : false
    },
      {
      title: 'Blog',
      content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      likes: Math.floor(Math.random() * 100),
      image: 'http://ste.india.com/sites/default/files/Khandala_0.jpg',
      showMore: false
    },
      {
        title: 'Blog',
        content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
        likes: Math.floor(Math.random() * 100),
        image: 'https://c2.staticflickr.com/8/7333/14145350391_3417fb7ef4_b.jpg',
        showMore: false
      },
    {
      title: 'Blog',
      content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      likes : Math.floor(Math.random() * 100),
      image: 'http://image3.mouthshut.com/images/Restaurant/Photo/-23359_7308.jpg',
      showMore : false
    },
      {
      title: 'Blog',
      content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
      likes: Math.floor(Math.random() * 100),
      image: 'http://ste.india.com/sites/default/files/Khandala_0.jpg',
      showMore: false
    },
      {
        title: 'Blog',
        content: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
      of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page
      editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy
      .Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).`,
        likes: Math.floor(Math.random() * 100),
        image: 'https://c2.staticflickr.com/8/7333/14145350391_3417fb7ef4_b.jpg',
        showMore: false
      },
  ];
  }

  showMore(i) {
    this.blogs[i].showMore = !this.blogs[i].showMore;
  }
  addlike(i) {
    this.blogs[i].likes += 1 ;
  }

}
