# Testing the Heading Banner Component Demo

## Testing Instructions

To test the `biggive-heading-banner` component demo:

1. **Start the Stencil development server**:
   ```bash
   cd /home/barney/projects/components
   npm start
   ```

2. **Access the demo page** in your browser:
   ```
   http://localhost:3333/biggive-heading-banner-demo.html
   ```

3. **Verify the following**:
   - Both examples of the component render correctly
   - The component displays properly at different screen sizes (test responsive behavior)
   - All properties are correctly applied (colors, text, images, etc.)
   - The documentation and code examples are displayed correctly

## What to Look For

### Visual Verification

- **Basic Example**: Should show a tall banner with:
  - Coral text background (#FF7272)
  - Black text
  - "Double the difference" title
  - Teaser text below the title
  - Background image with focal point at 70% horizontal, 47% vertical

- **Advanced Example**: Should show a short banner with:
  - Blue text background (#2C089B)
  - White text
  - Logo at the top
  - "Small Charity Week" slug above the title
  - "Support small charities" title
  - Teaser text below the title
  - Background image with centered focal point

### Responsive Behavior

Test the component at different screen sizes:

- **Desktop**: Both examples should display the text on the left and the full image on the right
- **Tablet**: Layout should adjust with proper spacing
- **Mobile**: Text should appear above the image, and the image should be properly cropped

### Browser Compatibility

Test in multiple browsers if possible:
- Chrome
- Firefox
- Safari
- Edge

## Troubleshooting

If the component doesn't render correctly:

1. **Check the browser console** for any errors
2. **Verify image paths** are correct
3. **Ensure the Stencil build** is up to date:
   ```bash
   cd /home/barney/projects/components
   npm run build
   ```
4. **Check component registration** in the Stencil configuration

## Integration Testing

To test integration with other platforms:

### Angular Integration

1. Build the Stencil components:
   ```bash
   cd /home/barney/projects/components
   npm run build
   ```

2. Copy the built files to the Angular project or ensure the dependency is correctly set up

3. Start the Angular application:
   ```bash
   cd /home/barney/projects/donate-frontend
   npm start
   ```

4. Navigate to a page that uses the heading-banner component

### WordPress Integration

1. Build the Stencil components:
   ```bash
   cd /home/barney/projects/components
   npm run build
   ```

2. Copy the built files to the WordPress theme or ensure the dependency is correctly set up

3. Access the WordPress site and create a page that uses the heading-banner block

## Final Recommendations

1. **Add to Component Library Documentation**: Consider adding this component to any existing documentation site for the component library.

2. **Create Storybook Stories**: If using Storybook, create stories for this component to showcase different configurations.

3. **Add Unit Tests**: Develop unit tests for the component to ensure it behaves as expected.

4. **Performance Optimization**: Consider lazy-loading images, especially for mobile devices.

5. **Accessibility Improvements**: Ensure the component meets WCAG guidelines, particularly for color contrast and screen reader support.

6. **Fix biggive.html**: Consider fixing the structural issues in the main biggive.html file to make future additions easier.

## Conclusion

The `biggive-heading-banner` component demo provides a comprehensive showcase of the component's capabilities and usage. By following these testing instructions, you can ensure the component works correctly across different environments and use cases.
