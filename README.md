# Mail Client
To run this file:
- clone the file 
- In your terminal go to each backend and frontend directory and run `npm install` to install the dependencies of each
- Again go to backend directory and run `node index.js`
- Go to frontend directory and run `npm run dev`
- Visit the generated localhost link

## Features at a glance:
### Backend
- Implemented by Express library on Node js runtime
- Uses MongoDB, implemented using mongoose, to store data in two schema- User & Email
- Valid Input checks implemented via Zod library
- Makes use of JWTs to authenticate the user in the middlewares
- facility to sign up and sign in
- routes to facilitate frontend

### Frontend
- Implemented by React that was intitated with vite
- Styled by tailwind css
- makes of react router dom to navigate routes effectively
- has sign up , sign in , inbox and compose pages
- connected to backend via axios
