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
              <!-- First Cols -->
              <v-col>
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
                  <v-card-sub-title class="ml-3 text-h6 tetx-weight">
                    Application
                  </v-card-sub-title>
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
              <!-- Seconed Cols -->
              <v-col>
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
                <!-- second -->
                <v-card class="info mt-7 ml-4" elevation="0">
                  <div>
                    <strong> Full Name</strong> :
                    <span> Alec M. Thompson</span>
                  </div>
                  <div>
                    <strong> Mobile</strong> :
                    <span> (44) 123 1234 123</span>
                  </div>
                  <div>
                    <strong> Location</strong> :
                    <span> USA</span>
                  </div>
                  <div>
                    <strong> Social</strong> :
                    <v-icon>mdi-facebook</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-instagram</v-icon>
                  </div>
                </v-card>
              </v-col>
              <!-- Third Cols -->
              <v-col>
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
          <v-row class="mt-12 mb-5">
            <v-col>
              <v-card class="mx-auto my-4" max-width="400">
                <img src="../assets/2.jpg" width="100%" contain />
                <v-card-title>Project 1</v-card-title>
                <v-card-subtitle>the First Project</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary">Preview</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="mx-auto my-4" max-width="400">
                <img src="../assets/2.jpg" width="100%" contain />
                <v-card-title>Project 3</v-card-title>
                <v-card-subtitle>the Second Project</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary">Preview</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="mx-auto my-4" max-width="400">
                <img src="../assets/2.jpg" width="100%" contain />
                <v-card-title>Project 3</v-card-title>
                <v-card-subtitle>the Third Project</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary">Preview</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-view",
  data() {
    return {
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
</style>
