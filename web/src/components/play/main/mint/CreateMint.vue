<template>
  <v-form
    v-model="valid"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
        <v-text-field
          v-model="thread"
          :rules="isThread"
          label="thread id (post number of OP)"
          required>
        </v-text-field>
        <v-text-field
          v-model="post"
          :rules="isPost"
          label="post number"
          required
        >
        </v-text-field>
        </v-col>
      </v-row>
  
      <v-btn
        class="mr-4"
        @click="submitProofOfMeme"
      >Submit Proof of Meme
      </v-btn>
        <v-snackbar
          v-model="snackbar"
          color="green"
        >
        Alright hopefully this works, funds should deposited shortly, click on the block explorer to see if a tx is executing
        </v-snackbar>
    </v-container>
  </v-form>
</template>
<script>
import * as FFService from '../../../../shared/FFService'
export default {
  data: () => ({
    valid: false,
    thread: '',
    isThread: [
      v => !!v || 'thread url is required',
    ],
    post: '',
    isPost: [
      v => !!v || 'post is required',
    ],
    snackbar: false,
  }),
  methods: {
    async submitProofOfMeme() {
      if (this.valid) {
        this.snackbar = true;
        let proof = await FFService.proveMemeAndMint(this.thread, this.post)
        if (proof.data.message === 'success') {
          this.$vueEventBus.$emit('mint', {proof})
        } else {
          this.$vueEventBus.$emit('mint-failed', {proof})
        }
      }
    },
  }
};
</script>
