<script lang="ts">
    export let profiles = [
      {
        image: "/Osuwo.jpeg",
        title: "OsuwoJr",
        description: "Front-End & WEB3-Dev",
        link: "https://myprofile-puce.vercel.app/"
      },
      {
        image: "/image2.jpeg",
        title: "Person Two",
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
      {
        image: "/image7.jpeg",
        title: "Person Seven",
        description: "Description for Person Seven",
        link: "https://example.com/person-seven"
      },
      {
        image: "/image8.jpeg",
        title: "Person Eight",
        description: "Description for Person Eight",
        link: "https://example.com/person-eight"
      },
      {
        image: "/image9.jpeg",
        title: "Person Nine",
        description: "Description for Person Nine",
        link: "https://example.com/person-Nine"
      },
      {
        image: "/image10.jpeg",
        title: "Person Ten",
        description: "Description for Person Ten",
        link: "https://example.com/person-ten"
      },
    ];
  </script>
  
  <section class="bg-emerald-900 text-white py-12  px-6">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8 hero-text">Hall Of Fame</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {#each profiles as profile (profile.link)}
          <div class="relative group">
            <a href={profile.link} target="_blank" rel="noopener noreferrer" class="block">
              <img 
                src={profile.image} 
                alt={profile.title} 
                class="w-full aspect-square rounded-full border-4 border-emerald-500 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-emerald-800 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                <div class="text-center px-4">
                  <h3 class="text-lg font-semibold">{profile.title}</h3>
                  <p class="text-sm text-gray-300 mt-2">{profile.description}</p>
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
  