<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from "axios";

export default({
  name: "promises",
  data () {
    return {
      message: null
    }
  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.message = response))
        .catch(error => console.log(error))
  }
})
</script>
