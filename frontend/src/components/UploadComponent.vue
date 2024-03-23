<template>
  <div class="upload-component">
    <el-upload
      :multiple="false"
      :auto-upload="false"
      drag
      :on-change="validateAndSend"
      accept=".csv, .xlsx"
    >
      <span class="material-symbols-outlined" style="font-size: 60px"> cloud_upload </span>
      <div class="el-upload__text">Arraste o arquivo ou <em>click para upload</em></div>
    </el-upload>
  </div>
</template>
<script setup>
const props = defineProps({
  sendArchive: {
    type: Function,
    required: true
  }
});

function transformToBlob(file) {
  if (file instanceof Blob) {
    return file;
  }

  return new Blob([file], { type: file.type });
}

function validateAndSend(files) {
  let archiveBlob = transformToBlob(files);

  props.sendArchive(archiveBlob);
}
</script>
