<template>
  <el-button
    type='success'
    @click='copyLink()'
    size='small'
    class="copy-btn"
  >
    <span class="display-ellipsis --1">Copy the link</span>
  </el-button>
</template>

<script>
export default {
  name: 'CopyLink',
  methods: {
    copyLink() {
      let url = this.$config.portal_url + this.$router.currentRoute.fullPath;  // current url
      let inputNode = document.createElement('input');  // create a new input
      inputNode.value = url;  // set the value to the url
      document.body.appendChild(inputNode);
      inputNode.select();
      document.execCommand('copy');   // call to execute the browser copy command
      inputNode.className = 'oInput';
      inputNode.style.display = 'none';   // hide the input
      this.$message.success('copied');
    }
  }
}
</script>

<style scoped lang="scss">
.copy-btn {
  border: none;
}
</style>