// Text.test.js
import { describe, it, expect } from 'vitest';
import { Text } from '../src/core/Text.js';

describe('Text', () => {
  it('should render correctly', () => {
    const instance = new Text('Sample text');
    expect(instance.render()).toMatch(/<.*>/);
  });
});
