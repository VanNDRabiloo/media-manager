<template>
  <div class="upload-file">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-upload
        class="upload-demo"
        ref="elUpload"
        drag
        :auto-upload="false"
        multiple
        @change="inputChange"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <div class="el-upload__tip">Only files with a size less than 3MB.</div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" id="btnSave" @click="handleSave">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { mapActions } from "vuex";

export default {
  mounted() {
    window.addEventListener("click", () => {
      console.log("oke");
    });
  },
  methods: {
    /**
     * Mô tả : lấy các Action từ store
     * @param
     * @return
     * Created by: NDVan
     * Created date: 10:25 04/04/2022
     */
    ...mapActions("uploadFile", ["addFileName"]),

    /**
     * Mô tả : Khi input['file'] thay đổi thì gán url
     * @param
     * @return
     * Created by: NDVan
     * Created date: 10:25 04/04/2022
     */
    inputChange(e) {
      const name = e.name;
      this.file = e.target?.files[0];
    },

    /**
     * Mô tả : Dispatch Action: addFileName khi nhấn Save Btn
     * @param
     * @return
     * Created by: NDVan
     * Created date: 10:39 04/04/2022
     */
    handleSave() {
      if (this.file) {
        this.url = URL.createObjectURL(this.file);
        this.addFileName(this.url);
      }
    },
  },

  data() {
    return {
      file: "",
      url: "",
    };
  },
};
</script>
<style scoped>
@import url("../style/components/upload_file.css");
</style>
