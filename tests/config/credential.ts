//This is example credential file. Please create your own .env file in the root directory and add your credentials there. Do not forget to add .env file in .gitignore to avoid pushing your credentials to the repository.
import dotenv from 'dotenv';
dotenv.config();

export const credentials = {
  username: process.env.STANDARD_USER!,
  password: process.env.PASSWORD!,
  usernameLocked: process.env.USERNAMELOCKED!,
  usernameProblem: process.env.USERNAMEPROBLEM!,
  usernamePerformance: process.env.USERNAMEPERFORMANCE!,
};