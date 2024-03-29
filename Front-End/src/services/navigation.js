

const getNavigation = (user) => {

    const authLinks = [
     {
      title: "Home",
      link: "/"
     },
     {
        title: "Add Medicine",
        link: "/medicine/add"
       },
       {
         title: "Dashboard",
         link: "/dashboard"
        },
       {
        title: "My Pharmacy",
        link: "/pharmacy"
       },
    ]

    const guestLinks = [
       {
         title: "Home",
         link: "/"
        },
          {
           title: "Login",
           link: "/login"
          },
          {
           title: "Register",
           link: "/register"
          },
       ]
       const loggedIn = user && user.loggedIn
       return loggedIn ? authLinks : guestLinks
}

export default getNavigation;