<script>
    import "../app.css";
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";
  </script>
 
<div class="flex flex-col min-h-screen bg-emerald-900 ">
  <Header />

  <main class="flex-1">
    <slot /> 
  </main>

  <Footer />
</div>