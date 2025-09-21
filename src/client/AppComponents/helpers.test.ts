import { describe, expect, test } from 'vitest';

import { decodeString, encodeString } from './helpers';

describe('encodeString and decodeString', () => {
  const phoneCases = [
    { label: 'Polish', phone: '+48 123 456 789' },
    { label: 'Polish', phone: '+48 506 042 937' },
    { label: 'German', phone: '+49 151 23456789' },
    { label: 'French', phone: '+33 6 12 34 56 78' },
    { label: 'UK', phone: '+44 20 7946 0958' },
  ];

  phoneCases.forEach(({ label, phone }) => {
    test(`should encode and decode a ${label} phone number`, () => {
      const encoded = encodeString(phone);
      console.log('encoded:', encoded);
      const decoded = decodeString(encoded);

      expect(encoded).not.toBe(phone);
      expect(decoded).toBe(phone);
    });
  });

  const emailCases = [
    { label: 'Gmail', email: 'example@gmail.com' },
    { label: 'Outlook', email: 'user@outlook.com' },
    { label: 'Yahoo', email: 'test@yahoo.co.uk' },
    { label: 'Custom Domain', email: 'contact@mydomain.eu' },
  ];
  emailCases.forEach(({ label, email }) => {
    test(`should encode and decode a ${label} email address`, () => {
      const encoded = encodeString(email);
      const decoded = decodeString(encoded);

      expect(encoded).not.toBe(email);
      expect(decoded).toBe(email);
    });
  });
});
