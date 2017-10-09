import assert from 'assert'
import users from '../../src/reducers/users'

describe('Users reducer', () => {
  describe('add()', () => {
    it('should return a new user array element', () => {
      const state = {
        list: [
          {
            id: 1,
            username: 'Some name',
            job: 'Some job',
          }
        ]
      }
      const action = {
        type: 'users.add',
        id: 2,
        username: 'Other name',
        job: 'Other job'
      }
      const expected = {
        list: [
          {
            id: 1,
            username: 'Some name',
            job: 'Some job',
          },
          {
            id: 2,
            username: 'Other name',
            job: 'Other job'
          }
        ]
      }
      assert.deepEqual(users(state, action), expected)
    });
  });
});