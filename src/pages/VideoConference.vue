<template>
  <div class="vidoe-app-container">
    <div class="wrapp_vidoe_app_container">
      <div class="vidoe_show_part">
        <div class="wrapp_video_show_part">
          <div class="videos">
            <video
              src="https://www.youtube.com/embed/SVmZZK3WML0?si=zC3C3TuWDuWnfiUB"
              controls
            ></video>
          </div>

          <div class="controls_part">
            <div class="wrapp_controls">
              <div class="mike" @click="toggleMic">
                <svg
                  v-if="isMike"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-mic-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                  <path
                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-mic-mute-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3"
                  />
                  <path
                    d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z"
                  />
                </svg>
              </div>
              <div class="video" @click="toggleVideo">
                <svg
                  v-if="isVidoe"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-camera-video-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-camera-video-off-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272zm-10.114-9A2 2 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728zm9.746 11.925-10-14 .814-.58 10 14z"
                  />
                </svg>
              </div>
              <div class="share_screen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrows-fullscreen"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                  />
                </svg>
                <span>Share screen</span>
              </div>
              <div class="leave">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
                <span>Leave</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMike: true,
      isVidoe: true,
    };
  },
  methods: {
    toggleMic() {
      this.isMike = !this.isMike;
    },
    toggleVideo() {
      this.isVidoe = !this.isVidoe;
    },
  },
};
</script>

<style>
.vidoe-app-container {
  height: 100vh;
  width: 100%;
}

.wrapp_vidoe_app_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.vidoe_show_part {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.wrapp_video_show_part {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.videos {
  display: grid;
  grid-template-columns: auto auto;
  gap: 2px;
  overflow-y: scroll;
  height: 450px;
}

.videos video {
  width: 100%;
  height: 100%;
}

.controls_part {
  padding: 10px;
}

.wrapp_controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.mike {
  padding: 15px;
  border: 1px solid #4444;
  display: flex;
  border-radius: 12px;
  background: #666;
  cursor: pointer;
}

.video {
  padding: 15px;
  border: 1px solid #4444;
  display: flex;
  border-radius: 12px;
  background: #666;
  cursor: pointer;
}

.share_screen {
  border: 1px solid #4444;
  display: flex;
  border-radius: 12px;
  gap: 0.7rem;
  align-items: center;
  padding: 10px 20px;
  background: green;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.leave {
  padding: 10px 20px;
  border: 1px solid #4444;
  display: flex;
  border-radius: 12px;
  gap: 0.5rem;
  align-items: center;
  background-color: rgb(234, 67, 53);
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
