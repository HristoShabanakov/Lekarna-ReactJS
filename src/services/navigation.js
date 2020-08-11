const getNavigation = (user) => {

    const authLinks = [
     {
      title: "Home",
      link: "/"
     },
     {
        title: "Offers",
        link: "/offers"
       },
       {
        title: "Pharmacies",
        link: "/pharmacies"
       },
    ]

    const guestLinks = [
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