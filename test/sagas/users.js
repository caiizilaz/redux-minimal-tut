import { call, put } from 'redux-saga/effects'
import assert from 'assert'

import { usersFetchList, usersAdd } from '../../src/sagas/users'
import ApiUsers from '../../src/api/users'

describe('Users saga', () => {
  describe('usersFetchList()', () => {
    const generator = usersFetchList()
    it('should return the ApiUsers.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiUsers.getList))
    });
    it('should return the users.fetchListSuccess action', () => {
      assert.deepEqual(generator.next().value,
        put({ type: 'users.fetchListSuccess', users: undefined }))
    });
    it('should be finished', () => {
      assert.equal(generator.next().done, true)
    });
  });
  describe('usersAdd()', () => {
    const generator = usersAdd()
    it('should return true', () => {

    });
  });
})
