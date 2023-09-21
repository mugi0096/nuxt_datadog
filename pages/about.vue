<script setup>
const handleClickNormalBUtton = () => {
  alert('Hello World!')
}

const handleClickErrorBUtton = () => {
  throw new Error('エラーが発生しました')
}
</script>

<template>
  <div>
    <h1 class="text-lg font-bold">About</h1>
    <p class="mt-2 text-sm">このページでインタラクションを実装</p>
    <div class="flex flex-col">
      <button 
      class="mt-2 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
      @click="handleClickNormalBUtton">
      普通のボタン
    </button>
    <button
      class="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      @click="handleClickErrorBUtton">
      エラーボタン
    </button>
    <button
      class="mt-2 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
    >
      何もできないボタン
    </button>
    </div>
  </div>
</template>