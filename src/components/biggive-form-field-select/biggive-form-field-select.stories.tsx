export default {
  title: 'Components/Forms',
};

const Template = () => `
      <p></p>
      <biggive-form-field-select
          background-colour="grey"
          placeholder="--None--"
          selectStyle="bordered"
          prompt="Some Prompt"
          name="someFormFieldName"
          options="[
          {&quot;label&quot;:&quot;Option Two&quot;,&quot;value&quot;:&quot;option_1&quot;},
          {&quot;label&quot;:&quot;Option Two&quot;,&quot;value&quot;:&quot;option_2&quot;}
          ]"
      />
      `;

document.addEventListener('doOptionSelect', () => alert('doOptionSelect event emitted!'));

export const FormFieldSelect = Template.bind({});
