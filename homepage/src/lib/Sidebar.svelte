<script lang="ts">
  import { linksData } from '~/data/link-data';

  const handleTopClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    history.replaceState(null, null, ' ');
  };
</script>

<nav>
  <ul>
    {#each linksData as { id, name, main = false, dud = false, href = '' }}
      <li class:main>
        {#if dud}
          <span class="dud" />
        {:else if href && href.trim() !== ''}
          <a {href} target="_blank" rel="noopener noreferrer" class="external">
            {name}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
              <path
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              />
            </svg>
          </a>
        {:else if id === 'top'}
          <a href={`#${id}`} on:click={handleTopClick}>{name}</a>
        {:else}
          <a href={`#${id}`}>{name}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    display: none;
    @media (min-width: 900px) {
      display: flex;
      position: fixed;
      left: 0;
      bottom: 0;
      font-size: 1rem;
      padding-left: 24px;
      padding-bottom: 48px;
    }
  }

  ul {
    display: block;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    margin-bottom: 6px;
    padding-left: 8px;

    &.main {
      padding-left: 0;
      font-weight: 600;
      padding-top: 4px;
    }
  }

  a {
    color: inherit;
    text-decoration: initial;
    display: inline-flex;
    align-items: center;

    svg {
      margin-left: 4px;
    }

    &.external {
      font-size: 1.2rem;
    }
  }

  .dud {
    display: block;
    height: 8px;
  }
</style>
