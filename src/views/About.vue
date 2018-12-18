<template>
  <main id="about">
    <div class="card-container">
      <section class="about-card project-description">
        <div class="section-header">What is this?</div>
        <p>
          The original assignment was to create a new Bill of Rights and present
          it to the class after a few days of work. Knowing me, I wasn't going to
          limit myself to a slideshow because
          <i>muh web development skills</i>.
          After a day or two of planning, I began building this nearly 12 hours
          before I had to give my presentation.
        </p>
        <p>
          TL;DR: This is an experimental web presentation for a completely
          made-up but ideal Bill of Rights.
        </p>
        <p>
          For more information, see the project on
          <a
            href="https://github.com/TheCraftKid/ap-gov-new-bill-of-rights"
          >GitHub</a>.
        </p>
      </section>
      <section class="about-card project-resources">
        <div class="section-header">Project Resources</div>
        <p>
          This is the part where I list sources for images and libraries I used
          with the power of programming:
        </p>
        <div class="section-subheader">Libraries and Tools</div>
        <li v-for="library in libraries" :key="library.url">
          <a :href="library.url">{{library.name}}</a>
        </li>
        <div class="section-subheader">Images</div>
        <li v-for="resource in resources" :key="resource.url">
          <a :href="resource.url">{{resource.name}}</a>
        </li>
      </section>
      <section class="about-card social-links">
        <div>You can find me here:</div>
        <div class="links-box">
          <div class="social-link">
            <img class="social-icon" src="@/assets/twitter-icon.png" alt="Twitter logo">
            <a href="https://twitter.com/@WillieCubed">
              <span class="social-username">@WillieCubed</span>
            </a>
          </div>
          <div class="social-link">
            <img
              class="social-icon padded-icon"
              src="@/assets/github-icon-dark.png"
              alt="GitHub logo"
            >
            <a href="https://github.com/TheCraftKid">
              <span class="social-username">TheCraftKid</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import libraries from '@/assets/libraries.json';
import resources from '@/assets/sources.json';

export default {
  name: 'new-bor-about',
  data() {
    return {
      resources,
      libraries,
    };
  },
};
</script>

<style lang="scss" scoped>
main#about {
  padding: 16px;
  display: flex;
  justify-content: center;
  background: #e0e0e0;
  height: 100%;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }

  .section-header {
    margin: 8px 0px 4px;
    font-size: 24px;
  }

  .section-subheader {
    margin: 8px 0px 4px;
    font-size: 20px;
  }

  .padded-icon {
    padding: 8px;
  }

  .card-container {
    .about-card {
      width: 480px;
      margin: 0px 8px 8px;
      padding: 16px;
      background: #ffffff;
      box-shadow: 0 3px 1px -2px rgba(#000, 0.2), 0 2px 2px 0 rgba(#000, 0.14),
        0 1px 5px 0 rgba(#000, 0.12);
      border-radius: 2px;
    }
  }
}

.project-description {
}

.social-links {
  .social-link {
    display: block;
    margin: 4px;
  }
  .links-box {
    display: flex;
    flex-direction: row;
  }
  .social-username {
    display: block;
  }
  .social-icon {
    height: 64px;
    width: 64px;
  }
}
</style>
