<script setup lang="js">
import { supabase } from '@/lib/supabaseClient.js'
async function uploadFile(e) {
  let file = e.target.files[0]

  const { data, error } = await supabase.storage
    .from('degree_works_files')
    .upload('test/archivo_1.pdf', file)

  if (data) {
    console.log('File uploaded')
  } else {
    console.log('Error uploading file ' + error)
  }
}
</script>
<template>
  <main class="bg-red-600 h-20">
    <input type="file" @change="uploadFile" />
  </main>
</template>
