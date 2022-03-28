/* eslint-disable @typescript-eslint/no-explicit-any */
import {factory} from '../factory';
import {Factory} from '../classes/Factory';
import {Faker} from '../../..';
import {randomLowerCase} from '@/data/utilities/randomLowerCase';
import {randomValueFromArray} from '@/data/utilities/randomValueFromArray';

interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
}

const roles = ['admin', 'user'] as User['role'][];

describe('factory extension tests', () => {
  let faker: Faker.Instance;

  beforeEach(() => {
    faker = Faker();
    faker.extend('factory', factory);
  });

  describe('make tests', () => {
    it('should generate data based on factory with no arguments', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = UserFactory.make();

      expect(typeof data.id).toBe('string');
      expect(typeof data.name).toBe('string');
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should overwrite generated data based on factory', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = UserFactory.make({id: '123'});

      expect(data.id).toBe('123');
      expect(typeof data.name).toBe('string');
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should generate N objects based on factory if count is defined', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = faker.number(2, 5);
      const list = UserFactory.make(count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect(typeof data.name).toBe('string');
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });
    });

    it('should generate an array with a single object based on factory if count is 1', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = 1;
      const list = UserFactory.make(count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect(typeof data.name).toBe('string');
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });

      it('should generate N objects with overwritten data based on factory if count is defined', async () => {
        const UserFactory = faker.factory<User>((fake) => {
          return {
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          };
        });

        const count = faker.number(2, 5);
        const list = UserFactory.make(count, {id: '123'});

        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(count);
        list.forEach((data) => {
          expect(data.id).toBe('123');
          expect(typeof data.name).toBe('string');
          expect(typeof data.role).toBe('string');
          expect(roles).toContain(data.role);
        });
      });
    });
  });

  describe('only tests', () => {
    it('should generate data based on factory with no arguments and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = UserFactory.only(['id', 'role']);

      expect(typeof data.id).toBe('string');
      expect((data as any).name).toBeUndefined();
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should overwrite generated data based on factory and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = UserFactory.only(['id', 'role'], {id: '123'});

      expect(data.id).toBe('123');
      expect((data as any).name).toBeUndefined();
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should generate N objects based on factory if count is defined and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = faker.number(2, 5);
      const list = UserFactory.only(['id', 'role'], count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect((data as any).name).toBeUndefined();
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });
    });

    it('should generate an array with a single object based on factory if count is 1 and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = 1;
      const list = UserFactory.only(['id', 'role'], count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect((data as any).name).toBeUndefined();
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });

      it('should generate N objects with overwritten data based on factory if count is defined and only return selected fields', async () => {
        const UserFactory = faker.factory<User>((fake) => {
          return {
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          };
        });

        const count = faker.number(2, 5);
        const list = UserFactory.only(['id', 'role'], count, {id: '123'});

        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(count);
        list.forEach((data) => {
          expect(data.id).toBe('123');
          expect((data as any).name).toBeUndefined();
          expect(typeof data.role).toBe('string');
          expect(roles).toContain(data.role);
        });
      });
    });
  });

  describe('except tests', () => {
    it('should generate data based on factory with no arguments and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = UserFactory.except(['name']);

      expect(typeof data.id).toBe('string');
      expect((data as any).name).toBeUndefined();
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should overwrite generated data based on factory and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = UserFactory.except(['name'], {id: '123'});

      expect(data.id).toBe('123');
      expect((data as any).name).toBeUndefined();
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should generate N objects based on factory if count is defined and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = faker.number(2, 5);
      const list = UserFactory.except(['name'], count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect((data as any).name).toBeUndefined();
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });
    });

    it('should generate an array with a single object based on factory if count is 1 and only return selected fields', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = 1;
      const list = UserFactory.except(['name'], count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect((data as any).name).toBeUndefined();
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });

      it('should generate N objects with overwritten data based on factory if count is defined and only return selected fields', async () => {
        const UserFactory = faker.factory<User>((fake) => {
          return {
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          };
        });

        const count = faker.number(2, 5);
        const list = UserFactory.except(['name'], count, {id: '123'});

        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(count);
        list.forEach((data) => {
          expect(data.id).toBe('123');
          expect((data as any).name).toBeUndefined();
          expect(typeof data.role).toBe('string');
          expect(roles).toContain(data.role);
        });
      });
    });
  });

  describe('persist tests', () => {
    it('should generate data based on factory with no arguments', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = await UserFactory.persist();

      expect(typeof data.id).toBe('string');
      expect(typeof data.name).toBe('string');
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should overwrite generated data based on factory', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data = await UserFactory.persist({id: '123'});

      expect(data.id).toBe('123');
      expect(typeof data.name).toBe('string');
      expect(typeof data.role).toBe('string');
      expect(roles).toContain(data.role);
    });

    it('should generate N objects based on factory if count is defined', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = faker.number(2, 5);
      const list = await UserFactory.persist(count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect(typeof data.name).toBe('string');
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });
    });

    it('should generate an array with a single object based on factory if count is 1', async () => {
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const count = 1;
      const list = await UserFactory.persist(count);

      expect(Array.isArray(list)).toBe(true);
      expect(list.length).toBe(count);
      list.forEach((data) => {
        expect(typeof data.id).toBe('string');
        expect(typeof data.name).toBe('string');
        expect(typeof data.role).toBe('string');
        expect(roles).toContain(data.role);
      });

      it('should generate N objects with overwritten data based on factory if count is defined', async () => {
        const UserFactory = faker.factory<User>((fake) => {
          return {
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          };
        });

        const count = faker.number(2, 5);
        const list = await UserFactory.persist(count, {id: '123'});

        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(count);
        list.forEach((data) => {
          expect(data.id).toBe('123');
          expect(typeof data.name).toBe('string');
          expect(typeof data.role).toBe('string');
          expect(roles).toContain(data.role);
        });
      });
    });
  });

  describe('onPersist tests', () => {
    it('should call the onPersist option with the generated data', async () => {
      const onPersist = vi.fn();
      const UserFactory = faker.factory<User>({
        onPersist,
        factory: (fake) => ({
          id: randomLowerCase(fake),
          name: randomLowerCase(fake),
          role: randomValueFromArray(fake, roles),
        }),
      });

      const data = await UserFactory.persist();

      expect(onPersist).toHaveBeenCalledWith(data);
    });

    it('should overwrite the the generated data based on the onPersist option return', async () => {
      const onPersist = vi.fn(async () => ({id: '123'}));
      const UserFactory = faker.factory<User>({
        onPersist,
        factory: (fake) => ({
          id: randomLowerCase(fake),
          name: randomLowerCase(fake),
          role: randomValueFromArray(fake, roles),
        }),
      });

      const data = await UserFactory.persist();

      expect(data.id).toBe('123');
    });
  });

  describe('seed tests', () => {
    it('should return consistent values with a given seed', () => {
      const seed = 123;
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data1 = UserFactory.seed(seed).make();
      const data2 = UserFactory.seed(seed).make();

      expect(data1).toEqual(data2);
    });

    it('should not return consistent values after unseeding', () => {
      const seed = 123;
      const UserFactory = faker.factory<User>((fake) => ({
        id: randomLowerCase(fake),
        name: randomLowerCase(fake),
        role: randomValueFromArray(fake, roles),
      }));

      const data1 = UserFactory.seed(seed).make();
      const data2 = UserFactory.seed(seed).unseed().make();

      expect(data1).not.toEqual(data2);
    });
  });

  describe('variants tests', () => {
    type UserFactoryVariants = 'admin' | 'john';

    describe('variant definition tests', () => {
      it('should define methods for each variant', () => {
        const UserFactory = faker.factory<User, UserFactoryVariants>({
          factory: (fake) => ({
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          }),
          variants: {
            admin: () => ({role: 'admin'}),
            john: () => ({name: 'john'}),
          },
        });

        expect(UserFactory.admin).toBeInstanceOf(Factory);
        expect(UserFactory.john).toBeInstanceOf(Factory);
      });

      it('should recursively define methods for each variant in the variants factories', () => {
        const UserFactory = faker.factory<User, UserFactoryVariants>({
          factory: (fake) => ({
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          }),
          variants: {
            admin: () => ({role: 'admin'}),
            john: () => ({name: 'john'}),
          },
        });

        expect(UserFactory.admin.john).toBeInstanceOf(Factory);
        expect((UserFactory.admin as any).admin).not.toBeInstanceOf(Factory);

        expect(UserFactory.john.admin).toBeInstanceOf(Factory);
        expect((UserFactory.john as any).john).not.toBeInstanceOf(Factory);
      });
    });

    describe('variant combination tests', () => {
      it('should combine variant overwrites', () => {
        const UserFactory = faker.factory<User, UserFactoryVariants>({
          factory: (fake) => ({
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          }),
          variants: {
            admin: () => ({role: 'admin'}),
            john: () => ({name: 'john'}),
          },
        });

        const data = UserFactory.admin.john.make();

        expect(typeof data.id).toBe('string');
        expect(data.name).toBe('john');
        expect(data.role).toBe('admin');
      });

      it('should not create multiple instances of variant factories', () => {
        const UserFactory = faker.factory<User, UserFactoryVariants>({
          factory: (fake) => ({
            id: randomLowerCase(fake),
            name: randomLowerCase(fake),
            role: randomValueFromArray(fake, roles),
          }),
          variants: {
            admin: () => ({role: 'admin'}),
            john: () => ({name: 'john'}),
          },
        });

        expect(UserFactory.admin).toBe(UserFactory.admin);
      });
    });
  });
});
