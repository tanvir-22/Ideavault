import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({
  baseURL: process.env.CLIENT_URI,
  plugins: [jwtClient()],
});
export const { signIn, signUp, useSession } = createAuthClient();
