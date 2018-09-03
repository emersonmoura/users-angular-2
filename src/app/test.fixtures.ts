import { User } from './core/models/user.model';

export const createUser = (uuid: string = ''): User => {
    return {
      firstName: 'Wilbert',
      lastName: 'Ayaz',
      uuid: uuid,
      login: 'login'
    }
  }