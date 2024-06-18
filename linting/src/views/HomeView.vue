<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      some-prop="Something"
      v-html="name"
      @on-click="() => onClick('asd')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // interface ISomeObj {

// interface ISomeObj {
//   [key: string]: any;
// }

type ISomeObj = Record<string, any>;

interface IName {
  value: string;
  categoryIdList: Array<number>;
  categoryId: number;
  isRequired: boolean;
}

const isShow = false;

const _mustShow = (): boolean => isShow;

function adapterSome(someArr: Array<any>): Array<any> {
  return someArr;
}

function adapterS1(someArr: Array<any>): Array<any> {
  return someArr;
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  name: IName = {
    categoryId: 123,
    categoryIdList: [123],
    isRequired: false,
    value: "",
  };

  isShow = false;

  someObject: { [key: string]: any; name: string; } = {
    name: "sadasd",
  };

  get nameWithHello(): IName {
    return this.name;
  }

  get isNameExist(): boolean {
    return Boolean(this.name.value);
  }

  async beforeMount(): Promise<void> {
    this.name.categoryId = Math.random() * 100;

    if (!!this.name.value) this.name.categoryId = 1;
    this.name.categoryId = this.isShow
      ? 0
      : 1;
  }

  onClick(msg: string): void {
    // eslint-disable-next-line no-console
    console.log("%c msg", "color: red", msg);

    if (Boolean(msg)) {
      // eslint-disable-next-line no-console
      console.log("%c msg", "color: red", msg);
      // eslint-disable-next-line no-console
      console.log("%c asdasd", "color: red");
    }
  }
}
</script>
