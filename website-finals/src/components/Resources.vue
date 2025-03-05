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
  
      <div>
        <h2 class="resources-title">Resources</h2>
        <ul class="resources-list">
          <li v-for="(resource, index) in resources" :key="index">
            <a :href="resource.link" target="_blank">{{ resource.link }}</a>
          </li>
        </ul>
  
        <!-- Guestbook Form -->
        <div id="guestbook-app">
          <h2 class="guestbook-title">Guestbook</h2>
          <form @submit.prevent="addMessage" class="guestbook-form">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="newMessage.name" placeholder="Your Name" required class="form-input" />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" v-model="newMessage.message" placeholder="Your Message" required class="form-textarea"></textarea>
            </div>
            <button type="submit" class="submit-button">Submit</button>
          </form>
  
          <div v-if="messages.length" class="message-list">
            <h3 class="message-title">Messages</h3>
            <ul>
              <li v-for="(message, index) in messages" :key="index" class="message-item">
                <strong>{{ message.name }}</strong>: 
                <p>{{ message.message }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Resources",
    data() {
      return {
        resources: [
          { link: "https://ph.pinterest.com/i_mahman/dark-blue-vibes/" },
          { link: "https://resourceboy.com/textures/cloud-textures/" },
        ],
        newMessage: { name: "", message: "" },
        messages: [],
      };
    },
    methods: {
      addMessage() {
        this.messages.push({ ...this.newMessage });
        this.newMessage.name = "";
        this.newMessage.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  @import "../assets/mystyle.css";
  @import "../assets/resources.css";
  </style>
  