<script lang="ts">
  import { linksData } from '~/data/link-data';

  const externalLinks = linksData.filter((ld) => ld.href && ld.href.trim() !== '');
</script>

<div>
  <ul>
    {#each externalLinks as { name, href }}
      <li>
        <a {href} target="_blank" rel="noopener noreferrer" aria-label={name}>
          {name}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
            />
          </svg>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  ul {
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding: 0;
    margin: 0;
    margin-left: 24px;
    margin-top: 16px;

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    font-size: 1.35rem;
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: initial;

    svg {
      margin-left: 8px;
    }
  }
</style>
