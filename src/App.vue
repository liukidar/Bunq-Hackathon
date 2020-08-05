<template>
  <div id="app">
    <video id="bkg-video" style="width: 100vw; height: 100vh; position: fixed; top: 0; left: 0;">
      <source src="output.mp4" type="video/mp4">
    </video>
    <transition name="app">
      <div class="cmp-body" v-if="app">
        <div class="panel">
          <bq-navbar></bq-navbar>
          <bq-dot-h-slider>
            <template slot-scope="{active}">
              <div class="panel-content">
                <bq-home :active="active == 0"></bq-home>
              </div>
              <div class="panel-content">
                <bq-accounts :active="active == 1"></bq-accounts>
              </div>
              <div class="panel-content">
                <bq-today :active="active == 2"></bq-today>
              </div>
              <div class="panel-content">
                <bq-cards :active="active == 3"></bq-cards>
              </div>
            </template>
          </bq-dot-h-slider>
          <transition name="notification">
            <bq-notification v-if="notification" @ok="notification = false" @no="notification = false">
            </bq-notification>
          </transition>
          <transition name="app">
            <bq-toast v-show="toast"></bq-toast>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BqNavbar from './components/BqNavbar'
import BqDotHSlider from './components/BqDotHSlider'

import BqHome from './pages/BqHome'
import BqAccounts from './pages/BqAccounts'
import BqToday from './pages/BqToday'
import BqCards from './pages/BqCards'
import BqNotification from './pages/BqNotification'
import BqToast from './pages/BqToast'


export default {
  name: 'app',
  data: function() {
    return {
      notification: false,
      video: null,
      app: false,
      toast: false
    }
  },
  components: {
    BqNavbar, BqDotHSlider,
    BqHome, BqAccounts, BqToday, BqCards, BqNotification, BqToast
  },
  mounted() {
    this.video = document.getElementById('bkg-video')
    this.video.onended = () => {
      this.app = true
    }
    document.onkeydown = (e) => {
      e = e || window.event;
      switch(e.key) {
        case 'n':
          this.notification = true
          break
        case 't':
          this.toast = true
          setTimeout(() => this.toast = false, 3000)
          break
      }
      switch(e.keyCode) {
        case 32:
          this.app = false
          this.video.play()
      }
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  user-select: none;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

body {
  background: rgb(50, 50, 50);
  font-family: 'SF Pro Text', Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.panel {
  width: 312px;
  height: 390px;
  background: #000;
}
.panel-content {
  padding-top: 42px;
  width: 312px;
  height: 390px;
  box-sizing: border-box;
  display: flex;
}
.panel-content > * {
  height: 348px;
}

.light-text {
  font-family: 'SF Pro Text Light', Avenir;
}

</style>

<style scoped>

.cmp-overlay {
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/bkg.png');
}

.cmp-body {
  text-align: center;
  position: fixed;
  top: 540px;
  left: 960px;
  transform: translate(calc(-50% + 8px), calc(-50% - 16px)) scale(1.5);
  overflow: hidden;
  border-radius: 16px;
  color: white;
  z-index: 1;
  background: #000;
  padding: 16px;
}
.cmp-body > div {
  position: relative;
}

.notification-enter-active, .notification-leave-active {
  transition: .5s;
}
.notification-enter, .notification-leave-to {
  transform: translate(0, -100vh) scale(0);
	opacity: 0;
}

.app-enter-active, .app-leave-active {
  transition: .5s;
}
.app-enter, .app-leave-to {
	opacity: 0.0;
}

</style>
