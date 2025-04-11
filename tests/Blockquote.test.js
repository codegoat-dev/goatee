// Blockquote.test.js
import { describe, it, expect } from 'vitest';
import { Blockquote } from '../src/core/Blockquote.js';

describe('Blockquote', () => {
  it('should render correctly', () => {
    const instance = new Blockquote('Sample text');
    expect(instance.render()).toMatch(/<.*>/);
  });
});
