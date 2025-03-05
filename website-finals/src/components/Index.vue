<template>
    <div>
      <!-- Navigation Bar -->
      <header>
        <nav>
          <ul class="nav-bar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Interests</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>
      </header>
  
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
          <h1 class="hero-title"><i>Welcome to the Ether</i></h1>
          <p class="hero-subtitle">— where thoughts can fleet and find its solace —</p>
          
          <!-- TamaNOTchi Icon -->
          <div class="hero-icon">
            <a href="https://tamanotchi.world/9607c">
              <img src="https://tamanotchi.world/i/9607" alt="It's tamaNOTchi! Click to feed!"> 
            </a>
            <span class="hero-tooltip">Feed Me!</span>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  @import "@/assets/mystyle.css"; /* Import external CSS */
  </style>
  