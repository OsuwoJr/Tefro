<script lang="ts">
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-emerald-900 text-white py-4 px-6 flex items-center justify-between md:justify-around lg:justify-between">
  <!-- Left Section: Icon and Title -->
  <div class="flex items-center space-x-4">
    <!-- Circle Icon with Outline -->
    <div class="relative flex items-center justify-center">
      <a href="/">
        <img 
        src="/icon.png" 
        alt="Icon" 
        class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-emerald-500 object-cover"
      />

      </a>
      
    </div>
    <h1 class="text-2xl font-bold">Tefro</h1>
  </div>

  <!-- Center Section: Navigation Links for Desktop -->
  <nav class="hidden md:flex flex-grow justify-center space-x-6">
    {#each ['Newsletter', 'Forum', 'Gateway', 'Agency'] as link}
      <a href="#" class="text-white hover:text-emerald-100 border border-emerald-500 hover:border-emerald-100 px-4 py-2 rounded transition-all duration-300">{link}</a>
    {/each}
  </nav>

  <!-- Right Section: Buttons -->
  <div class="flex space-x-4">
    <button class="bg-gray-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2">
      <span>Get Involved</span>
      <span role="img" aria-label="Get Involved">🚀</span>
    </button>
    <button class="bg-transparent border border-emerald-500 text-white px-6 py-2 rounded-full shadow-md hover:border-emerald-100 hover:bg-emerald-800 transition-all duration-300 flex items-center space-x-2">
      <span>Partner with Us</span>
      <span role="img" aria-label="Partner with Us">🤝</span>
    </button>
  </div>

  <!-- Mobile Menu Toggle Button -->
  <button class="md:hidden text-white focus:outline-none" on:click={toggleMenu}>
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>

  <!-- Mobile Navigation Menu -->
  {#if isMenuOpen}
    <div class="fixed inset-0 bg-emerald-900 text-white flex flex-col items-center justify-center space-y-6 md:hidden">
      <!-- Close Button -->
      <button class="text-white bg-emerald-700 hover:bg-emerald-800 rounded-full p-3 border-2 border-emerald-500 shadow-glow hover:shadow-lg transition-all duration-300 mb-6" on:click={toggleMenu}>
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <!-- Navigation Links -->
      <div class="flex flex-col items-center space-y-6">
        {#each ['Newsletter', 'Forum', 'Gateway', 'Agency'] as link}
          <a href="#" class="text-white hover:text-emerald-100 border border-emerald-500 hover:border-emerald-100 px-6 py-2 rounded transition-all duration-300">{link}</a>
        {/each}
      </div>
    </div>
  {/if}
</header>
