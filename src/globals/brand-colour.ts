/**
 * @see $colours in src/globals/variables.scss . This and that should be updated together.
 *
 */
export const brandColours = [
  'primary', // blue
  'secondary', // green
  'tertiary', // coral
  'white',
  'black',
  // clear colour scheme variants include transparency along with the selected colour:
  'clear-primary',
  'clear-secondary',
  'clear-tertiary',
  'clear-white',
  'clear-black',
  'brand-cc-red',
  'brand-wgmf-purple',
  'brand-gmf-green', // deprecated name
  'brand-er-green',
  'brand-er-blue',
  'brand-er-teal',
  'brand-er-dark-green',
  'brand-emf-yellow',
  'brand-c4c-orange',
  'brand-afa-pink',
  'brand-scw-magenta',
  'brand-grey',
  'brand-mhf-turquoise',
  'grey-extra-light',
  'grey-light',
  'grey-medium',
  'grey-dark',
  'philco-orange',
  'philco-gray-90',
  'philco-gray-70',
  'philco-white',
  'philco-success-green',
  'philco-error-coral',
  'philco-gray-30',
  'philco-gray-20',
] as const;

export type brandColour = (typeof brandColours)[number];
