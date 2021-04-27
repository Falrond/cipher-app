import * as base64 from './base64';

const PLAIN_TEXT = 'test message';

describe('Base64 cipher', () => {
  it('Should encrypt a message', () => {
    expect(base64.Encrypt(PLAIN_TEXT)).toBe('dGVzdCBtZXNzYWdl');
  });
  it('should decrypt an ecrypted message to its original form', () => {
    expect(base64.Decrypt(base64.Encrypt(PLAIN_TEXT))).toBe(PLAIN_TEXT);
  });
});
