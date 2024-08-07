<template>
  <v-app>
    <v-navigation-drawer
      app
      color="blue"
      class="px-0"
      permanent
      v-model="drawer"
      rail
      expand-on-hover
    >
      <div class="d-flex ml-1">
        <img
          src="../src/assets/a.jpeg"
          width="50px"
          height="50px"
          style="border-radius: 50%; margin-top: 30px"
          contain
        />
        <h2>Dashboard</h2>
      </div>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-group
          v-for="(group, index) in listItems"
          :key="index"
          v-model="group.active"
        >
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="group.icon">
              <v-list-item-content>
                <v-list-item-title>{{ group.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(item, i) in group.items"
            :key="i"
            :prepend-icon="item.icon"
            @click="navigateTo(item.path)"
          >
            <v-list-item-content class="mr-5 ml-0 pa-0" style="cursor: pointer">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-container
      fluid
      class="d-flex flex-wrap justify-space-around align-center"
    >
      <div class="d-flex">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
        <h2 class="ml-2 text-uppercase font-weight-bold">
          Shop<span style="color: #dc3545">Wise</span>
        </h2>
      </div>
      <v-card class="d-flex align-center" elevation="0">
        <v-card-text>
          <v-text-field
            :loading="loading"
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search templates"
            variant="solo"
            hide-details
            single-line
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
        <v-btn icon class="ml-2">
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn icon class="ml-2">
          <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-btn icon class="ml-2">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-card>
    </v-container>
    <router-view />
    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      loading: false,
      drawer: false,
      breadcrumbs: ["Pages", "Profile"],
      listItems: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          active: false,
          items: [
            { title: "Home", icon: "mdi-home", path: "/" },
            {
              title: "Products",
              icon: "mdi-view-dashboard",
              path: "/Dash_Profile",
            },

            {
              title: "Product Statistics",
              icon: "mdi-chart-bar",
              path: "/ChartsView",
            },
          ],
        },
        {
          title: "User Caharts",
          icon: "mdi-account-multiple-outline",
        },
        {
          title: "Settings",
          icon: "mdi-cog-outline",
          active: false,
        },
        {
          title: "Reports",
          icon: "mdi-file-document-outline",
          active: false,
        },
      ],
    };
  },
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
body {
  background: #f0f2f5;
}
/* navigations Styles */
.v-navigation-drawer {
  background-color: #202122 !important;
}

.v-toolbar-title {
  color: white !important;
}
/* Lists */
.v-list-item-content .v-list-item-title {
  color: white !important;
}

.v-list-group__header .v-list-item__content .v-list-item__title {
  color: white !important;
}

.v-list-group--active .v-list-item__title,
.v-list-item--active .v-list-item__title {
  font-weight: bold !important;
}

.v-card .v-card-text {
  line-height: 1.425;
  width: 325px;
}
header.v-toolbar.v-toolbar--density-default.v-theme--light.v-locale--is-ltr.v-app-bar {
  height: 100px;
}
header.v-toolbar.v-toolbar--density-default.v-theme--light.v-locale--is-ltr.v-app-bar
  > * {
  height: 100% !important;
}
/* titel & app */
.v-toolbar__content > .v-btn:nth-child(1) {
  margin-inline-start: 150px;
}
.v-navigation-drawer__content h2 {
  margin-top: 38px !important;
  margin-bottom: 29px !important;
  margin-left: 10px !important;
}
.v-list-group--prepend {
  margin: 20px 0;
}
.v-list-group--prepend > * {
  margin-top: 10px;
}
.v-list-item-title {
  font-size: 18px;
  margin-top: 27px;
}
.v-list-group__items .v-list-item {
  padding-inline-start: calc(-15px + var(--indent-padding)) !important;
}
.d-flex.ml-1 {
  flex-wrap: nowrap !important;
}
.v-list-group__items .v-list-item {
  padding-inline-start: calc(-38px + var(--indent-padding)) !important;
}
</style>
