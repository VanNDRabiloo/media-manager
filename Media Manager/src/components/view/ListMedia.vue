<template lang="">
  <ul class="list-images" v-if="listFile.length > 0">
    <li v-for="(item, index) in listFile" :key="index" class="img-wrap">
      <img :src="item" />
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ListMedia",

  computed: {
    ...mapState("uploadFile", ["listFile"]),
  },
};
</script>
<style>
@import url("../style/components/list_media.css");
</style>
