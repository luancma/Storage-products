import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll().then(user => user);
    return res.json({ users });
  }

  async store(req, res) {
    const storagedUsers = await User.findOne({
      where: { email: req.body.email },
    });

    if (storagedUsers) {
      return res.status(422).json({
        error: 'User already exists',
      });
    }

    const { name, email, phone } = await User.create(req.body);

    return res.status(201).json({
      name,
      email,
      phone,
    });
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    const { email, name, phone } = await user.update(req.body);

    return res.status(200).json({ name, email, phone });
  }
}
export default new UserController();
