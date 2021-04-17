# Lekarna-ReactJS
Lekarna is content management application designed to organize medicines stock process of different pharmacies.
This project is the defense project for the React course (part of the JS Web Module at Software University).

## Technology stack


### Front End:

- React

- React-router

- Material-UI

- Surge



### Back End:

- REST API C# 3.1

- Entity Framework Core 3.1

- SQL Server

### Application functionality:

### 1.1 Public Part 

- Unregistered users have access only to following pages: Home, Register and Login.

### 1.2 Private Part

- After succesful login registered user have access to following pages: <b>Register Pharmacy<b>, <b>Add Medicine<b>, <b>Edit Medicine<b>, <b>Delete Medicine<b>, <b>Dashboard<b>.

- <b>Register Pharmacy<b> : Each user can register his own Pharmacy. If the current user has register his Pharmacy will have access ot My Pharmacy page where can edit his pharmacy data, otherwise the user has to register a pharmacy.<br>

- <b>Add Medicine<b> : Users can manage they own medicines stock supply by registering different medicines with properties of price and quantity.

- <b>Dashboard<b> : Displaying all available medicines in the user's pharmacy. Selecting each medicine with option to Update or Delete the medicine.
  
- <b>Edit Medicine<b> The user can modify selected medicine by editing it's : Name, Price and Quantity.
  
- <b>Delete Medicine<b> The user can remove selected medicine from pharmacy stock, by deleting it.
  
### 1.3 Under Development:

- Pharmacy order history 
- Multiple pharmacies for a single user
- Suppliers 
- User Audit Info

### Application Configurations

- Front End: Run "yarn install" or "npm install" to install all dependencies for the project.

- Back End: Check connection string in appsettings.json. If you don't use SQLEXPRESS you should replace "Server=.\SQLEXPRESS..." with "Server=.;...".


