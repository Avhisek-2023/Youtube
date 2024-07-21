import video from "../model/video.js";

export const uploadVideo = async (req, res) => {
  //   console.log(req.file);
  const { video_title, uploader, video_channel } = req.body;
  const {
    originalname: file_name,
    mimetype: file_type,
    size: file_size,
    path: file_path,
  } = { ...req.file };
  try {
    const newVideo = await video.create({
        video_title,
        file_name,
        file_type,
        file_path,
        file_size,
        uploader,
        video_channel,
      });
    })
  } catch (error) {
    return res.status(401).json({ Message: error });
  }
};
