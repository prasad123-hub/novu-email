# Send Email with novu Infrastructure

# What is Novu ?

## The open-source notification infrastructure for developers

Simple components and APIs for managing all communication channels in one place: Email, SMS, Direct, and Push

# Steps :

- Step 1 :

  - creating `NextJs` project using `npx create-next-app@latest my-app`
  - Clear out default code in `index.js` page.
  - Clear out `css` in `home.module.css`

- Step 2 :

  - cerate api route in `pages/api` as `mail.js`
  - write handler function as below
  - ```
      export default function handler(req, res) {
      res.status(200).json({ name: 'Test' })
      }
    ```
  - Test route `localhost:3000/api/mail` in browser

- Step 3 :

  - Now create a form in `index.js` under `Home` Component
  - ```
         <div className={styles.container}>
      {/* Header */}
      <div className={styles.headwrapper}>
        <h1 className={styles.heading}>
          Assign Task to Employess with Novu Notification Infrastructure
        </h1>
      </div>

      {/* form */}
      <div className={styles.formwrapper}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Employee Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Employee name here"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Employee Email</label>
            <br />
            <input
              type="text"
              placeholder="Enter Employee email here"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Task Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Task title here"
              className={styles.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Task Description</label>
            <br />
            <textarea
              type="text"
              placeholder="Task description here"
              className={styles.input}
              style={{ height: "100px" }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>
            {message}
          </button>
        </form>
      </div>
    </div>
    ```

- Step 4

  - UPDATE `styles/Home.module.css` with our own css

- Step 5

  - cerate `useState` for `name`, `email`,`title`,`description`,`loading`and `message`
  - ADD `onChnage` eventListener to each input and store values particular state

- Step 6:

  - Visit [Nouv website](https://web.novu.co/auth/login)
  - sign in
  - After sign in click on `notifications` on left side
  - click `New` for create new notification
  - fill the details
  - Notification name : `task-details`
  - Notification identifier : `task-details`
  - Notification description : `Here you can get your daily task`
  - Notification group : `General`

- Step 7:

  - Then click on `workflow editor`
  - Drag `email` below the `trigger` component
  - update template on click on `email component` -> `edit template`
  - add this to `subject section`
  - ```
      Hey {{ name }}

      Your Todays task is {{ title }}

      Task Details : {{ description }}
    ```

  - update the changes

- Step 8:

  - click on `integration store` on left sidebar
  - We are integrating `mailjet`
  - create account on [Mailjet](https://www.mailjet.com/)
  - after creating account `profile/account-setting/rest-api/api-key-management` and grab the secrets
  - come to novu and add to mailjet credentials
  - we have successfully integrated `mailjet` with `novu`

- Step 9 :

  - Now under `settings` tab on `novu website` there is one section called `Api keys`
  - Copy `APi Keys` and get back to code
  - crate `.env.local` file in root directory
  - add following code
  - ```
    NOVU_API_KEY=<api-key>
    ```

- Step 10 :

  - Write handler function in `pages/api/mail.js`
  - install `npm i @novu/node`
  - write the handler function where we are triggering novu with data we are passing from our form

- Step 11 :

  - create `handleSubmit` function in `pages/index.js` to create post request
  - fetch `api/mail` and send our name,email,title,description data as body
  - test with real email and check inbox email should be received
