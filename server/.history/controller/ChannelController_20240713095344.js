import Channel from "../model/channel.js";

export const storeChannel = async (req, res) => {
  const { user_id, name, description } = req.body;
  try {
    const existingChannel = await Channel.findOne({ user_id });
    if (existingChannel) {
      return res.status(404).json({
        message: "Channel already exists",
      });
    } else {
      const newChannel = await Channel.create({ user_id, name, description });
      return res.status(200).json({ channel: newChannel });
    }
  } catch (error) {}
};

export const getChannel = async (req, res) => {};

export const updateChannel = async (req, res) => {};

export const deleteChannel = async (req, res) => {};

export const subscribe = async (req, res) => {};

export const unsubscribe = async (req, res) => {};

export const getSubscribers = async (req, res) => {};
