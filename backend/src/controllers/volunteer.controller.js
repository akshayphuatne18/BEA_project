import Volunteer from "../models/Volunteer.model.js";

export const createVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);
    res.json({ success: true, volunteer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate("userId");
    res.json({ success: true, volunteers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id).populate("userId");
    if (!volunteer) return res.status(404).json({ message: "Not found" });
    res.json({ success: true, volunteer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
