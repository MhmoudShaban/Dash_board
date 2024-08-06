<template>
  <v-container>
    <v-form @submit.prevent="addItem">
      <v-text-field v-model="item.name" label="Name" required></v-text-field>
      <v-text-field
        v-model="item.calories"
        label="Calories"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Add Item</v-btn>
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
    };
  },
  methods: {
    addItem() {
      eventBus.emit("add-item", this.item);
      this.$router.push({ name: "Dash_Profile" });
    },
  },
};
</script>
