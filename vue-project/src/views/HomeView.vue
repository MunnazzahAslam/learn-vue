<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <Hero title="Become an angular dev" subtitle="Find the Angular job that fits your skills" />
  <HomeCards/>
  <JobListings :limit="3"/>
</template>
