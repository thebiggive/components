const args = {};

export default {
  title: 'Philco/Header and Footer',
  args,
  argTypes: {},
};

const Template = () => `
    <philco-main-menu
      philco-url-prefix="http://localhost:30003"
    ></philco-main-menu>
      `;

export const MainMenu = {
  render: Template,
};
