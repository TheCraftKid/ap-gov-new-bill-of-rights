<template>
  <div id="app">
    <div class="toolbar">
      <div class="toolbar-contents">
        <div class="nav-button-container">
          <i class="material-icons">menu</i>
        </div>
        <router-link to="/" tag="span" class="clickable-title-box">New Bill of Rights</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/theme";

html,
body {
  margin: 0px;
  min-height: 100vh;
}

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.toolbar {
  height: 56px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  padding: 0px 16px;
  background: $primary-color;
  color: $text-on-primary;

  .toolbar-contents {
    display: inline-flex;
  }

  .clickable-title-box {
    display: flex;
    justify-content: flex-start;
    margin-left: 16px;
    cursor: pointer;
  }
}

.content {
  height: 100%;
}
</style>
