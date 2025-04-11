// Label.test.js
import { describe, it, expect } from 'vitest';
import { Label } from '../src/core/Label.js';

describe('Label', () => {
  it('should render correctly', () => {
    const instance = new Label('Label Text', 'input-id');
    expect(instance.render()).toMatch(/<.*>/);
  });
});
