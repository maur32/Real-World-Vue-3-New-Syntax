<script setup>
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'
import { ref,onMounted } from 'vue'


onMounted(()=>{
  EventService.getEvents()
  .then((response)=> {
    events.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})

const events = ref(null)
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
