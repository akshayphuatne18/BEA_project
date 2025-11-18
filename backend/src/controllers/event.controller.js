import Event from "../models/Event.model.js";

export const createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    ngoId: req.user.id
  });

  res.json({ message: "Event created", event });
};

export const getEvents = async (req, res) => {
  const events = await Event.find().populate("ngoId");
  res.json(events);
};

export const registerForEvent = async (req, res) => {
  await Event.findByIdAndUpdate(req.params.eventId, {
    $addToSet: { volunteers: req.user.id }
  });

  res.json({ message: "Registered for event" });
};
