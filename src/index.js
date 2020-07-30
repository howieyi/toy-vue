import ToyVue from "./ToyVue";

console.log(ToyVue);

new ToyVue({
  el: "#app",
  data: {
    text: "hello world",
  },
});
