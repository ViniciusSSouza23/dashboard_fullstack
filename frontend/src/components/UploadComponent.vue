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
function fileToBlob(file) {
  const jsonData = JSON.stringify(file);
  return new Blob([jsonData], { type: "application/json" });
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      resolve(base64String);
    };
    reader.onerror = (error) => {
      console.error("Erro na leitura do arquivo:", error);
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

async function validateAndSend(files) {
  const blob = fileToBlob(files);
  console.log(files);
  const base64 = await fileToBase64(blob);
  props.sendArchive(base64);
}
</script>
