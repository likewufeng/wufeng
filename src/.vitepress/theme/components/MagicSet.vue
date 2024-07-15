
<template>
  <a-drawer :title="titleMap[handleType]" :size="`small`" :open="open" @close="onClose">
    <template #extra>
      <a-button type="primary" @click="onSubmit">恢复默认配置</a-button>
    </template>
    <!-- <a-form
      ref="formRef"
      name="custom-validation"
      :model="formData"
      :rules="rules"
      v-bind="{
        labelCol: { span: 3 },
        // wrapperCol: { span: 14 },
      }"
    >
    <a-form-item has-feedback label="项目名称" name="name">
      <a-input v-model:value="formData.name" placeholder="请输入项目名称" />
    </a-form-item>
  </a-form> -->
  <a-divider>主题色</a-divider>
  <a-divider>鼠标样式</a-divider>
  <a-divider>背景特效</a-divider>
  <a-divider>点击特效</a-divider>
  </a-drawer>
</template>

<script setup name="SettingDrawer">
import { ref, defineExpose, toRaw } from 'vue'
const open = ref(false)
const titleMap = {
  'setting': '网站配置'
}
const handleType = ref('setting')

const formRef = ref(null)
const rules = {
  name: [{ required: true, message: '请输入项目名称', trigger: 'change' }]
}
const formData = ref({
  name: '',
  desc: ''
})

const onShow = ({ type = 'setting', row = {} }) => {
  handleType.value = type
  formData.value = JSON.parse(JSON.stringify(row))
  open.value = true
}

const onClose = () => {
  open.value = false
}

const onSubmit = () => {
}

defineExpose({
  onShow
})
</script>

<style lang="scss" scoped>
</style>

