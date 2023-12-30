const register = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

const login = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

const logout = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

const update = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

const order = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

export default { register, login, logout, update, order };