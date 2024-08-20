import { useEffect } from "react";
import { useParams} from "react-router-dom";
import styles from "./styles.module.css";
//import { Fragment } from "react/cjs/react.production.min";
import { Fragment } from "react";
import newRequest from "../../utils/newRequest";

const EmailVerify = () => {
	const param = useParams();

	useEffect(() => {
	  const verifyEmailUrl = async () => {
		try {
		  const url = `https://shampyapi.onrender.com/api/auth/${param.id}/verify/${param.token}`; // Use relative path
		  console.log(url);
		  await newRequest.get(url);
  
		  // Wait for 2 seconds
		  window.alert("Successfully Verified");
  
		  window.location.replace('https://shampy.vercel.app/signin');

		  window.history.pushState({}, null, window.location.href);
		  window.addEventListener('popstate', () => {
			window.history.pushState({}, null, window.location.href);
		  });
		  
		} catch (error) {
		  // Handle error
		}
	  };
	
	  // Call the function
	  verifyEmailUrl();
	}, [param]);


	return (
		<Fragment>
				<div className={styles.container}>
					<img src="../../../success.png" alt="success_img" className={styles.success_img} />
					<h1>Successfully Verified</h1>
				</div>
		</Fragment>
	);
};

export default EmailVerify;
