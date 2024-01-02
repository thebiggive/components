import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'BigGive',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/variables.scss',
        'src/globals/mixins.scss',
        'src/globals/global.scss'
      ]
    })
  ],
  outputTargets: [
    angularOutputTarget({
      // Not 100% sure if specifying the package this way, as opposed to `@biggive/component`, is now
      // required. But it's the format suggested in the below guide and it works.
      // https://pranavsarda.hashnode.dev/stenciljs-with-angular-app-directly
      componentCorePackage: '@biggive/components/dist/components',
      directivesProxyFile: './angular/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: './angular/projects/components/src/lib/stencil-generated/index.ts',
      includeImportCustomElements: true,
      // TODO once we have Stencil v4 working generally, it could well be good to try "standalone" which uses
      // `dist-custom-elements` instead of `dist` and might make things more efficient in Donate.
      // See https://stenciljs.com/docs/angular#outputtype
      outputType: 'component',
    }),
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets/fonts', warn: true },
        { src: 'assets/images', warn: true },
      ],
    },
    {
      type: 'dist-custom-elements', // Uses default `dist/components`.
      customElementsExportBehavior: 'single-export-module'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
        copy: [
        { src: 'assets/fonts', warn: true },
        { src: 'assets/images', warn: true },
      ],
    },
  ],
  devServer: {
    port: 3939,
  },
  extras: {
    experimentalSlotFixes: true
  },
};
