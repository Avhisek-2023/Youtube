import Channel from "../model/channel.js";

export const storeChannel = async (req, res) => {
  const { name, description } = req.body;
  console.log(name, description);
};

export const getChannel = async (req, res) => {};

export const updateChannel = async (req, res) => {};

export const deleteChannel = async (req, res) => {};

export const subscribe = async (req, res) => {};

export const unsubscribe = async (req, res) => {};

export const getSubscribers = async (req, res) => {};
