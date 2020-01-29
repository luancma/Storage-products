import Provider from '../models/Provider';
import Address from '../models/Address';

class ProviderController {
  async store(req, res) {
    const {
      name,
      fantasy_name,
      phone,
      code,
      street,
      number,
      neighborhood,
      complement,
      country,
      city,
      state,
      zip,
    } = req.body;

    const { id } = await Address.create({
      code,
      street,
      number,
      neighborhood,
      complement,
      country,
      city,
      state,
      zip,
    });

    if (!id) {
      return res.status(404).json({
        error: 'Erro ao criar usuário!',
      });
    }

    const provider = await Provider.create({
      name,
      fantasy_name,
      phone,
      code,
      address_id: id,
    });

    if (!provider) {
      return res.status(404).json({
        error: 'Erro ao criar usuário!',
      });
    }

    return res.json({
      name,
      fantasy_name,
      phone,
      code,
      street,
      number,
      neighborhood,
      complement,
      country,
      city,
      state,
      zip,
    });
  }

  async index(req, res) {
    const providers = await Provider.findAll({
      attributes: ['name', 'fantasy_name', 'phone', 'code'],
      include: [
        {
          model: Address,
          attributes: [
            'street',
            'number',
            'neighborhood',
            'complement',
            'country',
            'city',
            'state',
            'zip',
          ],
        },
      ],
    });
    return res.json({ providers });
  }

  async update(req, res) {
    const provider = await Provider.findByPk(req.params.id);

    const updateProvider = await provider.update(req.body);

    if (!updateProvider) {
      return res.status(401).json({
        error: 'Erro para atualizar usuário',
      });
    }

    return res.json({ message: 'Usuário atualizado com sucesso' });
  }
}

export default new ProviderController();
