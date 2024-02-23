# Web SDK Integration Guide

Integrating an interactive chat component into your web application enhances user engagement and provides a channel for immediate communication. SayTV Chat SDK offers a robust solution that can be seamlessly integrated into your website.

#### **Step 1: Incorporating the SayTV Chat SDK**

First, you need to include the SayTV Chat SDK in your project. This can be achieved via two primary methods:

**1. Using a Content Delivery Network (CDN):**

Insert the following script tag into the `<head>` or at the end of the `<body>` section of your HTML document:

```html
<script src="https://sdk.saytv.net/bundle.js"></script>
```

This method is most suitable for simple projects or cases where you want a quick setup without the complexities of a build system.

**2. Using Node Package Manager (NPM):**

If your project is set up with Node.js, you can incorporate SayTV Chat SDK as a dependency:

```other
npm i saytv-chat
```

This method is recommended for more complex projects that are already using a modern front-end workflow with tools like Webpack, React, Vue.js, etc.

#### **Step 2: Placing the SayTV Chat Component**

Once the SDK is included in your project, integrate the `<saytv-chat/>` component into your HTML at the desired location:

```html
<saytv-chat
  apiurl="https://lad-api-v2.staging.saytv.sq1.io/api/v2"
  token-access=""
  authentication="true"
  height="850"
  width="600"
/>
```

#### **Step 3: Customizing the Chat Component**

The SayTV Chat SDK is designed to be flexible and adaptable to your specific needs. Here are the key properties you can customize:

| **Property**     | **Type** | **Description**                                                                                                     | **Recommended Values**  |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `apiurl`         | String   | The endpoint for accessing the SayTV chat SDK services.                                                             |                         |
| `authentication` | Boolean  | `true`: Enables SayTV's built-in authentication system. Useful if your app does not have its own system.            | `true` or `false`       |
|                  |          | `false`: Use this if your application manages its own user authentication. User verification is external.           |                         |
| `token-access`   | JWT      | Provide a JWT token from your authentication system. Allows access to authenticated users.                          | JWT token (as a string) |
|                  |          | Relevant only if `authentication` is set to `false`.                                                                |                         |
|                  |          | More info: [Token Access and JWT Configuration](craft-importer-internal-link://#Token Access and JWT Configuration) |                         |
| `height`         | px       | The height of the chat widget.                                                                                      | Minimum 600px           |
| `width`          | px       | The width of the chat widget.                                                                                       | Minimum 300px           |

#### **Step 4: Best Practices and Final Touches**

- Ensure that the `apiurl` is correctly set to connect with the SayTV services.
- For applications with existing user authentication, generate and pass a JWT token to the `token-access` property. This token should be securely generated on your server following a successful user login or registration.
- Test the chat component thoroughly to ensure that it integrates smoothly with both the user interface and user experience aspects of your website.
- Pay special attention to responsive design, ensuring that the chat component is usable and visually appealing across various devices and screen sizes.

---

## **Token Access and JWT Configuration**

**Note**: This is only valid if you are not using built in authentication from `<saytv-chat />` & would like to use your authentication system.

### Setting the JWT Secret and Configuration

Website owners can configure the JWT secret key and other related settings directly from their admin panel provided by SayTV. This configuration is crucial for verifying the JWT tokens used in the `token-access` property of the SayTV Chat SDK.

| **Setting**       | **Description**                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| JWT Secret        | A secret key used for signing and verifying JWT tokens. Set this through the SayTV admin panel. |
| JWT Configuration | Additional JWT settings like token expiration, issuer, and audience can be configured here.     |

### User Identification via JWT

SayTV utilizes the `sub` (subject) property within the JWT token to identify users. This is a standard claim in JWT tokens representing the subject of the token, typically the user ID. SayTV Chat SDK uses this `sub` value to:

- Associate messages with the correct user.
- Link users to specific chat rooms.
- Manage user profiles within the chat system.

| **JWT Property** | **Use in SayTV Chat SDK**                                                    |
| ---------------- | ---------------------------------------------------------------------------- |
| `sub`            | Identifies the user. Associated with messages, chatrooms, and user profiles. |

### Importance of Secure JWT Implementation

- Ensure that your JWT implementation is secure and aligns with best practices. The JWT secret must be kept confidential and secure.
- Correct configuration of the JWT properties ensures seamless integration of user authentication and management within the SayTV Chat SDK.
