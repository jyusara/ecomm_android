/**
 * @format
 */

import 'react-native';
import {authLogin,authCheckStatus,registerUser, returnUserToken} from '../src/actions/auth/auth';
import { tesloApi } from "../src/config/api/tesloApi";
import {afterEach, describe, expect, it, jest, test} from '@jest/globals';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);


jest.mock("../src/config/api/tesloApi")

const mockAuthResponse = {
  id: "123",
  email: "test@example.com",
  fullName: "John Doe",
  isActive: true,
  roles: ["user" as string],
  token: "fake-token",
};

describe('Auth functions',() => {

  afterEach(() => {
    jest.clearAllMocks(); // Limpia mocks después de cada prueba
  });

  test("returnUserToken debería devolver el usuario y token correctos", () => {
    const result = {
      user: {
        id: "123",
        email: "test@example.com",
        fullName: "John Doe",
        isActive: true,
        roles: ["user"],
      },
      token: "fake-token",
    };

    expect(returnUserToken(mockAuthResponse)).toEqual(result);
    
  });

})