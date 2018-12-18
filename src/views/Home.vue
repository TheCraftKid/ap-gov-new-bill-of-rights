<template>
  <main id="home">
    <div class="text-overlay-container">
      <div class="description-box">
        <div class="title-box">
          <div class="title-text">The New Bill of Rights</div>
          <div class="subtitle-text">by Willie Chalmers III</div>
        </div>
        <div class="subtitle-box">
          An interactive presentation that asks the question: "What if we wrote a
          new bill of rights for the 21st Century?"
        </div>
      </div>
      <div class="button-box">
        <button class="start-button">
          <router-link to="/presentation">Start</router-link>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main#home {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #080b27;
  padding: 16px;
  color: white;

  .description-box {
    flex: 1;
  }

  .title-box {
    .title-text,
    .subtitle-text {
      opacity: 0.87;
      margin: 8px;
    }
    .title-text {
      font-size: 56px;
    }
    .subtitle-text {
      font-size: 34px;
    }
  }

  .button-box {
    display: flex;
    justify-content: flex-end;

    .start-button {
      border-radius: 4px;
      margin: 8px;
      font-size: 14px;
    }
  }

  .text-overlay-container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
}
</style>
