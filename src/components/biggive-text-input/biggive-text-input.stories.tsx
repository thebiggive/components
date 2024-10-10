export default {
  title: 'Components/Forms',
};

type Args = {
  currency: 'GBP' | 'USD' | undefined;
  spaceBelow: number;
  selectStyle: 'bordered' | 'underlined';
  input: string;
  label: string;
};

const Template = (args: Args) => `
<p></p>
<biggive-text-input
 currency="${args.currency}"
 space-below="${args.spaceBelow}"
 select-style="${args.selectStyle}"
 >
    ${args.label}
    ${args.input}
</biggive-text-input>`;

export const TextInput = {
  render: Template,

  args: {
    currency: 'GBP',
    spaceBelow: 0,
    selectStyle: 'bordered',
    input: `<input
      id="enter-donation-amount"
      slot="input"
      value="60.00"
      />`,
    label: `<label for="enter-donation-amount" slot="label">Enter your donation amount</label>`,
  } as Args,
};
