import { config, uploader } from 'cloudinary';
const cloudinaryConfig = () => config({
    cloud_name: "CLOUDINARY_URL=cloudinary://114476326471978:Iasc4N5EP7j03kSI5ZhbU6KRo-A@dzsysjjfq",
    api_key: 114476326471978,
    api_secret: "Iasc4N5EP7j03kSI5ZhbU6KRo-A",
});
export { cloudinaryConfig, uploader };