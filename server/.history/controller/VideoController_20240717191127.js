import video from "../model/video.js";

export const uploadVideo = async (req, res) => {
  //   console.log(req.file);
  const { video_title, uploader, video_channel } = req.body;
  const { originalname: file_name, mimetype: file_type } = { ...req.file };
};
