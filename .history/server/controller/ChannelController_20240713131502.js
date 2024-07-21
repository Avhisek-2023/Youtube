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
      return res.status(200).json({ channel: newChannel });
    }
  } catch (error) {
    return res.status(401).json({ Message: error });
  }
};

export const getChannel = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const channel = Channel.findOne({ id });
  console.log(channel);
  //   if (!channel) {
  //     return res.status(404).json("Channel Not Found");
  //     4;
  //   }
  //   return res.status(200).json({ data: channel });
  // } catch (error) {
  //   return res.status(401).json({ Message: error });
  // }
};

export const updateChannel = async (req, res) => {};

export const deleteChannel = async (req, res) => {};

export const subscribe = async (req, res) => {};

export const unsubscribe = async (req, res) => {};

export const getSubscribers = async (req, res) => {};
