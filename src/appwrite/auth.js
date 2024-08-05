import { Account, Client, ID } from 'appwrite';
import config from '../config/config';

class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectID);
    this.account = new Account(this.client);
    console.log(this.client);
  }

  async CreateAccount({ email, password, name }) {
    try {
      const UserAccount = await this.account.create(ID.unique(), email, password, name);
      console.log(UserAccount);
      if (UserAccount) {
        return { msg: 'Account created successfully', status: 200, user: UserAccount };
      } else {
        throw new Error('Error while creating the Account');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating the Account ', error);
    }
  }

  async login({ email, password }) {
    try {
      const UserAccount = await this.account.createEmailPasswordSession(email, password);
      if (UserAccount) {
        return { msg: 'Logged in successfully', status: 200, user: UserAccount };
      } else {
        throw new Error('Error while logging in');
      }
    } catch (error) {
      throw new Error('Error while logging in ', error);
    }
  }

  async GetCurrentUser() {
    try {
      const UserAccount = await this.account.get();
      if (UserAccount) {
        return { msg: 'User fetched successfully', status: 200, user: UserAccount };
      } else {
        throw new Error('Error while fetching the User');
      }
    } catch (error) {
      throw new Error('Error while fetching the User ', error);
    }
  }

  async Logout() {
    try {
      const UserAccount = await this.account.deleteSessions();
      if (UserAccount) {
        return { msg: 'Logged out successfully', status: 200, user: UserAccount };
      } else {
        throw new Error('Error while logging out');
      }
    } catch (error) {
      throw new Error('Error while logging out ', error);
    }
  }
}

const authservice = new Authservice();
export default authservice;
