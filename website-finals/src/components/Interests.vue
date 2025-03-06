<template>
    <div>
      <header>
        <nav>
          <ul class="nav-bar">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/interests">Interests</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/resources">Resources</router-link></li>
          </ul>
        </nav>
      </header>
      
      <section v-for="category in categories" :key="category.id" class="content-section">
        <h2>{{ category.title }}</h2>
        <div class="media-container">
          <div v-for="item in category.items" :key="item.title" class="media">
            <a :href="item.link" target="_blank">
              <img :src="item.image" :alt="item.title" />
            </a>
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          {
            id: 'films',
            title: 'Favorite Films',
            items: [
              { title: '12 Angry Men (1957)', link: 'https://letterboxd.com/film/12-angry-men/', image: 'https://a.ltrbxd.com/resized/film-poster/5/1/7/0/0/51700-12-angry-men-0-1000-0-1500-crop.jpg?v=b8aaf291a9' },
              { title: 'Pride & Prejudice (2005)', link: 'https://letterboxd.com/film/pride-prejudice/', image: 'https://a.ltrbxd.com/resized/sm/upload/nq/jo/26/tn/dAC0hkYmz5ZOCHURZCyj9isPMPd-0-1000-0-1500-crop.jpg?v=b3dac3ffd7' },
              { title: 'Monster (2023)', link: 'https://letterboxd.com/film/monster-2023/', image: 'https://a.ltrbxd.com/resized/film-poster/9/4/7/0/3/0/947030-monster-0-1000-0-1500-crop.jpg?v=9787f75532' },
              { title: 'The Tale of The Princess Kaguya (2013)', link: 'https://letterboxd.com/film/the-tale-of-the-princess-kaguya/', image: 'https://a.ltrbxd.com/resized/film-poster/1/1/2/9/5/6/112956-the-tale-of-the-princess-kaguya-0-1000-0-1500-crop.jpg?v=2f4295660e'},
              { title: 'All About Lily Chou-Chou (2001)', link: 'https://letterboxd.com/film/all-about-lily-chou-chou/', image: 'https://a.ltrbxd.com/resized/film-poster/4/1/4/4/7/41447-all-about-lily-chou-chou-0-1000-0-1500-crop.jpg?v=7db4522cd0'},
              { title: 'Shoplifters (2018)', link: 'https://letterboxd.com/film/shoplifters/', image: 'https://a.ltrbxd.com/resized/film-poster/4/3/5/1/2/9/435129-shoplifters-0-1000-0-1500-crop.jpg?v=f4c3e34d37'},
              { title: 'La Reine Margot (2014)', link: 'https://letterboxd.com/film/queen-margot-1994/', image: 'https://pbs.twimg.com/media/GSbUUw8WsAACqZV?format=jpg&name=medium'},
              { title: 'Moments of Love (2006)', link: 'https://letterboxd.com/film/moments-of-love', image: 'https://a.ltrbxd.com/resized/film-poster/6/7/6/1/4/67614-moments-of-love-0-1000-0-1500-crop.jpg?v=2a5e0b7706'},
            ]
          },
          {
            id: 'series',
            title: 'Favorite Series',
            items: [
              { title: 'Arcane (2021)', link: 'https://www.serializd.com/show/Arcane-94605', image: 'https://serializd-tmdb-images.b-cdn.net/t/p/w500/abf8tHznhSvl9BAElD2cQeRr7do.jpg' },
              { title: 'FRIENDS (1994)', link: 'https://www.serializd.com/show/Friends-1668', image: 'https://serializd-tmdb-images.b-cdn.net/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg' }
            ]
          }
          

        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import "../assets/mystyle.css";
  @import "../assets/interests.css";
  </style>
  