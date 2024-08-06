<template>
  <v-container>
    <v-form @submit.prevent="saveItem">
      <v-text-field v-model="item.name" label="Name" required></v-text-field>
      <v-text-field
        v-model="item.calories"
        label="Calories"
        type="number"
        required
      ></v-text-field>
      <v-btn color="primary" type="submit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import eventBus from "@/EventBus";

export default {
  data() {
    return {
      item: {
        name: "",
        calories: "",
      },
      index: null,
    };
  },
  created() {
    if (this.$route.params.item && this.$route.params.index !== undefined) {
      this.item = { ...this.$route.params.item };
      this.index = this.$route.params.index;
    }
  },
  methods: {
    saveItem() {
      // تحديث العنصر في القائمة الرئيسية
      eventBus.emit("update-item", { item: this.item, index: this.index });
      // إعادة التوجيه بعد الحفظ
      this.$router.push({ name: "Dash_Profile" });
    },
  },
};
</script>
