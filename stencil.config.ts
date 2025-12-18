import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import typescript from '@rollup/plugin-typescript';

export const config: Config = {
  namespace: 'BigGive',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/philco-variables.scss',
        'src/globals/variables.scss',
        'src/globals/mixins.scss',
        'src/globals/global.scss'
      ]
    })
  ],
  rollupPlugins: { before: [typescript()] },
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@biggive/components/dist',
      directivesProxyFile: './angular/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: './angular/projects/components/src/lib/stencil-generated/index.ts',
      outputType: 'standalone',
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
        { src: 'pages', warn: true },
      ],
    },
    // While in real apps we only use non-standalone Angular module from `angularOutputTarget` and bootstrap-everything
    // loader from `dist`, we also need `dist-custom-elements` for Storybook previews to work.
    {
      type: 'dist-custom-elements', // Uses default `dist/components`.
      customElementsExportBehavior: 'single-export-module',
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
        { src: 'pages', warn: true },
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
