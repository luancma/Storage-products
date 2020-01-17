class UserController {
  async index(req, res) {
    return res.json({ message: 'Ok' });
  }
}
export default new UserController();
