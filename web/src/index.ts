import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const user = User.buildUser({ name: 'Joana', age: 23 });
// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw Error('Root element not found');
// }
