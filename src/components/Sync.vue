<template>
  <div>
      <label>input:</label> 
      <input :value="name" @input="$emit('update:name', $event.target.value)">
      <p>prop:{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Sync',
  data() {
    return {
        input: '' 
    }
  },
  props:['name'],
}
</script>

<style scoped>
</style>
