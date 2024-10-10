import { newSpecPage } from '@stencil/core/testing';
import { BiggiveBeneficiaryIcon } from '../biggive-beneficiary-icon';

describe('biggive-beneficiary-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveBeneficiaryIcon],
      html: `<biggive-beneficiary-icon></biggive-beneficiary-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-beneficiary-icon>
        <div class="container">
          <div class="background-colour-primary beneficiary-icon-item">
            <a href="#">
              <svg class="fill-white" height="512" viewBox="0 0 448 512" width="448" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path>
              </svg>
            </a>
          </div>
          <div class="label"></div>
        </div>
      </biggive-beneficiary-icon>
    `);
  });
});
