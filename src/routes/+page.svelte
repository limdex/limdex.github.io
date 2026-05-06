<script lang="ts">
  import Hero from '$components/sections/Hero.svelte';
  import About from '$components/sections/About.svelte';
  import Work from '$components/sections/Work.svelte';
  import Highlights from '$components/sections/Highlights.svelte';
  import Contact from '$components/sections/Contact.svelte';
  import { profile } from '$data/profile';
</script>

<svelte:head>
  <title>{profile.name} — Portfolio</title>
  <meta name="description" content="Portfolio of {profile.name} — selected work, projects, and contact." />
</svelte:head>

<Hero />
<About />
<Work />
<Highlights />
<Contact />
