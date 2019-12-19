<template>
  <div>
      <label>nome</label> 
      <input :value="name" @input="$emit('update:name', $event.target.value)"><br/>
      <label>value</label> 
      <input :value="value" @input="$emit('update:value', $event.target.value)">
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
  props: ['name', 'value'],
}
</script>

<style scoped>
</style>
