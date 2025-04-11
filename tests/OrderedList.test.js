// OrderedList.test.js
import { describe, it, expect } from 'vitest';
import { OrderedList } from '../src/core/OrderedList.js';

describe('OrderedList', () => {
  it('should render correctly', () => {
    const instance = new OrderedList();
    expect(instance.render()).toMatch(/<.*>/);
  });
});
