<script lang="ts">

  export let profiles = [
    {
      image: "/amschel.jpg",
      title: "Amschel",
      description: "Front-End & WEB3-Dev",
      link: "https://myprofile-puce.vercel.app/"
    },
    {
      image: "/osuwo.png",
      title: "Osuwo",
      description: "Description for Person Two",
      link: "https://example.com/person-two"
    },
    {
      image: "/image3.jpeg",
      title: "Person Three",
      description: "Description for Person Three",
      link: "https://example.com/person-three"
    },
    {
      image: "/image4.jpeg",
      title: "Person Four",
      description: "Description for Person Four",
      link: "https://example.com/person-four"
    },
    {
      image: "/image5.jpeg",
      title: "Person Five",
      description: "Description for Person Five",
      link: "https://example.com/person-five"
    },
    {
      image: "/image6.jpeg",
      title: "Person Six",
      description: "Description for Person Six",
      link: "https://example.com/person-six"
    },

  ];
</script>

<section class="bg-emerald-900 text-white py-12  px-6">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8 hero-text">Hall Of Fame</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each profiles as profile (profile.link)}
        <div class="relative group">
          <a href={profile.link} target="_blank" rel="noopener noreferrer" class="block">
            <img 
              src={profile.image} 
              alt={profile.title} 
              class="w-full aspect-square rounded-full border-4 border-emerald-500 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-emerald-800 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
              <div class="text-center px-2">
                <h3 class="text-sm md:text-base lg:text-lg truncate font-semibold leading-tight">{profile.title}</h3>
                <p class="text-xs md:text-sm text-gray-300 mt-1 lg:mt-2 leading-snug">{profile.description}</p>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .hero-text {
    text-shadow: 0 0 10px #00ff0064; 
  }
</style>
