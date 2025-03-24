const args = {
  blogUrlPrefix: 'https://biggive.org',
  donateUrlPrefix: 'https://donate.biggive.org',
  experienceUrlPrefix: 'https://community.biggive.org',
  isLoggedIn: false,
  myAccountFlagEnabled: true,
};

export default {
  title: 'Components/Header and Footer',
  args,
  argTypes: {
    blogUrlPrefix: { control: 'text' },
    donateUrlPrefix: { control: 'text' },
    experienceUrlPrefix: { control: 'text' },
    isLoggedIn: { control: 'boolean' },
    myAccountFlagEnabled: { control: 'boolean' },
  },
};

const Template = () => `
    <biggive-main-menu
        blog-url-prefix="${args.blogUrlPrefix}"
        donate-url-prefix="${args.donateUrlPrefix}"
        experience-url-prefix="${args.experienceUrlPrefix}"
        is-logged-in="${args.isLoggedIn}"
        my-account-flag-enabled="${args.myAccountFlagEnabled}"
    ></biggive-main-menu>
      `;

export const MainMenu = {
  render: Template,
};
