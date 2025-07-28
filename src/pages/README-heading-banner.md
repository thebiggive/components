# Heading Banner Component Demo

## Overview

This document explains the approach taken to demonstrate the new `biggive-heading-banner` component.

## Demo Implementation

A dedicated demo page has been created to showcase the `biggive-heading-banner` component:

**File location:** `/home/barney/projects/components/src/pages/biggive-heading-banner-demo.html`

### Why a Separate Demo File?

1. **Clean Demonstration**: A dedicated file provides a focused, clean demonstration of the component without interference from other components.

2. **Comprehensive Documentation**: The demo file includes detailed documentation, code examples, and a properties table.

3. **Avoiding Structural Issues**: The existing `biggive.html` file contains several structural HTML errors that make it difficult to modify safely:
   - Line 233: Closing tag `</iggive-formatted-te>` matches nothing (should be `</biggive-formatted-text>`)
   - Line 235: Element `biggive-formatted-text` is not closed
   - Line 611: Closing tag `</div>` matches nothing

4. **Better User Experience**: A dedicated demo file makes it easier for users to understand and learn how to use the component.

## Demo File Contents

The demo file includes:

1. **Basic Example**: A simple implementation of the component with essential properties.

2. **Advanced Example**: A more complex implementation showing optional properties like logo and slug.

3. **Code Snippets**: HTML code examples that can be copied and pasted.

4. **Properties Documentation**: A comprehensive table of all available properties, their types, descriptions, and whether they're required.

5. **Usage Notes**: Additional information about component behavior and best practices.

## How to Access the Demo

To view the demo:

1. Start the Stencil development server:
   ```
   npm start
   ```

2. Navigate to:
   ```
   http://localhost:3333/biggive-heading-banner-demo.html
   ```

## Component Usage

The `biggive-heading-banner` component can be used in three contexts:

1. **Stencil Components Library**: Direct usage in HTML as shown in the demo file.

2. **Angular Application**: Through the Angular wrapper component that delegates to the Stencil component.

3. **WordPress**: Via the WordPress block that renders the Stencil component.

## Minimal Example

Here's a minimal example of using the component:

```html
<biggive-heading-banner
  main-title="Heading Banner Component"
  teaser="This is a demonstration of the heading banner component."
  main-image-url="/assets/images/banner-general.jpg"
  background-colour="#F6F6F6"
  focal-point='{"x": 50, "y": 50}'
  text-background-colour="#2C089B"
  text-colour="#FFFFFF"
  height="tall"
></biggive-heading-banner>
```
