import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import getConfig from '../../../../lib/config';
import { I18nLang, useLang } from '../../../../lib/i18n';

const { VITE_HASH_ROUTER } = getConfig();

const LangSwitcher = () => {
  const { langs, lang, setLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLangChange = (newLang: I18nLang) => {
    let newPath;

    // Update the URL with the new language, preserving the current path
    if (VITE_HASH_ROUTER === 'true') {
      // Adjust hash-based navigation
      newPath = window.location.hash.replace(`#/${lang}`, `/${newLang}`);
    } else {
      // Adjust path-based navigation
      newPath = window.location.pathname.replace(`/${lang}`, `/${newLang}`);
    }
    setIsOpen(false);
    setLang(newLang);
    navigate(newPath);
  };

  return (
    <div className='relative'>
      <button
        className={twMerge(
          'text-[22px] leading-normal font-normal text-onSecondary cursor-pointer',
          'hover:text-onPrimary hover:scale-105 transition-transform duration-200'
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        aria-label={`Current language: ${lang.toUpperCase()}. Click to change language.`}
      >
        {lang.toUpperCase()}
      </button>
      {isOpen && (
        <div
          className='absolute'
          onMouseLeave={() => setIsOpen(false)}
          role='listbox'
          aria-label='Language options'
        >
          {langs
            .filter(l => l !== lang)
            .map(l => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={twMerge(
                  'text-[22px] leading-normal font-thin cursor-pointer text-onTertiary',
                  'hover:text-onPrimary hover:scale-105 transition-transform duration-200'
                )}
                role='option'
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
