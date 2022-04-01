<template>
  <el-form
    :model="numberValidateForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      label="age"
      prop="age"
    >
      <el-input
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>