<template>
  <v-container max-width="">
    <v-row>
      <v-col cols="12">
        <div class="image">
          <div class="text_div">
            <h5 class="shop-title">
              Shop cheap
              <span class="sale-badge">Sale up to 40%</span>
            </h5>
            <h3 class="adventure-title">Backpacks for your next adventure</h3>
            <h2 class="offer-title">{{ displayText }}</h2>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <h2
        class="underline-text"
        style="
          padding: 10px;
          margin-top: 20px;
          font-weight: bold;
          color: #3c4858;
          text-transform: capitalize;
        "
      >
        Show Products
      </h2>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="3"
        md="6"
        sm="6"
        xs="12"
        v-for="product in sortedProducts"
        :key="product.id"
      >
        <v-card
          :disabled="product.loading"
          :loading="product.loading"
          class="mx-auto my-12"
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            :src="product.image"
            height="250"
            class="animated-phone"
            cover
          ></v-img>

          <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <v-row
              align="center"
              style="display: flex; justify-content: space-between"
              class="my-4"
            >
              <h3 class="ms-2">
                <template v-if="product.discount">
                  <span style="text-decoration: line-through"
                    >${{ product.price.toFixed(2) }}</span
                  >
                  <span style="color: red"
                    >${{ product.discount.toFixed(2) }}</span
                  >
                </template>
                <template v-else> ${{ product.price.toFixed(2) }} </template>
              </h3>
              <span
                class="me-2"
                style="
                  font-size: 11px !important;
                  color: #fff;
                  background-color: #28a745;
                  display: inline-block;
                  padding: 0.25em 0.4em;
                  font-weight: 700;
                  line-height: 1;
                  text-align: center;
                  white-space: nowrap;
                  vertical-align: baseline;
                  border-radius: 0.25rem;
                  transition: color 0.15s ease-in-out,
                    background-color 0.15s ease-in-out,
                    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                "
                >In stock</span
              >
            </v-row>

            <div
              style="
                margin-top: 15px !important;
                margin-bottom: 0 !important;
                text-align: left;
                color: #8492a6;
                line-height: 1.7;
                font-size: 14px;
                font-weight: 400;
                font-family: 'Open Sans', sans-serif;
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              mollitia?
            </div>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="Add to Cart"
              style="text-transform: none"
              block
              border
              @click="reserve(product.id)"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data: () => ({
    offerText: "Hurry up! Limited time offer.",
    displayText: "",
    index: 0,
    typingSpeed: 100,
    deletingSpeed: 50,
    kl: [
      {
        id: 1,
        image: require("../assets/1.png"),
        title: "Cafe Badilico",
        price: 60.0,
        discount: 50.0,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 2,
        image: require("../assets/2.png"),
        title: "Another Item",
        price: 80.0,
        discount: null,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 3,
        image: require("../assets/3.png"),
        title: "Another Item",
        price: 80.0,
        discount: null,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 4,
        image: require("../assets/4.png"),
        title: "Third Item",
        price: 100.0,
        discount: 90.0,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 5,
        image: require("../assets/5.png"),
        title: "Cafe Badilico",
        price: 60.0,
        discount: 50.0,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 6,
        image: require("../assets/6.png"),
        title: "Third Item",
        price: 100.0,
        discount: 90.0,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 7,
        image: require("../assets/7.png"),
        title: "Third Item",
        price: 100.0,
        discount: 90.0,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
      {
        id: 8,
        image: require("../assets/8.png"),
        title: "Third Item",
        price: 200.0,
        discount: 80.0,
        inStock: true,
        loading: false, // إضافة خاصية loading
      },
    ],

    loading: false,
    selection: 1,
  }),

  computed: {
    sortedProducts() {
      return [...this.kl].sort((a, b) =>
        a.discount && !b.discount ? -1 : !a.discount && b.discount ? 1 : 0
      );
    },
  },
  methods: {
    reserve(productId) {
      const product = this.kl.find((p) => p.id === productId);
      if (product) {
        product.loading = true;

        setTimeout(() => (product.loading = false), 2000);
      }
    },
    typeText() {
      if (this.index < this.offerText.length) {
        this.displayText += this.offerText.charAt(this.index);
        this.index++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        setTimeout(this.deleteText, 2000);
      }
    },
    deleteText() {
      if (this.index > 0) {
        this.displayText = this.displayText.substring(
          0,
          this.displayText.length - 1
        );
        this.index--;
        setTimeout(this.deleteText, this.deletingSpeed);
      } else {
        setTimeout(this.typeText, 2000);
      }
    },
  },
  mounted() {
    this.typeText();
  },
};
</script>

<style scoped>
.about {
  padding: 20px;
}
.image {
  background-image: url("../assets/9.jpg");
  background-size: cover;
  width: 100%;
  background-color: #8a8a82;
  height: 300px;
}
.text_div {
  padding-left: 1.5rem;
  text-align: left;
  align-items: center;
  padding-top: 56px;
}

.shop-title {
  font-size: 1.1rem;
  line-height: 1.4;
  color: #3c4858;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: "Nunito Sans", sans-serif;
}

.sale-badge {
  margin-left: 1rem;
  font-size: 0.75rem;
  color: #fff;
  background-color: #28a745;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.adventure-title {
  margin-bottom: 1.5rem;
  line-height: 1.4;
  color: #3c4858;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.75rem;
}

.offer-title {
  line-height: 1.4;
  color: #dc3545;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
}

@media (max-width: 768px) {
  .text_div {
    padding-left: 1rem;
    padding-top: 40px;
  }

  .shop-title {
    font-size: 1rem;
  }

  .adventure-title {
    font-size: 1.5rem;
  }

  .offer-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .text_div {
    padding-left: 0.5rem;
    padding-top: 30px;
  }

  .shop-title {
    font-size: 0.9rem;
  }

  .adventure-title {
    font-size: 1.25rem;
  }

  .offer-title {
    font-size: 1rem;
  }
}
@keyframes rotatePhone {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animated-phone {
  animation: rotatePhone 7s infinite;
}
.offer-title {
  font-size: 2em;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  color: #dc3545;

  border-right: 0.15em solid black;
  animation: typing 3.5s steps(50, end), blink 0.75s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 25%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
.underline-text {
  position: relative;
  display: inline-block;
}

.underline-text::after {
  content: "";
  position: absolute;
  left: 10px;
  bottom: 0;
  height: 2px;
  width: 93%;
  background-color: #dc3545;
  border-radius: 2px;
}
</style>
