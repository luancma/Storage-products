import Address from '../models/Address';

class AddressController {
  async show(req, res) {
    const address = await Address.findByPk(req.params.id);

    if (!address) {
      return res.status(404).json({
        error: 'Erro ao encontrar o ID do usuário',
      });
    }

    const {
      id,
      street,
      number,
      neighborhood,
      complement,
      country,
      city,
      state,
      zip,
    } = address;

    return res.json({
      id,
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

  async update(req, res) {
    const address = await Address.findByPk(req.params.id);

    const updateAddress = await address.update(req.body);

    if (!updateAddress) {
      return res.status(401).json({
        error: 'Erro ao atualizar o endereço!',
      });
    }

    return res.json({
      message: 'Endereço atualizado com sucesso',
    });
  }
}

export default new AddressController();
