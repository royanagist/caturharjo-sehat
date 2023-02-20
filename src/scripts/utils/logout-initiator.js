import { signOutUser } from '../firebase/auth';

const LogoutInitiator = {
  init({
    logout,
  }) {
    logout.addEventListener('click', this.signOutUser);
  },

  signOutUser,
};

export default LogoutInitiator;
