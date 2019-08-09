import axios from 'axios';

const Auth = () => ({
  login: async (req) => {
    // TODO: validate this is an email here and return an error if it's not
    const login_key = req.body.username;
    // TODO: validate this is not empty and return an error if it's not
    const { password } = req.body;

    return axios
      .post(
        `${process.env.ONE_DEGREE_AUTH_URL}/api/session`,
        { session: { login_key, password } },
        {
          headers: {
            'Content-Type': 'application/json',
            OneDegreeSource: 'asylumconnect',
          },
        },
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (process.env.development && error.status === 404) {
          return {
            jwt: 'fake token for dev',
          };
        }
        return error;
      });
  },
});

export default Auth;
