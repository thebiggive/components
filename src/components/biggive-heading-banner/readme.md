# biggive-heading-banner



<!-- Auto Generated Below -->


## Overview

Heading banner component for use as a page header.

This component provides a banner with a background image, optional logo, and text content.
It supports different heights and customizable colors.

## Properties

| Property                            | Attribute                | Description                                                                     | Type                                                                 | Default     |
| ----------------------------------- | ------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------- |
| `backgroundColour` _(required)_     | `background-colour`      | Background color for the banner                                                 | `string`                                                             | `undefined` |
| `focalPoint` _(required)_           | `focal-point`            | Focal point for the image positioning x and y values are percentages (0-100)    | `string \| { x: number; y: number; }`                                | `undefined` |
| `height`                            | `height`                 | Height variant of the banner 'tall' for full height, 'short' for reduced height | `"short" \| "tall"`                                                  | `'tall'`    |
| `logo`                              | `logo`                   | Optional logo object with URL and alt text                                      | `string \| undefined \| { url: string; alt?: string \| undefined; }` | `undefined` |
| `mainImageUrl` _(required)_         | `main-image-url`         | URL for the main banner image                                                   | `string`                                                             | `undefined` |
| `mainTitle` _(required)_            | `main-title`             | Main title text for the banner                                                  | `string`                                                             | `undefined` |
| `slug`                              | `slug`                   | Optional slightly smaller text to appear above the main title                   | `string \| undefined`                                                | `''`        |
| `teaser` _(required)_               | `teaser`                 | Optional teaser text that appears below the main title                          | `string`                                                             | `undefined` |
| `textBackgroundColour` _(required)_ | `text-background-colour` | Background color for the text content area                                      | `string`                                                             | `undefined` |
| `textColour` _(required)_           | `text-colour`            | Text color for all text content                                                 | `string`                                                             | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
