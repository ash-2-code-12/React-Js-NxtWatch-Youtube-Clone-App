[Visit NxtWatch Site](https://nxtwatch007ash.ccbp.tech) 

<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

# Youtube Application Clone - NxtWatch

## 📜 Overview
The **Nxt Watch** is a dynamic and responsive web application built using **React JS**. It allows users to browse, search, save, and view videos
with ease. The app features Youtube application layout.

## 🌐 Pages  
- 🔑 **Login Page**  
- 🏠 **Home Page**  
- 📈 **Trending Page**  
- 🎮 **Gaming Page**  
- 💾 **Saved Videos Page**  
- 🎥 **Video Player Page**  
  
---

## 🚀 Features
- **Product Listing**: Display a variety of products with details like name, price, and image.
- **Search Videos**: Search and display video based on search query.
- **Trending Videos**: Get Trending videos to view.
- **Add to Saved Videos**: Add videos to the Saved Videos and view the Saved Videos.
- **Play Video**: Play Video in Video Player and get suggested Videos.
- **Responsive Design**: Works flawlessly on desktops, tablets, and mobile devices.

---

## 🛠️ Technologies Used
- **Frontend**: React JS, HTML, CSS, Bootstrap
- **State Management**: React State/Context API
- **Routing**: React Router
- **Storage**: Uses Local Storage to mimic backend kind of feel
- **Others**: Git (for version control) and NPM packages

---

## 📦 Production Packages

Here is the list of third-party packages used in production:

1. **@craco/craco**: Customizable Create React App configuration override.
2. **@testing-library/jest-dom**: Testing library for DOM assertions.
3. **@testing-library/react**: Testing utilities for React components.
4. **@testing-library/user-event**: Simulates user interactions for testing.
5. **chalk**: Terminal string styling library.
6. **date-fns**: Modern JavaScript date utility library.
7. **history**: Manages session history (used in routers like `react-router-dom`).
8. **jest-styled-components**: Jest utilities for testing styled-components.
9. **js-cookie**: Simplified cookie management in JavaScript.
10. **msw**: Mock Service Worker for testing API calls.
11. **react**: Core React library for building user interfaces.
12. **react-dom**: Rendering React components into the DOM.
13. **react-icons**: Icon library for React.
14. **react-loader-spinner**: React components for loading spinners.
15. **react-player**: React component for playing media files (videos, audio).
16. **react-router-dom**: Routing library for React applications.
17. **reactjs-popup**: Popup component library for React.
18. **styled-components**: Library for styling React components using CSS-in-JS.
19. **surge**: Static web publishing tool for deploying frontend projects.


### Design Files

Login Route</summary>
![image](https://github.com/user-attachments/assets/b04ad87d-01d4-4189-9990-dec68d63b4e5)

Home Route
![image](https://github.com/user-attachments/assets/856c55e3-a07c-4670-a450-6e738a90b9b9)

![image](https://github.com/user-attachments/assets/bcac8a04-0f3f-4c72-9982-7fd154d20846)
![image](https://github.com/user-attachments/assets/3f7fc288-14aa-4929-92e5-623c90dc756c)

Trending Route
![image](https://github.com/user-attachments/assets/16db14a4-aad4-403b-b3f2-0fb55da773e0)

![image](https://github.com/user-attachments/assets/b8f0726a-7425-4dbb-b9d9-230df35bd3a6)
![image](https://github.com/user-attachments/assets/7771adfd-94a7-4fb1-b1cf-926b923e7bfe)

Gaming Route
![image](https://github.com/user-attachments/assets/034610b1-adff-4e2f-a13b-b3133eb545b3)

![image](https://github.com/user-attachments/assets/139a6bc7-3c95-4d52-be70-5363410a6a93)
![image](https://github.com/user-attachments/assets/1e335fc1-8a9b-4820-8079-4e270265e816)

Saved Videos Route
![image](https://github.com/user-attachments/assets/e5680b60-9160-42b5-a6bc-9d6b24c12fe1)

![image](https://github.com/user-attachments/assets/69ccdb76-dbfd-466f-883d-5d2d1ef021a3)
![image](https://github.com/user-attachments/assets/cafb657e-2b0f-4045-bece-757d9fe51f74)

Video Player Route
![image](https://github.com/user-attachments/assets/31062a40-d25b-4133-9930-ac7756ee848b)

![image](https://github.com/user-attachments/assets/f489ec36-774f-4eca-800c-3e9996ab64f7)
![image](https://github.com/user-attachments/assets/63b58fdc-263b-4a54-9e0e-10abe42e0788)

Sidebar
![image](https://github.com/user-attachments/assets/5e84bb10-d8e4-491d-80ed-84bad98d6705)

Popup Design Files
![image](https://github.com/user-attachments/assets/e1d868a0-6a46-4a2e-877c-c54873b50e30)
![image](https://github.com/user-attachments/assets/b25cb297-9f3c-4046-9c4d-89bd92946742)

Not Found Route
![image](https://github.com/user-attachments/assets/705fe64e-ffec-4dfd-b929-e54183683ac0)

No Search Results View
![image](https://github.com/user-attachments/assets/bc227990-5de3-409a-896b-f23d1715f2cc)

API Failure View
![image](https://github.com/user-attachments/assets/00d5845d-c3f9-4bf0-8bb4-d899da0e8f36)

### Functionalities

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the Login Route
  - When an _authenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to open the Login Route, then the page should be navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password should be shown
  - When the **Show Password** checkbox is unchecked, then the password should be masked

- **Home Route**

  - When an _authenticated_ user opens the Home Route,
    - An HTTP GET request should be made to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with the initial value as an empty string
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Home Videos API URL**
    - When a non-empty value is provided in the search input and the search icon button is clicked
      - Make an HTTP GET request to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the search input
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
    - When the HTTP GET request made to the **Home Videos API URL** returns an empty list, then the [No Videos View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-light-theme-lg-output-v0.png) should be displayed
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route

- **Trending Route**

  - When an _authenticated_ user opens the Trending Route,
    - An HTTP GET request should be made to the **Trending Videos API URL** with `jwt_token` in the Cookies
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Trending Videos API URL**
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page should be navigated to the Home Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route

- **Gaming Route**

  - When an _authenticated_ user opens the Gaming Route,
    - An HTTP GET request should be made to the **Gaming Videos API URL** with `jwt_token` in the Cookies
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Gaming Videos API URL**
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page should be navigated to the Home Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route

- **Video Item Details Route**

  - When an _authenticated_ user opens the Video Item Details Route
    - An HTTP GET request should be made to the **Video Details API URL** with `jwt_token` in the Cookies and `video_id` as a path parameter
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Video Details API URL**
  - Corresponding video should be displayed using `react-player` package
  - Initially, all the three buttons (Like, Dislike, Save) should be inactive
  - When the **Like** button is clicked,
    - It should change to active state
    - If the **Dislike** button is already in the active state, then the **Dislike** button needs to be changed to the inactive state
  - When the **Dislike** button is clicked,

    - It should change to active state
    - If the **Like** button is already in the active state, then the **Like** button needs to be changed to the inactive state

  - When the **Save** button is clicked,
    - It should change to active state and the respective video details should be added to the list of saved videos
    - **Save** button text should be changed to **Saved**
  - When the **Saved** button is clicked
    - It should change to inactive state and the respective video details will be removed from the list of saved videos
    - **Saved** button text should be changed to **Save**

- **Saved Videos Route**

  - When an _authenticated_ user opens the Saved Videos Route,
    - If the list of saved videos is empty, then the [No Saved Videos Found View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-light-theme-lg-output-v0.png) should be displayed
    - The list of saved videos should be displayed
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Home** link in the Sidebar is clicked, then the page should be navigated to the Home Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route

- **Not Found Route**

  - When a random path is provided as the URL path, then the page should be navigated to the Not Found Route

- **Header**

  - When the Website logo is clicked, then the page should be navigated to the Home Route
  - When the theme icon button is clicked, then the theme should be changed accordingly
  - When the **Logout** button is clicked, then the [Logout Popup](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-light-theme-lg-output-v0.png) should be displayed
    - When the **Cancel** button is clicked, then the popup should be closed and the page should not be navigated
    - When the **Confirm** button is clicked, then the page should be navigated to the Login Route

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**Login API**

#### URL: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Request

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**Home Videos API**

#### URL: `https://apis.ccbp.in/videos/all?search=`

#### Method: `GET`

#### Description:

Returns a response containing the list of all videos

#### Response

```json
{
  "total": 60,
  "videos": [
    {
      "id": "30b642bd-7591-49f4-ac30-5c538f975b15",
      "title": "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
      "channel": {
        "name": "iB Cricket",
        "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
      },
      "view_count": "1.4K",
      "published_at": "Apr 19, 2019"
    },
    ...
  ],
}
```

**Trending Videos API**

#### URL: `https://apis.ccbp.in/videos/trending`

#### Method: `GET`

#### Description:

Returns a response containing the list of trending videos

#### Response

```json
{
  "total": 30,
  "videos": [
    {
      "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
      "title": "iB Hubs Announcement Event",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
      "channel": {
        "name": "iB Hubs",
        "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
      },
      "view_count": "26K",
      "published_at": "Nov 29, 2016"
    },
    ...
  ]
}
```

**Gaming Videos API**

#### URL: `https://apis.ccbp.in/videos/gaming`

#### Method: `GET`

#### Description:

Returns a response containing the list of gaming videos

#### Response

```json
{
  "total": 30,
  "videos": [
    {
      "id": "b214dc8a-b126-4d15-8523-d37404318347",
      "title": "Drop Stack Ball",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png",
      "view_count": "44K"
    },
    ...
  ]
}
```

**Video Details API**

#### URL: `https://apis.ccbp.in/videos/:id`

#### Example: `https://apis.ccbp.in/videos/802fcd20-1490-43c5-9e66-ce6dfefb40d1`

#### Method: `GET`

#### Description:

Returns a response containing the details of a specific video

#### Response

```json
{
  "video_details": {
    "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
    "title": "iB Hubs Announcement Event",
    "video_url": "https://www.youtube.com/watch?v=pT2ojWWjum8",
    "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
    "channel": {
      "name": "iB Hubs",
      "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png",
      "subscriber_count": "1M"
    },
    "view_count": "26K",
    "published_at": "Nov 29, 2016",
    "description": "iB Hubs grandly celebrated its Announcement Event in November 13, 2016, in the presence of many eminent personalities from the Government, Industry, and Academia with Shri Amitabh Kant, CEO, NITI Aayog as the Chief Guest."
  }
}
```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png) alt should be **profile**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png) alt should be **no videos**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png) alt should be **no saved videos**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png) alt as **not found**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png) **banner background image**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png) alt should be **facebook logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png) alt should be **twitter logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png) alt should be **linkedin logo**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0f0f0f; width: 150px; padding: 10px; color: white">Hex: #0f0f0f</div>
<div style="background-color: #f9f9f9; width: 150px; padding: 10px; color: black">Hex: #f9f9f9</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #f1f1f1; width: 150px; padding: 10px; color: black">Hex: #f1f1f1</div>
<div style="background-color: #181818; width: 150px; padding: 10px; color: white">Hex: #181818</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #4f46e5; width: 150px; padding: 10px; color: white">Hex: #4f46e5</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #231f20; width: 150px; padding: 10px; color: white">Hex: #231f20</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #212121; width: 150px; padding: 10px; color: white">Hex: #212121</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #00306e; width: 150px; padding: 10px; color: white">Hex: #00306e</div>
<div style="background-color: #ebebeb; width: 150px; padding: 10px; color: black">Hex: #ebebeb</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
<div style="background-color: #ff0000; width: 150px; padding: 10px; color: white">Hex: #ff0000</div>
<div style="background-color: #383838; width: 150px; padding: 10px; color: white">Hex: #383838</div>
<div style="background-color: #606060; width: 150px; padding: 10px; color: white">Hex: #606060</div>
<div style="background-color: #909090; width: 150px; padding: 10px; color: black">Hex: #909090</div>
<div style="background-color: #cccccc; width: 150px; padding: 10px; color: black">Hex: #cccccc</div>
<div style="background-color: #424242; width: 150px; padding: 10px; color: black">Hex: #424242</div>
<div style="background-color: #313131; width: 150px; padding: 10px; color: black">Hex: #313131</div>
<div style="background-color: #f4f4f4; width: 150px; padding: 10px; color: black">Hex: #f4f4f4</div>
<div style="background-color: #424242; width: 150px; padding: 10px; color: black">Hex: #424242</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

--- 

## 📂 Project Structure
# Project Directory

```plaintext
/src
|-- /components
|   |-- /AlternateView
|   |-- /AltVideoItem
|   |-- /GameItem
|   |-- /GamingPage
|   |-- /HomePage
|   |-- /HomePageBanner
|   |-- /LoginPage
|   |-- /LogoutPopup
|   |-- /MainLayout
|   |-- /MenuPopup
|   |-- /Navbar
|   |-- /NotFoundPage
|   |-- /PageIndicator
|   |-- /ProtectedRoute
|   |-- /SavedVideosPage
|   |-- /Sidebar
|   |-- /SimilarVideoItem
|   |-- /SimilarVideos
|   |-- /TrendingPage
|   |-- /VideoItem
|   |-- /VideoItemDetailsPage
|   |-- /ViewCredentials
|
|-- /context
|   |-- /AppContext
|   |-- /resources
|
|-- App.js
|-- App.css
|-- index.js
|-- GlobalStyle.js
|-- styledComponents.js


</details>
