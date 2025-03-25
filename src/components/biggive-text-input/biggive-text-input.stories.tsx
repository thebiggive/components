export default {
  title: 'Components/Forms',
};

const Template = (args: any) => `
<p></p>
<div style="padding: 1em; background-color: ${args.backgroundColor}">
<biggive-text-input
 currency="${args.currency}"
 space-below="${args.spaceBelow}"
 select-style="${args.selectStyle}"
 site-design="${args.siteDesign}"
 >
    ${args.label}
    ${args.input}
</biggive-text-input>
  </div>`;
export const TextInput = {
  render: Template,

  argTypes: {
    selectStyle: {
      type: 'select',
      options: ['bordered', 'underlined'],
    },
    siteDesign: {
      type: 'select',
      options: ['biggive', 'philco'],
    },
  },

  args: {
    backgroundColor: '#F6F6F6',
    currency: 'GBP',
    spaceBelow: 0,
    selectStyle: 'bordered',
    siteDesign: 'biggive',
    input: `<input
      id="enter-donation-amount"
      slot="input"
      value="60.00"
      style="
        outline: none;
        border: none;
        text-align: right;
        background-color: transparent;
        width: 100%;
        padding: 0; /* We rely on containing element margin, and don't want vendor-dependent extra padding. */
        font-size: 18px;
        line-height: 27px;
      "
      />`,
    label: `<label for="enter-donation-amount" slot="label">Enter your donation amount</label>`,
  },
};
