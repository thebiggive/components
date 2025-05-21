# biggive-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute         | Description                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Default      |
| -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `buttonId`     | `button-id`       |                                                                                                                    | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`  |
| `centered`     | `centered`        | Centered                                                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `false`      |
| `colourScheme` | `colour-scheme`   | Colour Scheme                                                                                                      | `"primary" \| "secondary" \| "tertiary" \| "white" \| "black" \| "clear-primary" \| "clear-secondary" \| "clear-tertiary" \| "clear-white" \| "clear-black" \| "brand-cc-red" \| "brand-wgmf-purple" \| "brand-gmf-green" \| "brand-er-green" \| "brand-er-dark-blue" \| "brand-er-teal" \| "brand-er-dark-green" \| "brand-emf-yellow" \| "brand-c4c-orange" \| "brand-afa-pink" \| "brand-scw-magenta" \| "brand-grey" \| "brand-mhf-turquoise" \| "grey-extra-light" \| "grey-light" \| "grey-medium" \| "grey-dark" \| "philco-orange" \| "philco-gray-90" \| "philco-gray-70" \| "philco-white" \| "philco-success-green" \| "philco-error-coral" \| "philco-gray-30" \| "philco-gray-20"` | `'primary'`  |
| `disabled`     | `disabled`        | For use only in philco site - the Big Give site does not use disabled buttons and does not have a design for such. | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `false`      |
| `fullWidth`    | `full-width`      | Display full width                                                                                                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `false`      |
| `label`        | `label`           | Text                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `'Click me'` |
| `openInNewTab` | `open-in-new-tab` | New Tab                                                                                                            | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `false`      |
| `rounded`      | `rounded`         | Rounded corners                                                                                                    | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `false`      |
| `siteDesign`   | `site-design`     |                                                                                                                    | `"biggive" \| "philco"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `'biggive'`  |
| `size`         | `size`            | Size                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `'medium'`   |
| `spaceBelow`   | `space-below`     | Space below component                                                                                              | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `1`          |
| `url`          | `url`             | URL                                                                                                                | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`  |


## Events

| Event           | Description | Type                                           |
| --------------- | ----------- | ---------------------------------------------- |
| `doButtonClick` |             | `CustomEvent<{ event: object; url: string; }>` |


## Dependencies

### Used by

 - [biggive-article-card](../biggive-article-card)
 - [biggive-basic-card](../biggive-basic-card)
 - [biggive-call-to-action](../biggive-call-to-action)
 - [biggive-campaign-card](../biggive-campaign-card)
 - [biggive-campaign-card-filter-grid](../biggive-campaign-card-filter-grid)
 - [biggive-cookie-banner](../biggive-cookie-banner)
 - [biggive-footer](../biggive-footer)
 - [biggive-hero-image](../biggive-hero-image)
 - [biggive-image-card](../biggive-image-card)
 - [biggive-image-feature](../biggive-image-feature)
 - [biggive-video-feature](../biggive-video-feature)
 - [philco-main-menu](../philco-main-menu)

### Graph
```mermaid
graph TD;
  biggive-article-card --> biggive-button
  biggive-basic-card --> biggive-button
  biggive-call-to-action --> biggive-button
  biggive-campaign-card --> biggive-button
  biggive-campaign-card-filter-grid --> biggive-button
  biggive-cookie-banner --> biggive-button
  biggive-footer --> biggive-button
  biggive-hero-image --> biggive-button
  biggive-image-card --> biggive-button
  biggive-image-feature --> biggive-button
  biggive-video-feature --> biggive-button
  philco-main-menu --> biggive-button
  style biggive-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
