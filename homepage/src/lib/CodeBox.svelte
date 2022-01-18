<script lang="ts">
  import 'prismjs/themes/prism-tomorrow.css';
  import Prism from 'prismjs';

  export let code = '';
  export let language = 'javascript';
</script>

<div class="code-box">
  {@html Prism.highlight(code, Prism.languages[language])}
</div>

<style lang="scss">
  .code-box {
    white-space: break-spaces;
    border-radius: 3px;
    background-color: #151d3a;
    color: #fff;
    padding: 16px;
    font-size: 1.1rem;
    padding-top: 0;
    font-family: monospace;
    line-height: 23px;
    overflow: hidden;

    @media (min-width: 900px) {
      white-space: pre;
    }
  }
</style>
