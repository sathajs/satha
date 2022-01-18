<script lang="ts">
  import CodeBox from './CodeBox.svelte';
  import ExternalLinks from './ExternalLinks.svelte';
  import PageLink from './PageLink.svelte';
  import { instructionsCodes } from '~/data/instructions-data';
</script>

<div class="instructions">
  <PageLink href="getting-started">
    <h2>Getting started</h2>
  </PageLink>
  <article>
    <PageLink href="install">
      <p><b>Install</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.install} />
  </article>
  <article>
    <PageLink href="create-store">
      <p><b>Create a store</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.store} />
  </article>
  <article>
    <PageLink href="use-store">
      <p><b>Use store</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.useStore} />
  </article>

  <hr />

  <PageLink href="docs">
    <h2>Docs</h2>
  </PageLink>

  <article>
    <PageLink href="create-and-use-store">
      <p><b>Create and use store</b></p>
    </PageLink>
    <p>create a store which stores a numeric value</p>
    <CodeBox code={instructionsCodes.createAndUseStore} />
  </article>

  <article>
    <PageLink href="subscribe">
      <p><b>Subscribe</b></p>
    </PageLink>
    <p>
      Create dynamic stores using Subscribe/Unsubscribe methods. Subscription is global and will
      work througout the page.
    </p>
    <CodeBox code={instructionsCodes.subscribe} />
  </article>

  <article>
    <PageLink href="multi-value-store">
      <p><b>Multi value store</b></p>
    </PageLink>
    <p>create an user details store packed in object</p>
    <CodeBox code={instructionsCodes.multiValueStore} />
  </article>

  <article>
    <PageLink href="reset-value">
      <p><b>Reset value</b></p>
    </PageLink>
    <p>Reset value to initial state</p>
    <CodeBox code={instructionsCodes.resetValue} />
  </article>

  <article>
    <PageLink href="session-storage">
      <p><b>sessionStorage</b></p>
    </PageLink>
    <p>Create session storage (sessionStorage)</p>
    <CodeBox code={instructionsCodes.sessionStorage} />
  </article>

  <article>
    <PageLink href="new-local-storage">
      <p><b>New storage</b></p>
    </PageLink>
    <p>
      by default all stores are grouped under a single localStorage array. The values can be stored
      in a diffrent localStorage array by specifying 'storageName'
    </p>
    <CodeBox code={instructionsCodes.newLocalStorage} />
  </article>

  <article>
    <PageLink href="change-default-storagename">
      <p><b>Default storage name</b></p>
    </PageLink>
    <p>
      by default all stores are grouped under a single localStorage array. You can customize the
      name of this default storage entry by calling 'setDefaultStorageName' before initializing any
      stores.
    </p>
    <p>
      [It's useful If you are using sub links e.g. github pages to avoid the possibility of local
      storage name conflict.]
    </p>
    <CodeBox code={instructionsCodes.changeDefaultStorageName} />
  </article>

  <article>
    <PageLink href="typescript">
      <p><b>Typescript</b></p>
    </PageLink>
    <CodeBox code={instructionsCodes.typescript} />
  </article>

  <article>
    <PageLink href="react-hooks">
      <p><b>React hooks</b></p>
    </PageLink>
    <p>an auto-subscribed 'useStore' react hook is available as a separate library</p>
    <CodeBox code={instructionsCodes.reactHookInstall} />
    <br />
    <p>Javascript version</p>
    <CodeBox code={instructionsCodes.reactHook} />
    <br />
    <p>Typescript version</p>
    <CodeBox code={instructionsCodes.reactHookTs} />
  </article>
</div>

<style>
  article {
    padding-bottom: 48px;
  }

  p {
    font-size: 1.1rem;
  }

  b {
    font-size: 1.35rem;
  }
</style>
