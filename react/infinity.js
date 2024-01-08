import React from 'react';
import ReactDom from 'react-dom'
import './index.css'; 
// import home from './components/home';

const LoginPage = () => {
  return (

        <div className="nemos">
          {/* Images links */}
            <img src="https://cdn-icons-png.flaticon.com/256/8408/8408730.png" alt="art 1" className="image1" />
            <img src="https://cdn-icons-png.flaticon.com/256/8408/8408730.png" alt="art 2" className="image2" />
            <img src="https://cdn-icons-png.flaticon.com/256/5700/5700459.png" alt="art 3" className="image3" />
            <img src="https://cdn.pixabay.com/photo/2023/12/28/23/01/watercolor-8475111_1280.jpg" alt="art 4" className="image4" />
            <img src="https://cdn-icons-png.flaticon.com/256/6456/6456312.png" alt="art 5" className="image5" />
            <img src="https://cdn-icons-png.flaticon.com/256/6456/6456312.png" alt="art 6" className="image6" />

            <div className="rectangle"></div>

            <div className="loginbox">
                <input type="submit" value="LOGIN" className="login-button" />
            </div>

            <div className="remember-me">
                <input type="checkbox" id="remember" name="remember"/>
                <label for="remember">Remember me</label>
            </div>

            <div className="password">Password :</div>
            <div className="email">Email :</div>
            <div className="line-2"></div>
            <div className="line-1"></div>
            <div className="or">or</div>
            <div className="sign-up-using">sign up using</div>

    <a href="twitter.html">
        <svg className="twitter-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M30.9237 8.61752C30.8481 8.43478 30.72 8.27857 30.5555 8.16866C30.3911 8.05875 30.1978 8.00006 30 8.00002H26.1963C25.6644 7.09524 24.9076 6.34346 23.9992 5.81777C23.0909 5.29208 22.0619 5.01037 21.0125 5.00002C20.2306 4.98976 19.4546 5.13598 18.7301 5.43008C18.0056 5.72418 17.3472 6.16021 16.7937 6.71252C16.2241 7.27154 15.7719 7.93883 15.4639 8.67512C15.1559 9.41142 14.9981 10.2019 15 11V11.7613C9.9675 10.4338 5.85125 6.34002 5.8075 6.29627C5.67334 6.16092 5.5033 6.06672 5.3174 6.02477C5.1315 5.98283 4.93748 5.99487 4.7582 6.05949C4.57891 6.12411 4.42183 6.23862 4.30544 6.38952C4.18905 6.54043 4.11821 6.72145 4.10125 6.91127C3.5625 12.885 5.2975 16.8825 6.85125 19.1838C7.60885 20.3214 8.53048 21.3407 9.58625 22.2088C7.6825 24.4 4.685 25.5513 4.6525 25.5638C4.51139 25.6166 4.38405 25.7007 4.27999 25.8097C4.17594 25.9186 4.09785 26.0497 4.05158 26.1931C4.0053 26.3365 3.99203 26.4885 4.01275 26.6378C4.03347 26.787 4.08765 26.9296 4.17125 27.055C4.265 27.195 4.64 27.6863 5.55625 28.145C6.68875 28.7125 8.185 29 10 29C18.8337 29 26.215 22.1975 26.9688 13.445L30.7075 9.70752C30.8473 9.56759 30.9425 9.38934 30.981 9.19532C31.0195 9.0013 30.9995 8.80022 30.9237 8.61752ZM25.2987 12.2938C25.1273 12.4656 25.0242 12.694 25.0088 12.9363C24.5 20.8225 17.91 27 10 27C8.68 27 7.75 26.825 7.0975 26.615C8.53625 25.8338 10.5425 24.49 11.8325 22.555C11.9082 22.4412 11.9598 22.3131 11.9841 22.1786C12.0083 22.0442 12.0048 21.9061 11.9736 21.773C11.9425 21.64 11.8844 21.5147 11.8029 21.405C11.7214 21.2952 11.6184 21.2034 11.5 21.135C11.4412 21.1013 6.01125 17.8425 6 9.13502C8 10.76 11.6562 13.2813 15.8337 13.9838C15.9769 14.0079 16.1236 14.0006 16.2637 13.9623C16.4037 13.924 16.5338 13.8557 16.6448 13.7621C16.7558 13.6684 16.845 13.5518 16.9064 13.4202C16.9677 13.2886 16.9997 13.1452 17 13V11C16.9989 10.4666 17.1045 9.9383 17.3105 9.44628C17.5166 8.95426 17.819 8.50842 18.2 8.13502C18.5652 7.76914 19 7.48018 19.4788 7.28524C19.9576 7.09029 20.4706 6.99331 20.9875 7.00002C22.57 7.02002 24.0487 7.98502 24.6675 9.40127C24.7455 9.57932 24.8737 9.73079 25.0364 9.83713C25.1992 9.94347 25.3894 10.0001 25.5837 10H27.5837L25.2987 12.2938Z"
                fill="black" />
        </svg>
    </a>

    <a href="facebook.html">
        <svg className="facebook-logo" width="32" height="32" viewBox="0 0 32 32" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM17 26.9538V19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H15V26.9538C12.181 26.6964 9.56971 25.3622 7.7093 23.2287C5.8489 21.0952 4.8826 18.3266 5.0114 15.4988C5.1402 12.671 6.35419 10.0017 8.40085 8.04613C10.4475 6.09057 13.1693 4.9993 16 4.9993C18.8307 4.9993 21.5525 6.09057 23.5992 8.04613C25.6458 10.0017 26.8598 12.671 26.9886 15.4988C27.1174 18.3266 26.1511 21.0952 24.2907 23.2287C22.4303 25.3622 19.819 26.6964 17 26.9538Z"
                fill="black" />
        </svg>
    </a>

    <a href="google.html">
        <svg className="google-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M28 15.9999C28.0001 18.8254 27.0032 21.5604 25.1849 23.7231C23.3665 25.8858 20.8433 27.3374 18.0597 27.8224C15.2761 28.3074 12.4106 27.7946 9.96801 26.3743C7.52539 24.954 5.66229 22.7173 4.70686 20.0582C3.75142 17.3991 3.76495 14.4881 4.74505 11.838C5.72516 9.18793 7.60897 6.96867 10.0647 5.57113C12.5204 4.17359 15.3905 3.68742 18.1695 4.19825C20.9485 4.70908 23.4581 6.18415 25.2563 8.36364C25.3455 8.46409 25.4136 8.5815 25.4565 8.70885C25.4994 8.83621 25.5162 8.97091 25.5058 9.10489C25.4955 9.23888 25.4582 9.36941 25.3963 9.48868C25.3344 9.60795 25.2491 9.71351 25.1455 9.79907C25.0418 9.88463 24.922 9.94843 24.7932 9.98664C24.6643 10.0249 24.5291 10.0367 24.3956 10.0215C24.2621 10.0063 24.133 9.96434 24.0161 9.89813C23.8991 9.83191 23.7967 9.74281 23.715 9.63614C22.2442 7.85279 20.201 6.63406 17.933 6.18728C15.665 5.7405 13.3122 6.09327 11.275 7.18557C9.23769 8.27788 7.64178 10.0422 6.7587 12.1785C5.87562 14.3148 5.75992 16.6911 6.43128 18.903C7.10265 21.115 8.51961 23.0261 10.4411 24.3111C12.3626 25.5962 14.67 26.1759 16.9707 25.9515C19.2714 25.7272 21.4233 24.7127 23.0604 23.0807C24.6975 21.4487 25.7186 19.2999 25.95 16.9999H16C15.7348 16.9999 15.4804 16.8945 15.2929 16.707C15.1054 16.5195 15 16.2651 15 15.9999C15 15.7347 15.1054 15.4803 15.2929 15.2928C15.4804 15.1052 15.7348 14.9999 16 14.9999H27C27.2652 14.9999 27.5196 15.1052 27.7071 15.2928C27.8946 15.4803 28 15.7347 28 15.9999Z"
                fill="black" />
        </svg>
    </a>

    <div className="welcome">Welcome</div>

    <div className="forget-password">
        <a href="forget-password.html">Forget Password?</a>
    </div>
    <div className="i-n-fini-ty">
        iNFiniTy
        <br />
    </div>

          <div className="emailbox">
            <input type="email" id="email" name="email" required />
          </div>
          <div className="passwordbox">
            <input type="password" id="password" name="password" required />
          </div>
        </div>
);
};

export default LoginPage;
ReactDom.render(<LoginPage/>, document.getElementById('root'));
