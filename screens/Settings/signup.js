import { Auth } from 'aws-amplify';

async function signUp(email) {
  const username = email;
  const randomstring = Math.random().toString(36).slice(-8);
  const password = randomstring;
  // TODO: company settings refactor
  //
  // 1. get ID create user with that ID in Dynamo
  // 2. send email to email with password and change password link
  // 3.

  // TWEE
  // 1. Move referencebuilder.com domain from greenhost to aws route
  // 2. set up Simple Email Service AWS
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
    });
    // console.log({ user });
    return user;
  } catch (error) {
    console.log('error signing up:', error);
    return Promise.reject(error);
  }
}

export default {
  signUp,
};
