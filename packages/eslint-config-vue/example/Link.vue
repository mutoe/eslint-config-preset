<template>
  <!-- ala -->
  <h1>About</h1>
  <p>Example of app using <code>vite-plugin-ssr</code>.</p>
  {{ fun({ a }) }}
</template>

<script>
export const documentProps = {
  title: 'This is page title',
}
</script>

<script setup>
import { ref } from 'vue'

function fun () {
  console.log(11)
  return ''
}

const a = ref(1)
</script>

<style lang="stylus">
code
  font-family monospace
  border-radius 4px
  background-color #eaeaea
  padding 3px 5px

</style>
