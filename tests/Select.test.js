// Select.test.js
import { describe, it, expect } from 'vitest';
import { Select } from '../src/core/Select.js';

describe('Select', () => {
  it('should render correctly', () => {
    const instance = new Select({ name: 'select', label: 'Choose one' });
    expect(instance.render()).toMatch(/<.*>/);
  });
});
