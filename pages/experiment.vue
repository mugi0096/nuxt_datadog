<script setup>
import { datadogRum } from "@datadog/browser-rum";

const isShow = ref(false);

setInterval(() => {
  isShow.value = !isShow.value;
}, 1500);

const handleClickErrorButton = () => {
  const error = new Error("You got trapped!");
  datadogRum.addError(error, { message: "罠に引っかかりました！" });
  throw error;
};
</script>

<template>
  <div class="experiment-page flex flex-col items-center">
    <h1 class="text-lg font-bold">Experiment</h1>
    <p class="mt-2 text-sm">このページでレイアウトシフトを確認</p>
    <div v-if="isShow" class="flex flex-col items-center">
      <button
        class="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        @click="handleClickErrorButton"
      >
        エラーボタン
      </button>
      <img
        src="../assets/bun-logo-square.png"
        alt="bun logo"
        height="600"
        width="600"
      />
    </div>
    <button
      class="mt-2 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
    >
      普通のボタン
    </button>
  </div>
</template>
