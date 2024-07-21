import Channel from "../model/channel.js";

export const storeChannel = async (req, res) => {
  const { user_id, name, description } = req.body;
  console.log(user_id, name, description);
  try {
    const existingChannel = await Channel.findOne({ user_id });
    if (existingChannel) {
      return res.status(404).json({
        message: "Channel already exists",
      });
    } else {
      const newChannel = await Channel.create({ user_id, name, description });
      return res.status(200).json({ data: newChannel });
    }
  } catch (error) {
    return res.status(401).json({ Message: error });
  }
};

export const getChannel = async (req, res) => {
  const { user_id } = req.body;
  try {
    const channel = await Channel.findById(user_id);
    console.log(channel);
    if (!channel) {
      return res.status(404).json("Channel Not Found");
    }
    return res.status(200).json({ data: channel });
  } catch (error) {
    return res.status(401).json({ Message: error });
  }
};

export const updateChannel = async (req, res) => {
  const id = req.params.id;
  try {
    const { name, description } = req.body;
    const existingChannel = await Channel.findById(id);
    if (!existingChannel) {
      return res.status(404).json({ message: "Channel does not exist" });
    }
    existingChannel.name = name;
    existingChannel.description = description;
    await existingChannel.save();
    return res.status(200).json({ data: existingChannel });
  } catch (error) {
    return res.status(401).json({ Message: error });
  }
};

export const deleteChannel = async (req, res) => {
  const id = req.params.id;
  try {
    const existingChannel = await Channel.findById(id);
    // console.log(ex);
    await existingChannel.destroy();
    return res.status(201).json({ message: "Deleted" });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const subscribe = async (req, res) => {
  const id = req.params.id;
  try {
    const existingChannel = await Channel.findById(id);
    if (!existingChannel) {
      return res.status(404).json({ message: "Channel does not exist" });
    }
    console.log(existingChannel);
    const addSubscriber = existingChannel.subscribers + 1;
    existingChannel.subscribers = addSubscriber;
    await existingChannel.save();
    return res.status(200).json({ data: existingChannel });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const unsubscribe = async (req, res) => {
  const id = req.params.id;
  try {
    const existingChannel = await Channel.findById(id);
    if (!existingChannel) {
      return res.status(404).json({ message: "Channel does not exist" });
    }
    console.log(existingChannel);
    const removeSubscriber = existingChannel.subscribers - 1;
    existingChannel.subscribers = removeSubscriber;
    await existingChannel.save();
    return res.status(200).json({ data: existingChannel });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const getSubscribers = async (req, res) => {
  const id = req.params.id;
  try {
    const existingChannel = await Channel.findById(id);
    return res.status(201).json({ subscribers: existingChannel.subscribers });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
