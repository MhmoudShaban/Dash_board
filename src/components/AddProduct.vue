<template>
  <v-container class="my-5">
    <v-card class="mx-auto">
      <v-card-title>
        <span class="mt-5 headline" style="color: #444">Add New Product</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="saveProduct">
          <v-text-field
            v-model="product.productId"
            label="Product ID"
            required
            outlined
            class="mb-4"
          ></v-text-field>
          <v-text-field
            v-model="product.productName"
            label="Product Name"
            required
            outlined
            class="mb-4"
          ></v-text-field>
          <v-textarea
            v-model="product.description"
            label="Description"
            rows="3"
            outlined
            class="mb-4"
            no-resize
          ></v-textarea>
          <v-text-field
            v-model="product.price"
            label="Price"
            type="number"
            step="0.01"
            required
            outlined
            class="mb-4"
          ></v-text-field>
          <v-btn
            type="submit"
            color="primary"
            size="x-large"
            block
            :loading="loading"
            >Save</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title
          class="headline d-flex flex-column justify-center align-center"
        >
          <div class="mt-4">
            <v-icon color="success" size="80">mdi-check-circle-outline</v-icon>
          </div>
          <div><span class="ml-3">Product Added Successfully!</span></div>
        </v-card-title>
        <v-card-actions class="mt-6 d-flex justify-center">
          <v-btn color="primary" @click="addNewProduct">Add New</v-btn>
          <v-btn color="secondary" @click="goBack">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    product: {
      productId: "",
      productName: "",
      description: "",
      price: 0,
    },
    loading: false,
    dialog: false,
  }),
  methods: {
    async saveProduct() {
      this.loading = true;
      // Simulate a delay for loading
      setTimeout(() => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(this.product);
        localStorage.setItem("products", JSON.stringify(products));
        this.loading = false;
        this.dialog = true;
      }, 1000);
    },
    addNewProduct() {
      this.dialog = false;
      this.product = {
        productId: "",
        productName: "",
        description: "",
        price: 0,
      };
    },
    goBack() {
      this.dialog = false;
      this.$router.push({ name: "Dash_Profile" });
    },
  },
};
</script>

<style scoped>
.headline {
  font-weight: bold;
  font-size: 1.5rem;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-btn {
  font-weight: bold;
  font-size: 1.1rem;
}

.v-card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.v-card-text p {
  font-size: 1rem;
  color: #555;
}
</style>
