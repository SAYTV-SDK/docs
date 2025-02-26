# SAYTV CHAT SDK INTEGRATION GUIDE #
### Introduction
SayTV Chat SDK is a powerful, customizable chat component. This guide will walk you through the process of integrating it into your application.

### Pre-requisites
A HTTPS server and Secure network is required for using of SDK Chat.

### SayTV Setup instruction
Download “dist” folder from SayTV Server and save into your application folder or use link in your host application.


### Meta tag
Inclide following meta tag in your head tag to remove zoom in iPhone
```sh
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
```
### CDN:
In Script Tag, include following script in your Login/Register/Index file:

```sh
<script src="https://sdk.saytv.net/bundle.js"></script>
```

### NPM:
Run below command in Command Window inside your application directory:

```
npm i saytv-chat 
```

### For React:
Run below command in Command Window inside your application directory:

```
import 'saytv-chat'
```

### Usage
To use the SayTV Chat SDK, simply add saytv-chat component in your HTML file:

**SayTV chat component**
```
<saytv-chat
    bubbleview="true"
    apiurl="Your API base url"
    token-access=""
    authentication="false">
</saytv-chat>
```
**SayTV profile component**
if you want to show profile page as a default landing.
```
<saytv-profile 
    bubbleview="true"
    apiurl="Your API base url"
    token-access=""
    authentication="false">
</saytv-profile>
```
**SayTV episode component**
if you want to show specific episode so you need to pass episode ID in episode attribute
```
<saytv-episode
    bubbleview="true"
    apiurl="Your API base url"
    token-access=""
    authentication="false"
    episode="Your episode ID">
</saytv-episode>
```

**SayTV component with custom `slot` for profile page**
if you want to add slot to a user profile page, just pass the `slot` attribute inside `span` with `slotview` and after that you can add your HTML.
**Note**: Slot will work for all componets like `saytv-chat`, `saytv-profile`, `saytv-episode`.
```
<saytv-chat
    bubbleview="true"
    apiurl="Your API base url"
    token-access=""
    authentication="false">
        <span slot="slotview">
            <!-- Your HTML for slot here -->
			<div class="outerSlotBox">
				<div class="innerBox">
						<div class="slot-icon"></div>
						<p class="slot-title">Total Wins</p>
						<span class="slot-value">1513</span>
				</div>
				<div class="innerBox">
					<div class="slot-icon"></div>
					<p class="slot-title">Total Bets</p>
					<span class="slot-value">631651</span>
				</div>
				<div class="innerBox">
					<div class="slot-icon"></div>
					<p class="slot-title">Total Wagered</p>
					<span class="slot-value">35613</span>
				</div>
			</div>
			 <!-- Your HTML for slot end -->
		</span>
</saytv-chat>
```
You can customize slot `CSS` at your end, for example.
```
<style>
/* external slots css */
		.outerSlotBox{
			 margin-top: 20px;
			display: flex;
			gap: 7px;
			border-radius: 7px;
			justify-content: center;
			padding: 10px;
			background: #111111;
		 }
		.innerBox {
			background-color: #efefef45;
			border-radius: 7px;
			padding: 7px;
			width: 33.33%;
			color: #fff;
			text-align: center;
		}
		.slot-title {
			font-size: 12px;
			margin:0
		}
		.slot-value{
			font-size: 21px;
			font-weight: 600;
		}
  /* external slots css */
</style>
```

### SayTV component with mobile view SDK (Mobile Application) 
if you want to use SDK in mobile application you can pass `mobileviewsdk="true"`
```
<saytv-episode
    bubbleview="true"
    apiurl="Your API base url"
    token-access=""
    authentication="false"
    episode="Your episode ID"
    mobileviewsdk="true"
    >
</saytv-episode>
```

##### Note:
In case, you want to Login/Register inside the SayTV-Chat SDK, please pass `authentication “true”`.

```
authentication="true"
```
For customize the appearance of the SayTV chat SDK with below attributes:

### API / Options
The following props (JS variables) are available to customize the `saytv-chat`,  `saytv-profile` component.

