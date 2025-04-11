// Option.test.js
import { describe, it, expect } from 'vitest';
import { Option } from '../src/core/Option.js';

describe('Option', () => {
  it('should render correctly', () => {
    const instance = new Option('value1', 'Display Text');
    expect(instance.render()).toMatch(/<.*>/);
  });
});
