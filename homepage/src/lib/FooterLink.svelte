<script lang="ts">
  const links = [
    {
      name: 'changelog',
      href: 'https://github.com/sathajs/satha/blob/main/CHANGELOG.md',
    },
    {
      name: 'npm',
      href: 'https://www.npmjs.com/package/@satha/core',
    },
    {
      name: 'design',
      href: 'https://github.com/sathajs/website-astro',
    },
  ];
</script>

<footer>
  <ul>
    {#each links as { name, href }}
      <li>
        <a {href} target="_blank" rel="noopener noreferrer" aria-label={name}>
          {name}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
            />
          </svg>
        </a>
      </li>
    {/each}
  </ul>
</footer>

<style lang="scss">
  footer {
    padding-bottom: 60px;
    margin-top: -16px;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    display: block;
    padding: 0;
    margin: 0;
    margin-left: 24px;
    margin-top: 16px;

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;

    svg {
      margin-left: 8px;
    }
  }
</style>
