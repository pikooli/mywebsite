import { createNewPlayerSet } from './createNewPlayerSet';
import { SLIM_COLORS } from 'puyopuyo/constants';
describe('createNewPlayerSet', () => {
  test(`
        Given initial state
        When createNewPlayerSet is called
        Then it should return the a set of slim with a position and a color`, () => {
    const result = createNewPlayerSet();

    expect(result[0].position).toBe(2);
    expect(SLIM_COLORS).toContain(result[0].color);
    expect(result[1].position).toBe(8);
    expect(SLIM_COLORS).toContain(result[1].color);
  });
});
