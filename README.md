This project was made from the [figma design](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend), with [vite](https://vitejs.dev/) and [Redux Toolkit](https://redux-toolkit.js.org/)'s RTK Query to get data from the APIs used.

It includes four pages 
1. The Login Page which when any details is entered and clicked on the Login button directs the user to the next page
2. The Dashboard page which gets data from an [API](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users)
and designs the UI based on this data.
3. The Dashboard details appear based on click events on the Dashboard page. This includes the Organisation dialog box to
make changes to organisation data and also the filter for each data item to get more details.
When a user clicks on the view details from this dialog box, the single user data is saved on localStorage.
4. The User details page uses the data saved on localStorage to get more details about the user from the 
[API](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id) using the id.


Tech stack Used
React
TypeScript
SCSS
RTK Query



In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

The project was deployed using [vercel](https://vercel.com/) and is available for use on the public 
[deployment site](https://tesleem-oladepo-lendsqr-fe-test.vercel.app/).
The code is available on [@Tasleemofx github](https://github.com/Tasleemofx/lendsqr-fe-test)
