<template>
  <div>
    <!-- img -->
    <div class="up">
      <div class="container"></div>
      <div class="prof">
        <v-card>
          <!-- headder name & img -->
          <v-card-text class="d-flex justify-start">
            <img
              src="../assets/a.jpeg"
              width="100"
              height="100"
              alt=""
              style="border-radius: 10px"
            />
            <div class="ml-1 mt-3" style="">
              <v-card-title primary-title>Hi Mhmoud </v-card-title>
              <v-card-sub-title class="ml-4">
                CEO / Co-Founder
              </v-card-sub-title>
            </div>
          </v-card-text>
          <!-- All three Col -->
          <div class="mt-3 contains d-flex">
            <v-row>
              <!-- First Col -->
              <v-col cols="12" md="4">
                <v-card
                  title="Platform Setting"
                  subtitle="Account"
                  elevation="0"
                >
                  <v-card-text>
                    <v-switch
                      label="Email me when someone follows me"
                    ></v-switch>
                    <v-switch
                      label="Email me when someone answers on my post"
                    ></v-switch>
                    <v-switch
                      label="Email me when someone mentions me"
                    ></v-switch>
                  </v-card-text>
                </v-card>
                <v-card elevation="0">
                  <v-card-subtitle class="ml-3 text-h6 text-weight"
                    >Application</v-card-subtitle
                  >
                  <v-card-text>
                    <v-switch
                      label="Email me when someone follows me"
                    ></v-switch>
                    <v-switch
                      label="Email me when someone answers on my post"
                    ></v-switch>
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- Second Col -->
              <v-col cols="12" md="4">
                <!-- First -->
                <v-card elevation="0">
                  <div class="mt-3 d-flex justify-space-between align-center">
                    <div class="ml-3 text-h6">Profile Information</div>
                    <div class="mr-3">
                      <v-icon style="cursor: pointer"
                        >mdi-archive-edit-outline</v-icon
                      >
                    </div>
                  </div>
                  <v-card-text>
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </v-card-text>
                </v-card>
                <!-- Second -->
                <v-card class="info mt-7 ml-4" elevation="0">
                  <div>
                    <strong>Full Name</strong> : <span>Alec M. Thompson</span>
                  </div>
                  <div>
                    <strong>Mobile</strong> : <span>(44) 123 1234 123</span>
                  </div>
                  <div><strong>Location</strong> : <span>USA</span></div>
                  <div>
                    <strong>Social</strong> :
                    <v-icon>mdi-facebook</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-instagram</v-icon>
                  </div>
                </v-card>
              </v-col>
              <!-- Third Col -->
              <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="450" elevation="0">
                  <v-toolbar color="" elevation="0">
                    <v-btn icon="mdi-menu" variant="text"></v-btn>
                    <v-toolbar-title>Conversation</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon="mdi-magnify" variant="text"></v-btn>
                  </v-toolbar>
                  <v-list :items="items" lines="three" item-props>
                    <template v-slot:subtitle="{ subtitle }">
                      <div v-html="subtitle"></div>
                    </template>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <v-row class="mt-4">
            <v-col style="text-align: end">
              <v-btn color="primary" @click="goToShowAll">Show All</v-btn>
            </v-col>
          </v-row>
          <v-row class="mb-5">
            <v-col>
              <v-table class="custom-table">
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Calories</th>
                    <th class="text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>
                      <v-icon small @click="editItem(item, index)"
                        >mdi-pencil</v-icon
                      >
                      <v-icon small @click="deleteItem(index)"
                        >mdi-delete</v-icon
                      >
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/EventBus";
export default {
  name: "home-view",
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
      items: [
        { type: "subheader", title: "Today" },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Summer BBQ",
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
  methods: {
    goToShowAll() {
      this.$router.push({ name: "ShowAll" });
    },
    editItem(item, index) {
      // الدالة الخاصة بتعديل العنصر
      this.$router.push({ name: "edit", params: { item, index } });
    },
    deleteItem(index) {
      // الدالة الخاصة بحذف العنصر
      this.desserts.splice(index, 1);
    },
    updateItem({ item, index }) {
      // تحديث العنصر في القائمة
      this.$set(this.desserts, index, item);
    },
  },
  created() {
    eventBus.on("update-item", this.updateItem);
  },
  beforeMount() {
    eventBus.off("update-item", this.updateItem);
  },
};
</script>

<style scoped>
body {
  background-color: #f0f2f5;
}
.up {
  background-color: #ffffff;
  position: relative;
  width: 90%;
  height: 300px;
}
.container {
  margin: 20px 0 0 200px;
  overflow: hidden;
  position: absolute;
  border-radius: 20px;
  width: 95%;
  height: 300px;
  background-image: url("../assets/1.jpg");
  background-size: cover;
}
.prof {
  position: absolute;
  margin: 20px 0 0 200px;
  width: 85%;
  top: 250px;
  left: 5%;
  background: #ffffff;
  border-radius: 30px;
  overflow: hidden;
}
.contains > .v-card {
  background-color: #ffff !important;
}
.info > div {
  line-height: 3;
}
.info .v-icon {
  margin: 3px 5px;
  cursor: pointer;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  font-family: "Nunito Sans", sans-serif;
}

.custom-table th,
.custom-table td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #e0e0e0;
}

.custom-table th {
  background-color: #f9f9f9;
  font-weight: 700;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.custom-table tbody tr:hover {
  background-color: #e0e0e0;
}

.custom-table td {
  color: #3c4858;
}

.custom-table th {
  color: #3c4858;
}
</style>