| Prop`*` | Value Type | Description  | Default Value |  
| ------ | ------ | ------ | ----- |
| `bubbleview` | `Boolean` | To make bubble view | `false`
| `apiurl` | `String` | For Access the SayTV chat SDK | `NULL`
| `token-access` | `String` | It should be JWT token to access the SDK for external login or keep it blank. | `NULL`
| `authentication` | `Boolean` | For Login/Register inside the SDK. | `false`
| `mobileviewsdk` | `Boolean` | For mobile application | `false`

The following props (JS variables) are available to customize the `saytv-episode` component.

| Prop`*` | Value Type | Description  | Default Value |  
| ------ | ------ | ------ | ----- |
| `bubbleview` | `Boolean` | To make bubble view | `false`
| `episode` | `string` | Only for SayTV episode chat component | `NULL`
| `apiurl` | `String` | For Access the SayTV chat SDK | `NULL`
| `token-access` | `String` | It should be JWT token to access the SDK for external login or keep it blank. | `NULL`
| `authentication` | `Boolean` | For Login/Register inside the SDK. | `false`
| `mobileviewsdk` | `Boolean` | For mobile application | `false`


The following props (CSS variables) are available to customize the saytv-chat component:

| Prop | Description  | Default Value |  
| ------ | ------ | ----- |
| `height` | Customize the SayTV SDK height. | `600px`
| `width` | Customize the SayTV SDK width. | `100%`

`*` These are the mandatory parameters. 
**Note**:- 
- you can pass height and width in  `px`,`%` ,`vh` and `calc()` .
- For better UI, width should be minimum `300px` and height should be minimum `600px`.


### Login
Call this Function in a File for login on Firebase and SDK then Get Token.
Example: 

```
<script>
  document.getElementById("loginButtonId").onclick = async () => {
    let payload = {
          email : 'email',
          password : 'Password',
    }
    //Parameter- payload, apiUrl
    const response = window.connect.SayTVLogin(
        payload,
        "Your API base url"
    );
  };
</script>
```

# For React.JS

```
 const Login = () => {
    let payload = {
          email : 'email',
          password : 'Password',
    }
    //Parameter- payload, apiUrl
    const response = window.connect.SayTVLogin(
        payload,
        "Your API base url"
    );
  };
```

| Methods | Description  | 
| ------ | ------ | 
| SayTVLogin | It’s a custom SDK function. It takes payload, apiurl in SayTVLogin function and return response after login in SDK. 

#### Validations 
- **Email:** Use proper email format. 
- **Password:** Minimum 6 characters.

#### Payload
| Key | Type of Value  | Description |  
| ------ | ------ | ----- |
| `Username` | `String` | 
| `Password` | `String` | 
| `apiurl` | `String` | For Access the SayTV chat SDK
| `response` | `Object` | 

#### Response :

| Key | Type of Value  | 
| ------ | ------ | 
| `data` | `Object` | 
| `code` | `Number` | 
| `message` | `String` | 

#### Register
Call this Function in a File for register on Firebase and SDK then Get Token.
Example:

```
<script> 
    document.querySelector("saytv-chat").shadowRoot.getElementById("registerCard").onclick = async () => {
        let payload = {
          username: 'UserName',
          email : 'email',
          password : 'Password',
        };
        const response = window.connect.SayTVRegister(payload,
          "Your API base url"
        ));
    }
</script>
```

### React.JS

```
    const Register = () => {
        let payload = {
          username: 'UserName',
          email : 'email',
          password : 'Password',
        };
    
        const response = window.connect.SayTVRegister(payload,
          "Your API base url"
        ));
    }
```

| Methods | Description  | 
| ------ | ------ | 
| `SayTVRegister` | It’s a custom SDK function. It takes payload and apiurl as perimeters and return response after register in SDK. | 

#### Validation:
- **Username:** Minimum 3 characters. 
- **Email:** Use proper email format. 
- **Password:** Minimum 6 characters.
#### Payload
| Key | Type of Value  | Description |  
| ------ | ------ | ----- |
| `Email` | `String` | 
| `Password` | `String` | 
| `Username` | `String` | 
| `apiurl` | `String` | For Access the SayTV chat SDK
| `response` | `Object` | 

#### Response :

| Key | Type of Value  | 
| ------ | ------ |
| `data` | `Object` | 
| `code` | `Number` | 
| `message` | `String` | 


---

## Best Practices and Final Touches**

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
