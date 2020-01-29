import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'phone'],
    });
    return res.json(users);
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
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: 'Usuário não cadastrado no sistema',
      });
    }

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({
          error: 'Esse email já está sendo utilizado por outro usuário.',
        });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    const { id, name, phone } = await user.update(req.body);

    return res.json({ id, name, email, phone });
  }

  async delete(req, res) {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      return res.json({
        error: 'Erro ao deletar o usuário',
      });
    }

    return res.json({
      message: 'Usuário deletado com sucesso',
    });
  }
}
export default new UserController();
