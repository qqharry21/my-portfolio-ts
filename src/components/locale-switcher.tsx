import { useLocale } from 'next-intl';

import { LocaleSwitcherToggle } from './locale-switcher-toggle';
import { TransformText } from './transform-text';

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherToggle currentLocale={locale}>
      <TransformText
        className='select-none font-medium'
        first={locale === 'en' ? 'EN' : '中文'}
        last={locale === 'en' ? '中文' : 'EN'}
      />
    </LocaleSwitcherToggle>
  );
}
