import NGO from "../models/NGO.model.js";

export const createNGO = async (req, res) => {
  try {
    const ngo = await NGO.create(req.body);
    res.json({ success: true, ngo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNGOs = async (req, res) => {
  try {
    const ngos = await NGO.find();
    res.json({ success: true, ngos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNGOById = async (req, res) => {
  try {
    const ngo = await NGO.findById(req.params.id);
    if (!ngo) return res.status(404).json({ message: "Not found" });
    res.json({ success: true, ngo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateNGO = async (req, res) => {
  try {
    const updatedNGO = await NGO.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedNGO) {
      return res.status(404).json({ message: "NGO not found" });
    }

    res.json({ success: true, ngo: updatedNGO });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteNGO = async (req, res) => {
  try {
    const deletedNGO = await NGO.findByIdAndDelete(req.params.id);

    if (!deletedNGO) {
      return res.status(404).json({ message: "NGO not found" });
    }

    res.json({ success: true, message: "NGO deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
