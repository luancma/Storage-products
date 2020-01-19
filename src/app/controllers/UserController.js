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

    const user = await User.create(req.body);

    return res.status(200).json();
  }
}
export default new UserController();
