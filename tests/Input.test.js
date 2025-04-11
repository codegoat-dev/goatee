// Input.test.js
import { describe, it, expect } from 'vitest';
import { Input } from '../src/core/Input.js';

describe('Input', () => {
  it('should render correctly', () => {
    const instance = new Input({ name: 'email', type: 'email', label: 'Email' });
    expect(instance.render()).toMatch(/<.*>/);
  });
});
