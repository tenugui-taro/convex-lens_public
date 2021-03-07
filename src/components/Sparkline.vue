<template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  PropType
} from "@vue/composition-api";

const GRADIENTS: string[][] = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default defineComponent({
  props: {
    value: Array as PropType<number[]>
  },
  setup(props) {
    const state = reactive({
      width: 2, // 線の太さ
      radius: 10, // 線同士のつながり 小さいほど角張る
      padding: 10, // 描画エリアの余白
      lineCap: "round", // 線端の形状
      gradient: GRADIENTS[5], // 配色
      value: props.value, // 値
      gradientDirection: "top", // グラデーションの方向
      fill: false, // グラフの塗りつぶし
      type: "trend", // グラフの種類 trend or line
      autoLineWidth: false // 自動で線を拡張してくれる？
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>
