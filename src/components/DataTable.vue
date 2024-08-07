<template>
  <v-data-table
    :headers="headers"
    :items="filteredProducts"
    :sort-by="[{ key: 'productId', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-container>
        <v-row align="center">
          <v-col class="d-flex justify-end">
            <v-text-field
              style="height: 60px"
              :loading="loading"
              density="compact"
              v-model="search"
              single-line
              hide-details
              append-inner-icon="mdi-magnify"
              variant="solo"
              label="Search Product"
              class="mr-4"
            ></v-text-field>
          </v-col>
          <v-col cols="auto">
            <v-dialog v-model="dialog" max-width="650">
              <template v-slot:activator="{ props }">
                <v-btn
                  size="large"
                  class="mb-2"
                  color="primary"
                  dark
                  v-bind="props"
                  @click="goToNewProduct"
                >
                  New Product
                </v-btn>
              </template>
              <v-card>
                <v-card-title
                  class=""
                  style="background-color: #2a73c5; color: #fff"
                >
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editedItem.productId"
                          label="Product ID"
                          :disabled="editedIndex > -1"
                          outlined
                          dense
                          shaped
                          placeholder="Enter Product ID"
                          class="custom-text-field"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editedItem.productName"
                          label="Product Name"
                          outlined
                          dense
                          shaped
                          placeholder="Enter Product Name"
                          class="custom-text-field"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="editedItem.description"
                          label="Description"
                          rows="4"
                          outlined
                          dense
                          shaped
                          placeholder="Enter Description"
                          class="custom-textarea"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editedItem.price"
                          label="Price"
                          type="number"
                          step="0.01"
                          outlined
                          dense
                          shaped
                          placeholder="Enter Price"
                          class="custom-text-field"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="outlined"
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn color="blue-darken-1" variant="outlined" @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title
                  style="
                    background-color: #dc3545;
                    color: #fff;
                    font-weight: 500;
                  "
                  class="text-h5"
                  >Confirm Deletion</v-card-title
                >
                <v-card-text>
                  <p>
                    Are you sure you want to delete this product? This action
                    cannot be undone.
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" @click="closeDelete">Cancel</v-btn>
                  <v-btn color="red" @click="deleteItemConfirm">Delete</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <!-- eslint-disable-next-line vue/valid-v-slot -->
    <template v-slot:item.actions="{ item }">
      <div class="d-flex ga-3">
        <v-icon
          size="x-large"
          class="mr-2 edit-icon"
          color="primary"
          @click="editItem(item)"
        >
          mdi-archive-edit-outline
        </v-icon>
        <v-icon
          class="delete-icon"
          color="danger"
          size="large"
          @click="deleteItem(item)"
        >
          mdi-trash-can
        </v-icon>
      </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: "", // Add search field
    headers: [
      { title: "Product ID", key: "productId" },
      { title: "Product Name", key: "productName" },
      { title: "Description", key: "description" },
      { title: "Price", key: "price" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      productId: "",
      productName: "",
      description: "",
      price: 0,
    },
    defaultItem: {
      productId: "",
      productName: "",
      description: "",
      price: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
    filteredProducts() {
      const search = this.search.toLowerCase();
      return this.products.filter(
        (product) =>
          product.productId.toLowerCase().includes(search) ||
          product.productName.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.price.toString().includes(search)
      );
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      const storedProducts = JSON.parse(localStorage.getItem("products"));

      if (storedProducts && storedProducts.length > 0) {
        this.products = storedProducts;
      } else {
        const defaultProducts = [
          {
            productId: "P001",
            productName: "Product A",
            description: "Description for Product A",
            price: 10.0,
          },
          {
            productId: "P002",
            productName: "Product B",
            description: "Description for Product B",
            price: 15.0,
          },
          {
            productId: "P003",
            productName: "Product C",
            description: "Description for Product C",
            price: 20.0,
          },
          {
            productId: "P004",
            productName: "Product D",
            description: "Description for Product D",
            price: 25.0,
          },
          {
            productId: "P005",
            productName: "Product E",
            description: "Description for Product E",
            price: 30.0,
          },
          {
            productId: "P006",
            productName: "Product F",
            description: "Description for Product F",
            price: 35.0,
          },
          {
            productId: "P007",
            productName: "Product G",
            description: "Description for Product G",
            price: 40.0,
          },
          {
            productId: "P008",
            productName: "Product H",
            description: "Description for Product H",
            price: 45.0,
          },
          {
            productId: "P009",
            productName: "Product I",
            description: "Description for Product I",
            price: 50.0,
          },
        ];

        this.products = defaultProducts;

        localStorage.setItem("products", JSON.stringify(defaultProducts));
      }
    },

    goToNewProduct() {
      this.$router.push({ name: "AddProduct" });
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1);
      localStorage.setItem("products", JSON.stringify(this.products));
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // Update existing item
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        // Add new item
        this.products.push(this.editedItem);
      }
      // Save to localStorage
      localStorage.setItem("products", JSON.stringify(this.products));
      this.close();
    },
  },
};
</script>

<style scoped>
.v-toolbar-title {
  flex: 1;
}
.hover-scale:hover {
  transform: scale(1.2);
  transition: transform 0.2s;
}
.edit-icon:hover,
.delete-icon:hover {
  transform: scale(1.2);
  transition: transform 0.2s, color 0.2s;
}
.edit-icon:hover {
  color: #1e88e5;
}
.delete-icon:hover {
  color: #e53935;
}
</style>
