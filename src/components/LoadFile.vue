<script setup lang="js">
import { supabase } from '@/lib/supabaseClient.js'
async function uploadFile(e) {
  let file = e.target.files[0]
  const filePath = 'test/archivo_1.pdf'

  try {
    const { data, error } = await supabase.storage
      .from('degree_works_files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (data) {
      console.log('File uploaded')
    } else {
      console.log('Error uploading file ' + error)
    }
  } catch (error) {
    console.log('Error general:' + error)
  }
}
</script>
<template>
  <main class="bg-red-600 h-20">
    <input type="file" @change="uploadFile" />
  </main>
</template>
