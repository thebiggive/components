import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

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
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@biggive/components',
      directivesProxyFile: './angular/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: './angular/projects/components/src/lib/stencil-generated/index.ts',
      // TODO once we have Stencil v4 working generally, it could well be good to try "standalone" which uses
      // `dist-custom-elements` instead of `dist` and might make things more efficient in Donate.
      // See https://stenciljs.com/docs/angular#outputtype
      outputType: 'component',
    }),
    // Avoiding having dist-custom-elements too for now. Probably less confusing to omit it unless we find anything
    // needs it, to make it clear we only use non-standalone Angular module and bootstrap-everything loader
    // script with WordPress.
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets/fonts', warn: true },
        { src: 'assets/images', warn: true },
        { src: 'pages', warn: true  },
      ],
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
        { src: 'pages', warn: true  },
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
