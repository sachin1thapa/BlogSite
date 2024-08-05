import { Client, ID, Storage } from 'appwrite';
import config from '../config/config';

class FileStorage {
  client = new Client();
  storage;

  constructor(params) {
    this.client.setEndpoint(params.endpoint).setProject(params.projectID);
    this.storage = new Storage(this.client);
  }

  async UploadFile(file) {
    try {
      const result = await this.storage.createFile(config.appwriteBucketId, ID.unique(), file);
      if (result) {
        return { msg: 'File uploaded successfully', status: 200, file };
      } else {
        throw new Error('Error while uploading the File');
      }
    } catch (error) {
      throw new Error('Error while uploading the File ', error);
    }
  }

  async DeleteFile(fileId) {
    try {
      const result = await this.storage.deleteFile(config.appwriteBucketId, fileId);
      if (result) {
        return { msg: 'File deleted successfully', status: 200, file: result };
      } else {
        throw new Error('Error while deleting the File');
      }
    } catch (error) {
      throw new Error('Error while deleting the File ', error);
    }
  }
   GetfilePreview(fileId) {
    try {
      const result =  this.storage.getFilePreview(config.appwriteBucketId, fileId);
      if (result) {
        return { msg: 'File Preview fetched successfully', status: 200, file: result };
      } else {
        throw new Error('Error while getting the File Preview');
      }
    } catch (error) {
      throw new Error('Error while getting the File Preview ', error);
    }
  }
}

const fileStorage = new FileStorage();

export default fileStorage;
