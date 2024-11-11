# Intern Challenge
## How to Setup the Project
To run this code on your computer, follow these steps:  
1. Copy the 'clone' link from the **<> Code** button
2. Run `git clone <copied link>` in the command line to copy the repo down to your local computer
3. Run `cd Intern-Challenge` to switch to the repo's folder
4. Run `npm install` in the command line to install any dependencies you don't have installed globally
used
5. Create a .env file in the top-level of your folder
6. In the .env file, insert this code:    
    `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/<database name>"`   
7. Run  the following commands in the command line to add prisma and initialize the database:  
    `npm install prisma --save-dev`  
    `npx prisma migrate dev --name init`  
8. Run `npm run seed` in the command line to seed the database  
9. Run `npm run dev` in the command line to start the server  
10. Open the app on your localhost at the port you specified!  

## Known Issues
- Data returned as undefined on frontend, likely because of a bad reducer
