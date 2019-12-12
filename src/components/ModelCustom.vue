<template>
  <div>
      <label>input:</label> 
      <input :value="newValue" @input="$emit('custom:event', $event.target.value)">
      <p>prop:{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ModelCustom',
    props:['newValue'],
    model: {
       prop: 'newValue' ,
       event: 'custom:event',
    },
  data() {
    return {
        input: '' 
    }
  },
}
</script>

<style scoped>
</style>
