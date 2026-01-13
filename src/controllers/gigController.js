import Gig from "../models/Gig.js";

export const getGigs = async (req, res) => {
  try {
    const { search } = req.query;

    const query = {
      status: "open",
    };

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const gigs = await Gig.find(query).sort({ createdAt: -1 });
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ message: "failed to fetch gigs" });
  }
};

export const createGig = async (req, res) => {
  try {
    const { title, description, budget } = req.body;

    if (!title || !description || budget === undefined) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const gig = await Gig.create({
      title,
      description,
      budget,
      ownerId: req.user.id,
    });

    res.status(201).json(gig);
  } catch (error) {
    res.status(500).json({ message: "failed to create gig" });
  }
};

export const getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    res.status(200).json(gig);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gig" });
  }
};
