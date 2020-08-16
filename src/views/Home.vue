<template>
  <div class="home">
    <el-container>
      <el-row>
        <el-button
          type="success"
          @click="dialogVisible = true"
          >
          Click to open the Dialog
        </el-button>

        <el-dialog
          title="PALINDROM"
          :visible.sync="dialogVisible"
          width="80%"
          :before-close="handleClose"
          >
          <span>
            <el-input
              placeholder="Please input"
              v-model="input"
              @input="setInput"
            ></el-input>
          </span>
          <span
            slot="footer"
            class="dialog-footer"
          >
            <el-button
              @click="setPalindrom"
              :disabled="isDisabled"
            >
              Save
            </el-button>
          </span>
        </el-dialog>
      </el-row>
    </el-container>
    <el-container>
      <el-row>
        {{ palindrom }}
      </el-row>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "Home",
  data: () => {
    return {
      dialogVisible: false,
      input: "",
      palindrom: "",
    };
  },
  methods: {
      handleClose(done) {
        this.$confirm("Are you sure to close this dialog?")
          .then(() => {
            done();
            this.palindrom = "";
          })
          .catch(() => {});
      },
      setPalindrom() {
        this.dialogVisible = false;
        this.palindrom = this.input;
        this.$store.commit("SET_PALINDROM");
      },
    },
  computed: {
    isDisabled() {
      this.$store.commit("CHECK_INPUT_VALUE");
      return this.$store.state.isDisabledBtnSave;
    },
    setInput() {
      return this.$store.commit("GET_INPUT_VALUE", this.input);
    },
  }
};
</script>

<style lang="scss">
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(64, 158, 255, 0.5);
    overflow: hidden;
  }
  .el-container {
    margin: auto;
}
</style>
