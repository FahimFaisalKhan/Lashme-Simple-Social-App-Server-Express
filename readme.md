# Live-Server: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/

## These are some demo api calls you can make:

### To follow/unfollow user you need to be logged in, otherwise follow/unfollow routes wont work. So, I suggest you first create a user and then login.

### Follow the steps in No. 1 & No. 2 instructions

#### 1. To create a user

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users

#### Method: Post

#### Inside request body add the following parameters :

##### username

##### password

##### fullname

##### email

#### 2. To Login

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/login

#### Method: Post

#### Inside request body add the following parameters :

##### password

##### email

#### 3. Retrieve a specific user by username

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/< username >/

#### E.g: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/mofizz

#### Method: Get

#### 4. Retrieve a list of followers for a specific user

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/< username >/followers

#### E.g: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/mofizz/followers

#### Method: Get

#### 5. Retrieve a list of users a specific user is following

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/< username >/following

#### E.g: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/mofizz/following

#### Method: Get

#### 6. Follow a specific user

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/< username >/follow

#### E.g: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/kkkhg/follow

#### Method: Post

#### 7. Unfollow a specific user

#### https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/< username >/follow

#### E.g: https://lashme-simple-social-app-fahimfaisalkhan.vercel.app/users/kkkh/follow

#### Method: Delete
