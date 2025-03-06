<template>
  <div>
    <!-- Navigation -->
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

    <!-- Resources Section -->
    <div>
      <h2 class="resources-title">Resources</h2>
      <ul class="resources-list">
        <li v-for="(resource, index) in resources" :key="index">
          <a :href="resource.link" target="_blank">{{ resource.name }}</a>
        </li>
      </ul>
    </div>

    <!-- Guestbook Form -->
    <div id="guestbook-app">
      <h2 class="guestbook-title">Guestbook</h2>
      <form @submit.prevent="addMessage" class="guestbook-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="newMessage.name"
            placeholder="Your Name"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="newMessage.message"
            placeholder="Your Message"
            required
            class="form-textarea"
          ></textarea>
        </div>
        <button type="submit" class="submit-button" :disabled="loading">
          {{ loading ? "Submitting..." : "Submit" }}
        </button>
      </form>

      <!-- Messages Display -->
      <div v-if="messages.length" class="message-list">
        <h3 class="message-title">Messages</h3>
        <ul>
          <li v-for="(message, index) in messages" :key="index" class="message-item">
            <strong>{{ message.name }}:</strong>
            <span class="message-text">{{ message.message }}</span>
            <span class="message-date">{{ formatDate(message.created_at) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { supabase } from "../lib/supabase";

export default {
  name: "Resources",
  data() {
    return {
      resources: [
        { name: "Dark Blue Vibes - Pinterest", link: "https://ph.pinterest.com/i_mahman/dark-blue-vibes/" },
        { name: "Cloud Textures - Resource Boy",  link: "https://resourceboy.com/textures/cloud-textures/" },
        { name: "Google Gemini Guestbook Sample", link: "https://g.co/gemini/share/6c116529942e"}
      ],
      newMessage: { name: "", message: "" },
      messages: [],
      loading: false,
    };
  },
  async created() {
    await this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error.message);
      } else {
        this.messages = data;
      }
    },
    async addMessage() {
      if (!this.newMessage.name || !this.newMessage.message) return;
      
      this.loading = true; // Disable button while submitting

      const { data, error } = await supabase.from("guestbook").insert([
        {
          name: this.newMessage.name,
          message: this.newMessage.message,
        },
      ]).select("*");

      this.loading = false; // Re-enable button after submitting

      if (error) {
        console.error("Error inserting message:", error.message);
      } else {
        this.messages.unshift(data[0]); // Add new message to top of list
        this.newMessage.name = "";
        this.newMessage.message = "";
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString(); // Format timestamp into readable text
    }
  },
};
</script>

<style scoped>
@import "../assets/mystyle.css";
@import "../assets/resources.css";
</style>
