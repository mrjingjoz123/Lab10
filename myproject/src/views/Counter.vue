<template>
  <div>
    <my-counter begin="1" @inc="inc" @dec="dec">
      Counter ของกบน้อย
      <template v-slot:dec>
        ลบ
      </template>
      <template v-slot:inc>
        บวก
      </template>
    </my-counter>
  </div>
</template>

<script>
import MyCounter from '../components/MyCounter.vue'
export default {
  data () {
    return {}
  },
  methods: {
    inc: function (number) {
      console.log('Counter view inc' + number)
    },
    dec: function (number) {
      console.log('Counter view dec' + number)
    }
  },
  components: {
    'my-counter': MyCounter
  }
}
</script>
