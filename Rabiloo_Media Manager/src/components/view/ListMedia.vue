<template lang="">
  <ul class="List-images" v-if="listFile.length > 0">
    <li v-for="(item, index) in listFile" :key="index" class="img-wrap">
      <img :src="item" />
    </li>
  </ul>
</template>
<script>
export default {
  name: "ListMedia",
  methods: {
    /**
     * Mô tả: Thêm url vào listFile để render UI
     * CreatedBy: VanND (01/04/2022)
     */
    changeFile(e) {
      const name = e.target.name,
        file = e.target.files[0];
      const hasName = ["file"].includes(name);
      if (hasName && file) {
        this[name] = file;
        this.url = URL.createObjectURL(file);
        this.listFile.push(this.url);
      } else {
        console.log("error");
      }
    },
  },
  data() {
    return {
      file: "",
      listFile: [],
      url: "",
    };
  },
  watch: {
    file(val) {
      console.log(val);
    },
  },
};
</script>
<style></style>

