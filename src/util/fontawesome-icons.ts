import { IconDefinition, faFacebookF, faYoutube, faInstagram, faLinkedinIn, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faPlus,
  faX,
  faFilter,
  faFilterSlash,
  faGlobe,
} from '@fortawesome/pro-solid-svg-icons';
import { faCaretRight } from '@fortawesome/pro-duotone-svg-icons';
import { faHeart, faAlarmClock } from '@fortawesome/pro-solid-svg-icons';
import { faTimer } from '@fortawesome/pro-regular-svg-icons';

export class FontAwesomeIconsService {
  static getSocials(): Array<{ name: string; icon: IconDefinition }> {
    return [
      {
        name: 'Facebook',
        icon: faFacebookF,
      },
      {
        name: 'Twitter',
        icon: faXTwitter,
      },
      {
        name: 'Instagram',
        icon: faInstagram,
      },
      {
        name: 'YouTube',
        icon: faYoutube,
      },
      {
        name: 'LinkedIn',
        icon: faLinkedinIn,
      },
      {
        name: 'Web',
        icon: faGlobe,
      },
      {
        name: 'Whatsapp',
        icon: faWhatsapp,
      },
    ];
  }

  static getMisc(): Array<{ name: string; icon: IconDefinition }> {
    return [
      {
        name: 'AlarmClock',
        icon: faAlarmClock,
      },
      {
        name: 'Heart',
        icon: faHeart,
      },
      {
        name: 'Timer',
        icon: faTimer,
      },
      {
        name: 'CaretRight',
        icon: faCaretRight,
      },
      {
        name: 'MenuOpen',
        icon: faBars,
      },
      {
        name: 'MenuClose',
        icon: faX,
      },
      {
        name: 'Filter',
        icon: faFilter,
      },
      {
        name: 'FilterSlash',
        icon: faFilterSlash,
      },
    ];
  }

  static getMiscIcon(misc: string): IconDefinition {
    const matchingItems = FontAwesomeIconsService.getMisc().filter(ii => ii.name === misc);

    // For an unknown/invalid icon name, show 'other' plus symbol.
    const icon = matchingItems[0] ? matchingItems[0].icon : faPlus;
    removeTrailingComma(icon);
    return icon;
  }

  static getSocialIcon(social: string): IconDefinition {
    const matchingItems = FontAwesomeIconsService.getSocials().filter(ii => ii.name === social);

    // For an unknown/invalid icon name, show 'other' plus symbol.
    const icon = matchingItems[0] ? matchingItems[0].icon : faPlus;
    removeTrailingComma(icon);
    return icon;
  }
}

/**
 * Looks like the caretRight icon from FontAwesome (and maybe others) has an errant trailing comma in the path definition,
 * which doesn't affect the appearance but leads to error noise in Chrome and Safari consoles, so removing the
 * comma here.
 * See https://stackoverflow.com/a/63798314/2526181
 * @param iconDefinition
 */
function removeTrailingComma(iconDefinition: IconDefinition): void {
  const path = iconDefinition.icon[4];
  iconDefinition.icon[4] = path.toString().replace(/,\s*$/, '');
}
