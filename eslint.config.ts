import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import eslintConfigPrettier from '@vue/eslint-config-prettier';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    rules: {
      camelcase: 'error', // Använd camelCase för variabelnamn
      'comma-dangle': ['error', 'always-multiline'], // Kommatecken krävs i slutet av flerlinjiga objekt/arrayer
      indent: ['error', 2], // Använd 4 mellanslag för indrag
      quotes: ['error', 'single'], // Använd enkla citationstecken (' ') istället för dubbla
      'no-trailing-spaces': 'error', // Inga extra mellanslag i slutet av rader
      'eol-last': ['error', 'always'], // En ny rad krävs i slutet av filen
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Förbjud oanvända variabler, utom de som börjar med '_'
      'no-undef': 'error', // Förbjud icke-definierade variabler
      'prefer-const': 'error', // Använd `const` om variabeln inte ändras
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Varning för användning av `console`, men tillåter `warn` och `error`
      eqeqeq: ['error', 'always'], // Använd strikt jämförelse (===, !==)
      'no-shadow': 'error', // Förbjud att variabler skuggar andra variabler
      curly: ['error', 'all'], // Använd måsvingar för alla kontrollflöden (if, for, etc.)
      'no-var': 'error', // Förbjud användning av `var`
    },
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  eslintConfigPrettier,
);
