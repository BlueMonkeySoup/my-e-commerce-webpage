export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};

// CHECK IF AUTH IS WORKING. SHOULD ONLY STAY IN LOGIN SCREEN
//   export const authConfig={
//     pages:{
//         signIn:"/login",
//     },
//     providers:[],
//     callbacks:{
//         authorized({auth,request}){
//             return false
//         }
//     }
//   }
