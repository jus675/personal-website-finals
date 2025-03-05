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
    
    <section class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <h1 class="hero-title"><i>Welcome to the Ether</i></h1>
        <p class="hero-subtitle">— where thoughts can fleet and find its solace —</p>
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
@import "../assets/mystyle.css"; /* Import External CSS */
</style>
