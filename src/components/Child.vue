<template lang="html">
  <v-row>
    <v-divider></v-divider>
  <button type="button" @click='passEvent'> Update me</button>
    <v-divider></v-divider>
  <div>
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-title" v-text="thecardtitle"></h5>
        <div v-if="parentmessage" class="card-text alert alert-warning" v-html="parentmessage"></div>
      </div>
    </div>
  </div>
  </v-row>
</template>

<script>
export default {
  name:'Child',
  props: ['parentmessage'],
  data() {
    return {
      thecardtitle: 'Child Component!',
    }
  },
  methods:{
    passEvent()
    {
      this.$emit('changeTitle','Parent updated ')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
