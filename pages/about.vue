<script setup>
import { datadogRum } from "@datadog/browser-rum";

const handleClickNormalButton = () => {
  alert("Hello World!");
};

const handleClickErrorButton = () => {
  throw new Error("エラーが発生しました");
};

const handleClickErrorStockButton = () => {
  const error = new Error("収集されるエラー");
  datadogRum.addError(error, { message: "エラーストックに収集されました" });
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-lg font-bold">About</h1>
    <p class="mt-2 text-sm">このページでインタラクションを実装</p>
    <div class="flex flex-col">
      <button
        class="mt-2 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
        @click="handleClickNormalButton"
      >
        普通のボタン
      </button>
      <button
        class="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        @click="handleClickErrorButton"
      >
        エラーボタン
      </button>
      <button
        class="mt-2 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
        @click="handleClickErrorStockButton"
      >
        エラーボタン(without console error)
      </button>
      <button
        class="mt-2 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
      >
        何もできないボタン
      </button>
    </div>
  </div>
</template>
