import { Client, Databases, ID, Query } from 'appwrite';
import config from '../config/config';
import { USERSTATUES } from '../constants';

class Service {
  client = new Client();
  database;

  constructor(params) {
    this.client.setEndpoint(params.endpoint).setProject(params.projectID);
    this.database = new Databases(this.client);
  }

  async CreatePost({ title, contenet, image, status, UserId }) {
    try {
      const post = await this.database.createDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionID,
        ID.unique(),
        {
          title,
          contenet,
          image,
          status,
          UserId,
        }
      );
      if (post) {
        return { msg: 'Post created successfully', status: 200, post };
      } else {
        throw new Error('Error while creating the Post');
      }
    } catch (error) {
      throw new Error('Error while creating the Post ', error);
    }
  }

  async DeletePost({ postId }) {
    try {
      const result = await this.database.deleteDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionID,
        postId
      );
      if (result) {
        return { msg: 'Post deleted successfully', status: 200, post: result };
      } else {
        throw new Error('Error while deleting the Post');
      }
    } catch (error) {
      throw new Error('Error while deleting the Post ', error);
    }
  }

  async UpdatePost({ postId, title, contenet, image, status }) {
    try {
      const post = await this.database.updateDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionID,
        postId,
        {
          title,
          contenet,
          image,
          status,
        }
      );
      if (post) {
        return { msg: 'Post updated successfully', status: 200, post };
      } else {
        throw new Error('Error while updating the Post');
      }
    } catch (error) {
      throw new Error('Error while updating the Post ', error);
    }
  }

  async GetPost({ postId }) {
    try {
      const result = await this.database.getDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionID,
        postId
      );
      if (result) {
        return { msg: 'Post fetched successfully', status: 200, post: result };
      } else {
        throw new Error('Error while fetching the Post');
      }
    } catch (error) {
      throw new Error('Error while fetching the Post ', error);
    }
  }

  async GetPosts() {
    try {
      const result = await this.database.listDocuments(
        config.appwriteDataBaseId,
        config.appwriteCollectionID,
        [Query.equal('status', USERSTATUES.TRUE)]
      );
      if (result) {
        return { msg: 'Posts fetched successfully', status: 200, posts: result };
      } else {
        throw new Error('Error while fetching the Posts');
      }
    } catch (error) {
      throw new Error('Error while fetching the Posts ', error);
    }
  }
}

const service = new Service();

export default service;
