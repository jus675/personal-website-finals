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
  
      <section class="gallery">
        <h2 class="gallery-title">Gallery</h2>
        <div class="gallery-container">
          <img 
            v-for="(image, index) in galleryImages" 
            :key="index" 
            :src="image.src" 
            :alt="image.alt" 
            :style="image.style || ''"
            class="gallery-image"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Gallery",
    data() {
      return {
        galleryImages: [
          { src: "/gallery/picture-gallery-1.jpg", alt: "Picture-Gallery-1" },
          { src: "/gallery/picture-gallery-4.jpg", alt: "Picture-Gallery-4", style: "width:300px;height:500px" },
          { src: "/gallery/picture-gallery-6.jpg", alt: "Picture-Gallery-6" },
          { src: "/gallery/picture-gallery-2.jpg", alt: "Picture-Gallery-2" },
          { src: "/gallery/picture-gallery-3.jpg", alt: "Picture-Gallery-3" },
          { src: "/gallery/picture-gallery-5.jpg", alt: "Picture-Gallery-5" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  @import "../assets/mystyle.css";
  @import "../assets/gallery.css";
  
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .gallery-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  