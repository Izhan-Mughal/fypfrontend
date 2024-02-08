import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [isMounted, setisMounted] = useState(true);
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('Token');
    const navigate = useNavigate();
    useEffect(() => {

        console.log(token)
        handleStartupApiCall(token);
    }, [])
    const handleStartupApiCall = async (token) => {
        //       email: 'izhan28@gmail.com',
        // password: 'izhan123',

        try {
            // e.preventDefault();
            // console.log(fileName, "THIS IS FILE NAME ON API CALL")
            const response = await axios.post(`http://localhost:5000/api/v1/users/verify?token=${token}`, {
                token: token,

            }, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Credentials": "true",
                    "Content-Length": "997",
                    "Access-Control-Allow-Origin": "*",
                }
            });

            const apiResponse = response.data;
            console.log(apiResponse)
            // Assuming login is an asynchronous function that returns a Promise
            // await register(apiResponse.data.user._id, apiResponse.data.accessToken, apiResponse.data.refreshToken);

            // Check if the component is still mounted before navigating
            if (isMounted) {
                navigate('/Login/');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };
 
}

export default Verify