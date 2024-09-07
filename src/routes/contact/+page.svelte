<script lang="ts">
    // Optional: You can add functionality or form handling logic here
  </script>
  
  <style>
    /* Optional: Add custom styles if needed */
  </style>
  
  <div class="min-h-screen bg-emerald-900 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto p-6 bg-emerald-800 rounded-lg shadow-lg text-white">
      <h1 class="text-2xl font-semibold text-white mb-6">Contact Us</h1>
  
      <p class="text-base text-gray-300 mb-4">We’d love to hear from you! Feel free to reach out to us using the contact form below, or find our location on the map.</p>
      
      <!-- Contact Form Section -->
      <div class="mb-12">
        <h2 class="text-xl font-semibold text-white mb-4">Get in Touch</h2>
        <form action="/submit-form" method="POST" class="grid gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label for="name" class="text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" class="border  rounded-lg outline-none p-3 bg-white-900 text-white" required />
            </div>
            <div class="flex flex-col">
              <label for="email" class="text-gray-300 outline-none mb-2">Email</label>
              <input type="email" id="email" name="email" class="border outline-none  rounded-lg p-3 bg-white text-gray-900" required />
            </div>
          </div>
          <div class="flex flex-col">
            <label for="message" class="text-gray-300 mb-2">Message</label>
            <textarea id="message" 
            
            name="message" rows="4" class="border  rounded-lg p-3 bg-white outline-none text-gray-900" required></textarea>
          </div>
          <button type="submit" class="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300">Send Message</button>
        </form>
      </div>
  
      <!-- Location Map Section -->
      <div class="mb-12">
        <h2 class="text-xl font-semibold text-white mb-4">Our Location</h2>
        <div class="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13340.406486285683!2d36.7959646!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f166d29dcb3db%3A0x335a65b3b20a0de1!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1643704403032!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style="border:0;" 
            title="Map showing the location of Nairobi, Kenya"
            allowfullscreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
  
      <!-- Additional Contact Information -->
      <div>
        <h2 class="text-xl font-semibold text-white mb-4">Other Ways to Reach Us</h2>
        <div class="flex flex-col items-start space-y-4">
          <p class="text-base text-gray-300">Email: <a href="mailto:contact@tefro.tech" class="text-blue-400 hover:underline">contact@tefro.tech</a></p>
          <p class="text-base text-gray-300">Phone: <a href="tel:+1234567890" class="text-blue-400 hover:underline">+1 (234) 567-890</a></p>
          <p class="text-base text-gray-300">Address: 123 Main Street, Suite 456, Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  </div>
  