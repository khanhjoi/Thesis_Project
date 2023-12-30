const addRating = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
}

const deleteRating = async (req, res) => {
  try {
    return res.status(200).json("success");
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export default { addRating }