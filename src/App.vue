<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer />
      <v-toolbar-title v-text="'Vue.jsで作図する 凸レンズの焦点問題'" />
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-row justify="center" class="mt-8">
        <v-col cols="6">
          <v-slider
            label="LIGHT_HEIGHT"
            v-model="LIGHT_HEIGHT"
            max="30"
            min="1"
            :thumb-size="24"
            thumb-label="always"
          />
          <v-slider
            label="LIGHT_POS_X"
            v-model="LIGHT_POS_X"
            :max="FOUCUS_POS_X1"
            min="10"
            :thumb-size="24"
            thumb-label="always"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90vw"
            height="70vh"
            id="drawing-area"
          >
            <ellipse
              cx="50%"
              cy="50%"
              rx="3%"
              ry="40%"
              fill="white"
              stroke="black"
            />
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke-width="1%"
              stroke="#455A64"
            />
            <circle
              :cx="`${FOUCUS_POS_X1}%`"
              cy="50%"
              r="1%"
              fill="#E0E0E0"
              stroke="black"
            />
            <circle
              :cx="`${FOUCUS_POS_X2}%`"
              cy="50%"
              r="1%"
              fill="#E0E0E0"
              stroke="black"
            />
          </svg>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  ref
} from "@vue/composition-api";
import { draw } from "@/utils/draw";

// 焦点距離
const FOUCUS_POS_X1 = 40;
const FOUCUS_POS_X2 = 100 - FOUCUS_POS_X1;

export default defineComponent({
  setup() {
    // 光源
    const LIGHT_HEIGHT = ref(10);
    const LIGHT_POS_X = ref(20);
    const LIGHT_POS_Y = ref(50 - LIGHT_HEIGHT.value);

    // 初回描画
    onMounted(() => {
      draw(
        FOUCUS_POS_X1,
        LIGHT_POS_X.value,
        LIGHT_POS_Y.value,
        LIGHT_HEIGHT.value
      );
    });

    /**
     * すでにある子要素を削除しデータ更新
     */
    const update = () => {
      // 子要素削除
      const childElements = document.querySelectorAll("#child");
      childElements.forEach(child => {
        child.remove();
      });

      // データ更新
      LIGHT_POS_Y.value = 50 - LIGHT_HEIGHT.value;
    };

    // 再描画
    onUpdated(() => {
      update();
      draw(
        FOUCUS_POS_X1,
        LIGHT_POS_X.value,
        LIGHT_POS_Y.value,
        LIGHT_HEIGHT.value
      );
    });

    return {
      FOUCUS_POS_X1,
      FOUCUS_POS_X2,
      LIGHT_HEIGHT,
      LIGHT_POS_X,
      LIGHT_POS_Y
    };
  }
});
</script>

<style lang="scss" scoped>
#drawing-area {
  background-color: #b2dfdb;
}
</style>
