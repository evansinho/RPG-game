import { setUser, getUser } from '../user/user';

describe('Tests for getting default user name', () => {
  test('Should return Anonymus as a default name', () => {
    expect(getUser()).toBe('Anonymus');
  });
});

describe('Tests for setting a new user name', () => {
  test('Should return that the user name was succesfully stored', () => {
    expect(setUser('Evans')).toBe('User set to: Evans');
  });
});

describe('Tests for getting new users name', () => {
  test('Should return Evans', () => {
    expect(getUser()).toBe('Evans');
  });
});
