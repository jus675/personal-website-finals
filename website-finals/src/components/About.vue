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

      <section class="about-me">
        <div class="about-me-content">
          <img class="about-me-profile-02" src="/profile/justine-02.jpg" alt="Justine">
          <div class="about-me-text">
            <h2 class="about-me-title">About Me</h2>
            <p>I am Justine Denise Hernandez, a 3rd-year Computer Science student from SS221, currently studying at Asia Pacific College.</p>
            <p>The field of Computer Science piqued my interest as I explored interesting stuff during the pandemic.</p>
          </div>
        </div>
      </section>
  
      <section class="education">
        <h2 class="education-title">Education</h2>     
        <div class="school-container">
          <div v-for="(school, index) in schools" :key="index" class="school">
            <a :href="school.link" target="_blank" :title="school.name">
              <img :src="school.img" :alt="school.name">
            </a>
            <p>{{ school.years }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "About",
    data() {
      return {
        schools: [
          { name: "R & O Academy", link: "https://www.facebook.com/483014RandO/", img: "/education/01-r-and-o-academy.png", years: "2007 - 2008" },
          { name: "St. Therese CHJF School", link: "https://www.facebook.com/OfficialSTCJHFS", img: "/education/02-st-therese-cjhf-school.png", years: "2008 - 2010" },
          { name: "St. Mary's Academy Pasay", link: "https://sma.edu.ph/", img: "/education/03-st-marys-academy-pasay.png", years: "2010 - 2016"},
          { name: "Pasay City National Science High School", link: "http://psci.depedpasay.ph/", img: "/education/04-pasay-city-national-science.png", years: "2016 - 2022"}, 
          { name: "Asia Pacific College", link: "https://www.apc.edu.ph/", img: "/education/05-asia-pacific-college.png", years: "2022 - 2026"}, 
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  @import "../assets/mystyle.css";
  @import "../assets/about.css";
  </style>
  