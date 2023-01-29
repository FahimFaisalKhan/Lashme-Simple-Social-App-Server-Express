# Live-Server: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/

## These are some demo api calls you can make:

### To follow/unfollow user you need to be logged in, otherwise follow/unfollow routes wont work. So, I suggest you first create a user and then login.

### Follow the steps in No. 1 & No. 2 instructions

#### 1. To create a user

#### http://localhost:5000/users

#### Method: Post

#### Inside request body add the following parameters :

##### username

##### password

##### fullname

##### email

#### 2. To Login

#### http://localhost:5000/users/login

#### Method: Post

#### Inside request body add the following parameters :

##### password

##### email

#### 3. Retrieve a specific user by username

#### http://localhost:5000/users/< username >/

#### E.g: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/mofizz

#### Method: Get

#### 4. Retrieve a list of followers for a specific user

#### http://localhost:5000/users/< username >/followers

#### E.g: http://localhost:5000/users/mofizz/followers

#### Method: Get

#### 5. Retrieve a list of users a specific user is following

#### http://localhost:5000/users/< username >/following

#### E.g: http://localhost:5000/users/mofizz/following

#### Method: Get

#### 6. Follow a specific user

#### http://localhost:5000/users/< username >/follow

#### E.g: http://localhost:5000/users/kkkhg/follow

#### Method: Post

#### 7. Unfollow a specific user

#### http://localhost:5000/users/< username >/follow

#### E.g: http://localhost:5000/users/kkkhg/follow

#### Method: Delete
