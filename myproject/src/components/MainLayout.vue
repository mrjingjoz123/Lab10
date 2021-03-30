<template>
  <b-container fluid>
    <b-row>
      <b-col><Header></Header></b-col>
    </b-row>
    <b-row>
      <b-col cols="2"><Menu></Menu></b-col>
      <b-col><router-view></router-view></b-col>
    </b-row>
  </b-container>
</template>
<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
  components: {
    Header,
    Menu
  }
}
</script>
