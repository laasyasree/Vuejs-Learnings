<template>
  <div>
    <button @click="handleClick">Insert/Remove</button>
    <div v-if="show" ref="content">I am an element</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
      console.log(this.show, this.$refs.content);
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
