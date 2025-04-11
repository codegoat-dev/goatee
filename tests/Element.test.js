// Element.test.js
import { describe, it, expect } from 'vitest';

describe('Element', () => {
  it('should not instantiate directly', () => {
    expect(() => {
      new (class extends Element {})();
    }).toThrow();
  });
});
