const users = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'ddd@gmail.com',
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'fff@gmail.com',
  },
  {
    id: 3,
    first_name: 'John',
    last_name: 'Doe',
    email: 'ggg@gmail.com',
  },
];

export default function handler(req, res) {
  res.status(200).json(users);
}
